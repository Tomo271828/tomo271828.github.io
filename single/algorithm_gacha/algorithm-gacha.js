(() => {
    'use strict';

    const button = document.getElementById('draw-button');
    const result = document.getElementById('result');
    let algorithms = [];

    function parseLinks(cell, problemOnly = false) {
        if (cell === '-') return [];
        return cell.split(' ; ').map(value => {
            const match = value.match(/^\[([^\]]+)\]\((https:\/\/[^\s<>]+)\)$/);
            if (!match) throw new Error('リンクの記法を確認してください。');
            const url = new URL(match[2]);
            if (url.protocol !== 'https:' || url.username || url.password ||
                (problemOnly && !/^https:\/\/(?:atcoder\.jp\/contests\/[a-z0-9_-]+\/tasks\/[a-z0-9_-]+|judge\.yosupo\.jp\/problem\/[a-z0-9_]+)$/i.test(match[2]))) {
                throw new Error('リンクのURLを確認してください。');
            }
            return { label: match[1], url: url.href };
        });
    }

    // Only this Markdown table is the source of candidates; no duplicated JS list.
    function parseAlgorithms(markdown) {
        const lines = markdown.replace(/^\uFEFF/, '').split(/\r?\n/);
        const header = lines.findIndex(line => line.trim() === '| テーマ | 分野 | 概要 | 出題例 | 資料 |');
        if (header < 0 || !/^\|(?:\s*:?-+:?\s*\|){5}$/.test((lines[header + 1] || '').trim())) {
            throw new Error('選出テーブルの見出しが見つかりません。');
        }
        const entries = [];
        const names = new Set();
        for (const line of lines.slice(header + 2)) {
            if (!line.trim().startsWith('|')) break;
            const cells = line.trim().split('|').slice(1, -1).map(cell => cell.trim());
            if (cells.length !== 5 || cells.some(cell => !cell)) {
                throw new Error('選出テーブルに空欄または列数の不一致があります。');
            }
            const [name, category, description, reference, materials] = cells;
            const problems = parseLinks(reference, true);
            const resources = parseLinks(materials);
            if ((!problems.length && !resources.length) || names.has(name)) {
                throw new Error('問題か資料のリンクが必要です。テーマの重複も確認してください。');
            }
            names.add(name);
            entries.push({ name, category, description, problems, resources });
        }
        if (!entries.length) throw new Error('抽選候補がありません。');
        return entries;
    }

    function createLink(reference, showUrl = false) {
        const link = document.createElement('a');
        link.href = reference.url;
        link.textContent = showUrl ? reference.url : reference.label;
        link.title = reference.label;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        return link;
    }

    // Rejection sampling avoids modulo bias for uniform independent draws.
    function randomIndex(length) {
        const range = 2 ** 32;
        const limit = range - (range % length);
        const value = new Uint32Array(1);
        do {
            window.crypto.getRandomValues(value);
        } while (value[0] >= limit);
        return value[0] % length;
    }

    function renderCatalog() {
        const body = document.getElementById('catalog-body');
        const fragment = document.createDocumentFragment();
        for (const entry of algorithms) {
            const row = document.createElement('tr');
            for (const text of [entry.name, entry.category]) {
                const cell = document.createElement('td');
                cell.textContent = text;
                row.append(cell);
            }
            for (const references of [entry.problems, entry.resources]) {
                const cell = document.createElement('td');
                if (!references.length) cell.textContent = '—';
                for (const reference of references) cell.append(createLink(reference));
                row.append(cell);
            }
            fragment.append(row);
        }
        body.replaceChildren(fragment);
    }

    async function loadAlgorithms() {
        button.disabled = true;
        result.hidden = true;
        result.classList.remove('error');
        try {
            const response = await fetch('algorithms.md', { cache: 'no-cache' });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            algorithms = parseAlgorithms(await response.text());
            renderCatalog();
            button.textContent = 'ガチャを引く';
        } catch (error) {
            algorithms = [];
            button.textContent = '再読み込みする';
            result.classList.add('error');
            result.textContent = '候補を読み込めませんでした。再読み込みしてください。';
            result.hidden = false;
            console.error('Algorithm gacha:', error);
        } finally {
            button.disabled = false;
        }
    }

    button.addEventListener('click', () => {
        if (!algorithms.length) {
            void loadAlgorithms();
            return;
        }
        const entry = algorithms[randomIndex(algorithms.length)];
        const name = document.createElement('span');
        name.textContent = entry.name;
        result.replaceChildren(name);
        for (const [label, references] of [['問題', entry.problems], ['資料', entry.resources]]) {
            for (const reference of references) {
                const line = document.createElement('span');
                line.className = 'reference-link';
                const caption = document.createElement('span');
                caption.textContent = `${label}：`;
                line.append(caption, createLink(reference, true));
                result.append(line);
            }
        }
        result.hidden = false;
    });

    void loadAlgorithms();
})();
