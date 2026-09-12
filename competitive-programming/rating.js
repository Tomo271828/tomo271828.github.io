(async () => {
    const status = document.getElementById('rating-caption');
    const ns = 'http://www.w3.org/2000/svg';
    const animationDuration = 1200;
    const dateText = value => new Date(value).toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo' });
    const colors = ['#808080', '#a66b3d', '#38a65a', '#36bac6', '#668cff', '#d3c839', '#f6a044', '#ee6464'];
    const color = rating => colors[Math.min(7, Math.max(0, Math.floor(rating / 400)))];
    function element(tag, attrs, text) {
        const node = document.createElementNS(ns, tag);
        for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
        if (text !== undefined) node.textContent = text;
        return node;
    }
    try {
        const response = await fetch('atcoder-rating.json', { cache: 'no-cache' });
        if (!response.ok) throw new Error('Rating data unavailable');
        const saved = await response.json();
        const layoutQuery = window.matchMedia('(max-width: 720px)');
        const library = saved.libraryChecker;
        const libraryUpdated = document.getElementById('library-updated');
        if (Number.isSafeInteger(library?.count) && library.count >= 0) {
            document.getElementById('library-ac-count').textContent = library.count.toLocaleString('ja-JP');
            libraryUpdated.textContent = `最終取得：${new Date(library.updatedAt).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}（日本時間） · 毎週日曜 1:00 更新予定`;
        } else {
            libraryUpdated.textContent = 'AC数はまだ取得されていません。';
        }
        const acCount = saved.acCount;
        const acCountNode = document.getElementById('rating-ac-count');
        if (Number.isSafeInteger(acCount?.count) && acCount.count >= 0) {
            acCountNode.textContent = acCount.count.toLocaleString('ja-JP');
            acCountNode.title = `最終取得：${new Date(acCount.updatedAt).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}（日本時間） · 毎週日曜 1:00 更新予定`;
        }
        const tabs = [...document.querySelectorAll('[data-rating-mode]')];
        let animationFrame;
        let statsFrame;
        function render(mode) {
        cancelAnimationFrame(animationFrame);
        cancelAnimationFrame(statsFrame);
        const label = mode === 'algo' ? 'Algorithm' : 'Heuristic';
        const data = saved.modes?.[mode] || (mode === 'algo' ? saved : { userId: saved.userId, history: [] });
        for (const tab of tabs) {
            const active = tab.dataset.ratingMode === mode;
            tab.setAttribute('aria-selected', String(active));
            tab.tabIndex = active ? 0 : -1;
        }
        document.getElementById('rating-content').setAttribute('aria-labelledby', `rating-tab-${mode}`);
        document.getElementById('rating-chart').replaceChildren();
        for (const id of ['rating-current', 'rating-highest']) {
            document.getElementById(id).textContent = '—';
            document.getElementById(id).style.color = '';
        }
        const history = data.history;
        const profile = document.getElementById('atcoder-profile');
        profile.textContent = 'AtCoder ユーザーページ';
        profile.href = `https://atcoder.jp/users/${encodeURIComponent(data.userId)}?contestType=${mode}`;
        document.getElementById('rating-updated').textContent = `最終取得：${new Date(data.updatedAt).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}（日本時間） · 毎週日曜 1:00 更新予定`;
        document.getElementById('rating-count').textContent = history.length;
        document.getElementById('rating-top-percent').textContent =
            Number.isFinite(data.topPercent) ? `${data.topPercent}%` : '—';
        if (!history.length) { status.textContent = 'Ratedコンテストへの参加履歴はまだありません。'; return; }
        const latest = history[history.length - 1].rating;
        const highest = Math.max(...history.map(item => item.rating));
        for (const [id, value] of [['rating-current', latest], ['rating-highest', highest]]) {
            const node = document.getElementById(id);
            node.textContent = value;
            node.style.color = color(value);
        }
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const counters = [
                ['rating-current', latest], ['rating-highest', highest], ['rating-count', history.length]
            ].map(([id, value]) => [document.getElementById(id), value]);
            const percentNode = document.getElementById('rating-top-percent');
            const hasPercent = Number.isFinite(data.topPercent);
            const decimals = Math.max(1, String(data.topPercent).split('.')[1]?.length || 0);
            function updateCounters(progress) {
                // 前半70%は一定速度、最後の30%だけ滑らかに減速する。
                const tail = Math.max(0, (progress - 0.7) / 0.3);
                const eased = progress <= 0.7 ? progress / 0.85 :
                    (0.7 + 0.3 * (tail - tail * tail / 2)) / 0.85;
                for (const [node, value] of counters) {
                    const digits = String(value);
                    if (progress === 1) {
                        node.textContent = digits;
                        continue;
                    }
                    const changing = Math.min(digits.length,
                        progress < 0.25 ? digits.length : progress < 0.5 ? 3 : progress < 0.75 ? 2 : 1);
                    const fixed = digits.length - changing;
                    node.textContent = digits.slice(0, fixed) + Array.from({ length: changing },
                        () => String(Math.floor(Math.random() * 10))).join('');
                }
                if (hasPercent) percentNode.textContent = progress === 1 ? `${data.topPercent}%` :
                    `${(100 + (data.topPercent - 100) * eased).toFixed(decimals)}%`;
            }
            updateCounters(0);
            let statsStarted;
            function countFrame(now) {
                statsStarted ??= now;
                const progress = Math.min(1, (now - statsStarted) / animationDuration);
                updateCounters(progress);
                if (progress < 1) statsFrame = requestAnimationFrame(countFrame);
            }
            statsFrame = requestAnimationFrame(countFrame);
        }
        const compact = layoutQuery.matches;
        const viewWidth = compact ? 320 : 960;
        const viewHeight = compact ? 260 : 400;
        const left = compact ? 36 : 60;
        const top = compact ? 16 : 20;
        const width = compact ? 272 : 870;
        const height = compact ? 194 : 325;
        const svg = element('svg', { viewBox: `0 0 ${viewWidth} ${viewHeight}`, role: 'group', 'aria-label': `${data.userId}の${label} Rating推移。各点を選択すると成績を表示します。` });
        // 現在値より1色（400）上。過去の最高値も見切れない余白を確保する。
        const ceiling = Math.max(400, latest + 400, highest + 100);
        const start = Date.parse(history[0].date), end = Date.parse(history[history.length - 1].date);
        const x = date => left + (end === start ? .5 : (Date.parse(date) - start) / (end - start)) * width;
        const y = rating => top + height * (1 - rating / ceiling);
        const background = element('g', { class: 'rating-chart-background' });
        const definitions = element('defs', {});
        const clip = element('clipPath', { id: 'rating-reveal-clip', clipPathUnits: 'userSpaceOnUse' });
        const reveal = element('rect', { x: 0, y: 0, width: viewWidth, height: viewHeight });
        clip.append(reveal);
        const glowFilter = element('filter', { id: 'rating-tip-glow', x: '-200%', y: '-200%', width: '500%', height: '500%' });
        glowFilter.append(element('feGaussianBlur', { stdDeviation: 5 }));
        definitions.append(clip, glowFilter);
        const plot = element('g', { 'clip-path': 'url(#rating-reveal-clip)' });
        svg.append(definitions, background, plot);
        for (let low = 0; low < ceiling; low += 400) {
            const upper = Math.min(low + 400, ceiling);
            background.append(element('rect', { x: left, y: y(upper), width, height: height * (upper - low) / ceiling, fill: color(low), opacity: .24 }));
            background.append(element('line', { x1: left, x2: left + width, y1: y(low), y2: y(low), stroke: '#ffffff22' }));
            background.append(element('text', { x: left - (compact ? 6 : 10), y: y(low) + 4, fill: '#b6bdca', 'font-size': compact ? 9 : 12, 'text-anchor': 'end' }, low));
        }
        const tickCount = compact ? 2 : 4;
        for (let i = 0; i <= tickCount; i++) {
            const time = start + (end - start) * i / tickCount;
            background.append(element('text', { x: left + width * i / tickCount, y: compact ? 238 : 375, fill: '#b6bdca', 'font-size': compact ? 9 : 12, 'text-anchor': i === 0 ? 'start' : i === tickCount ? 'end' : 'middle' }, dateText(time)));
        }
        const points = history.map(item => [x(item.date), y(item.rating)]);
        plot.append(element('polyline', { points: points.map(point => point.join(',')).join(' '), fill: 'none', stroke: '#e9edf5', 'stroke-width': 1.5, 'stroke-linejoin': 'round' }));
        for (const item of history) {
            const label = `${dateText(item.date)} · ${item.contest} · Rating ${item.rating}`;
            const dot = element('circle', { cx: x(item.date), cy: y(item.rating), r: 3, fill: color(item.rating), stroke: '#11151d', 'stroke-width': 1, tabindex: 0, role: 'button', 'aria-label': label });
            dot.append(element('title', {}, label));
            for (const event of ['pointerenter', 'focus', 'click']) dot.addEventListener(event, () => { status.textContent = label; });
            dot.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); status.textContent = label; } });
            plot.append(dot);
        }
        // 光はクリップの外に置き、折れ線と同じ時計・座標で動かす。
        const glow = element('g', { opacity: 0, 'aria-hidden': 'true', 'pointer-events': 'none' });
        for (const [radius, className] of [[11, 'rating-tip-glow'], [2.5, 'rating-tip-core']]) {
            glow.append(element('circle', { cx: 0, cy: 0, r: radius, class: className }));
        }
        svg.append(glow);
        document.getElementById('rating-chart').replaceChildren(svg);
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            reveal.setAttribute('width', 0);
            let started;
            function frame(now) {
                if (!svg.isConnected) return;
                started ??= now;
                const progress = Math.min(1, (now - started) / animationDuration);
                const tipX = points[0][0] + (points[points.length - 1][0] - points[0][0]) * progress;
                let index = 0;
                while (index < points.length - 2 && points[index + 1][0] <= tipX) index++;
                const a = points[index], b = points[Math.min(index + 1, points.length - 1)];
                const fraction = b[0] === a[0] ? 0 : (tipX - a[0]) / (b[0] - a[0]);
                const tipY = a[1] + (b[1] - a[1]) * fraction;
                reveal.setAttribute('width', progress === 1 ? viewWidth : tipX);
                glow.setAttribute('transform', `translate(${tipX} ${tipY})`);
                glow.setAttribute('opacity', String(Math.min(1, (1 - progress) / .15)));
                if (progress < 1) animationFrame = requestAnimationFrame(frame);
                else glow.remove();
            }
            animationFrame = requestAnimationFrame(frame);
        }
        status.textContent = 'グラフの点にカーソルを合わせるか、タップするとコンテストの成績を表示します。';
        }
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => render(tab.dataset.ratingMode));
            tab.addEventListener('keydown', event => {
                if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
                event.preventDefault();
                const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 :
                    (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
                tabs[next].focus();
                render(tabs[next].dataset.ratingMode);
            });
        });
        layoutQuery.addEventListener('change', () => {
            const active = tabs.find(tab => tab.getAttribute('aria-selected') === 'true');
            render(active?.dataset.ratingMode || 'algo');
        });
        render('algo');
    } catch (error) {
        document.getElementById('library-updated').textContent = 'AC数を読み込めませんでした。時間をおいて再読み込みしてください。';
        status.textContent = 'Rating履歴を読み込めませんでした。時間をおいて再読み込みしてください。';
        console.error(error);
    }
})();
