// 一覧の並べ替え・分類。表示用の文言とは別の数値を優先する。
(() => {
    const dictionary = new Intl.Collator("ja", { usage: "sort" });
    function teamCount(game) {
        if (Number.isInteger(game.teamSizeCount) && game.teamSizeCount > 0) return game.teamSizeCount;
        const label = String(game.teamSize ?? "").trim();
        if (label === "個人制作") return 1;
        const match = label.match(/^(\d+)\s*人?$/);
        return match && Number(match[1]) > 0 ? Number(match[1]) : null;
    }
    function arrangeGames(games, ascending = true, grouping = null, selectedTags = [], tagMode = "and") {
        const entries = games.map((game, index) => ({ game, index,
            matches: selectedTags.length === 0 || (Array.isArray(game.tags) && (tagMode === "or"
                ? selectedTags.some(tag => game.tags.includes(tag))
                : selectedTags.every(tag => game.tags.includes(tag)))),
        }));
        entries.sort((a, b) => {
            if (a.matches !== b.matches) return a.matches ? -1 : 1;
            const x = a.game.developmentOrder;
            const y = b.game.developmentOrder;
            const validX = typeof x === "number" && Number.isFinite(x);
            const validY = typeof y === "number" && Number.isFinite(y);
            if (validX !== validY) return validX ? -1 : 1;
            if (validX && x !== y) return (x - y) * (ascending ? 1 : -1);
            return a.index - b.index;
        });
        if (!grouping) return [{ label: "", entries }];
        const groups = new Map();
        for (const entry of entries) {
            const count = teamCount(entry.game);
            const key = grouping === "engine" ? String(entry.game.engine ?? "").trim() || "未設定" : count;
            if (!groups.has(key)) groups.set(key, {
                label: grouping === "engine" ? key : count === null ? "未設定" : `${count}人`,
                count,
                entries: [],
            });
            groups.get(key).entries.push(entry);
        }
        return [...groups.values()].sort((a, b) => grouping === "engine"
            ? b.entries.length - a.entries.length || dictionary.compare(a.label, b.label)
            : (b.count ?? -1) - (a.count ?? -1));
    }
    if (typeof module !== "undefined" && module.exports) module.exports = { arrangeGames };
    else window.arrangeGames = arrangeGames;
})();
