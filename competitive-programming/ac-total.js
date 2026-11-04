(async () => {
    const number = document.getElementById('ac-total-number');
    const list = document.getElementById('ac-total-sites');
    const status = document.getElementById('ac-total-status');
    const formatCount = new Intl.NumberFormat('ja-JP');

    try {
        const response = await fetch('atcoder-rating.json', { cache: 'no-cache' });
        if (!response.ok) throw new Error('AC counts unavailable');
        const { acCount, libraryChecker, codeforces, yukicoder } = await response.json();
        const sites = [
            { name: 'AtCoder', acCount: acCount?.count },
            { name: 'Library Checker', acCount: libraryChecker?.count },
            { name: 'Codeforces', acCount: codeforces?.count ?? 0 },
            { name: 'LeetCode', acCount: 4 },
            { name: 'Project Euler', acCount: 26 },
            { name: 'Aizu Online Judge', acCount: 8 },
            { name: 'yukicoder', acCount: yukicoder?.count ?? 0 },
            { name: 'MojaCoder', acCount: 15 },
            { name: 'Kagamiz Contest System', acCount: 7 }
        ];
        // 開催日の古い順。
        const icpc = [
            { name: 'ICPC 2025 国内予選', acCount: 6 },
            { name: 'ICPC 2026 模擬国内予選', acCount: 5 },
            { name: 'ICPC 2026 国内予選', acCount: 6 }
        ];
        const entries = [...sites.sort((a, b) => b.acCount - a.acCount), ...icpc];
        if (entries.some(site => !Number.isSafeInteger(site.acCount) || site.acCount < 0)) {
            throw new Error('Invalid AC counts');
        }

        const total = entries.reduce((sum, site) => sum + site.acCount, 0);
        if (!Number.isSafeInteger(total)) throw new Error('Invalid AC total');

        const rows = entries.map((site, index) => {
            const row = document.createElement('div');
            if (index === sites.length) row.className = 'ac-total__icpc-start';
            const label = document.createElement('dt');
            const count = document.createElement('dd');
            label.textContent = site.name;
            count.textContent = `${formatCount.format(site.acCount)} 問`;
            row.append(label, count);
            return row;
        });
        list.replaceChildren(...rows);
        list.hidden = false;
        number.textContent = `${formatCount.format(total)} 問`;
        status.hidden = true;
    } catch (error) {
        status.textContent = 'AC数を読み込めませんでした。';
        console.error(error);
    }
})();
