(() => {
    const progress = document.getElementById("undergraduate-progress");
    const output = document.getElementById("undergraduate-progress-value");
    if (progress && output) {
        const percentage = progress.max > 0
            ? Math.round((progress.value / progress.max) * 100)
            : 0;
        output.value = `${percentage}%`;
        progress.textContent = `${percentage}%`;
    }

    const historyList = document.getElementById("research-history-list");
    const historyScroll = document.getElementById("research-history-scroll");
    const historyStatus = document.getElementById("research-history-status");
    if (!historyList || !historyScroll || !historyStatus) return;

    const history = Array.isArray(window.researchHistory)
        ? [...window.researchHistory]
        : [];
    history.sort((left, right) => String(right.date).localeCompare(String(left.date)));

    if (!history.length) {
        historyStatus.textContent = "履歴はまだ登録されていません。";
        historyScroll.hidden = true;
        return;
    }

    const items = history.map((entry) => {
        const item = document.createElement("li");
        item.className = "research-history-item";

        const date = document.createElement("time");
        date.className = "research-history-date";
        date.dateTime = entry.date || "";
        date.textContent = String(entry.date || "").replaceAll("-", ".");

        const description = document.createElement("p");
        description.className = "research-history-description";
        description.textContent = entry.description || "説明未設定";
        description.title = description.textContent;

        item.append(date, description);
        return item;
    });

    historyList.replaceChildren(...items);
    historyStatus.textContent = `${items.length}件（新しい順）`;
})();
