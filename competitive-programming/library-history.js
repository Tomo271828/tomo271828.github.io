(async () => {
    const list = document.getElementById('library-history-list');
    const status = document.getElementById('library-history-status');
    const formatter = new Intl.DateTimeFormat('ja-JP', {
        timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
    });
    try {
        const response = await fetch('library-history.json', { cache: 'no-cache' });
        if (!response.ok) throw new Error('Commit history unavailable');
        const saved = await response.json();
        if (!Array.isArray(saved.commits)) throw new Error('Invalid commit history');
        const entries = saved.commits.map(commit => {
            const date = new Date(commit.date);
            const url = new URL(commit.url);
            if (typeof commit.message !== 'string' || !Number.isFinite(date.getTime()) ||
                url.origin !== 'https://github.com' || !url.pathname.startsWith('/Tomo271828/TomoLibrary/commit/')) {
                throw new Error('Invalid commit entry');
            }
            const item = document.createElement('li');
            const link = document.createElement('a');
            link.className = 'library-history-message';
            link.href = url.href;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = commit.message;
            link.title = commit.message;
            const time = document.createElement('time');
            time.dateTime = commit.date;
            time.textContent = formatter.format(date);
            item.append(link, time);
            return item;
        });
        list.replaceChildren(...entries);
        status.hidden = entries.length > 0;
        status.textContent = entries.length ? '' : '更新履歴はまだありません。';
    } catch (error) {
        status.textContent = '更新履歴を読み込めませんでした。時間をおいて再読み込みしてください。';
        console.error(error);
    }
})();
