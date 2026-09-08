(() => {
    const grid = document.getElementById("games-grid");
    const dialog = document.getElementById("game-dialog");
    const title = document.getElementById("game-title");
    const tags = document.getElementById("game-tags");
    const description = document.getElementById("game-description");
    const image = document.getElementById("game-image");
    const engine = document.getElementById("game-engine");
    const teamSize = document.getElementById("game-team-size");
    const developmentPeriod = document.getElementById("game-development-period");
    const games = Array.isArray(window.portfolioGames) ? window.portfolioGames : [];
    const scriptUrl = document.querySelector('script[src*="/games/games.js"]')?.src || document.baseURI;
    const gamesBaseUrl = new URL("./", scriptUrl);
    let opener;
    let selectedGame;
    let descriptionRequest;
    const descriptionTabs = [...document.querySelectorAll('.game-description-tabs [role="tab"]')];

    async function selectDescription(tab) {
        descriptionRequest?.abort();
        const request = new AbortController();
        descriptionRequest = request;
        for (const button of descriptionTabs) {
            const active = button === tab;
            button.setAttribute("aria-selected", String(active));
            button.tabIndex = active ? 0 : -1;
        }
        description.setAttribute("aria-labelledby", tab.id);
        description.scrollTop = 0;
        const path = selectedGame?.[tab.dataset.description];
        description.setAttribute("aria-busy", "false");
        if (!path) {
            description.textContent = "この文章は準備中です。";
            return;
        }
        if (location.protocol === "file:") {
            description.textContent = "HTMLを直接開いているため、ブラウザの制限でTXTを読み込めません。\nローカルサーバーを起動し、次のページから開いてください。\n";
            const localLink = document.createElement("a");
            localLink.href = "http://localhost:8000/games/";
            localLink.textContent = "http://localhost:8000/games/";
            description.append(localLink);
            return;
        }
        description.textContent = "読み込み中…";
        description.setAttribute("aria-busy", "true");
        try {
            const response = await fetch(new URL(path, gamesBaseUrl), { signal: request.signal, cache: "no-cache" });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const text = await response.text();
            if (request.signal.aborted) return;
            description.textContent = text.trim() ? text : "この文章は準備中です。";
        } catch (error) {
            if (request.signal.aborted) return;
            const reason = error.message.startsWith("HTTP ")
                ? `サーバー応答：${error.message}。ファイルの配置とパスを確認してください。`
                : "サーバーへの接続を確認して、タブを選び直してください。";
            description.textContent = `文章を読み込めませんでした。\n${reason}\n対象：${path}`;
        } finally {
            if (!request.signal.aborted) description.setAttribute("aria-busy", "false");
        }
    }

    descriptionTabs.forEach((tab, index) => {
        tab.addEventListener("click", () => selectDescription(tab));
        tab.addEventListener("keydown", (event) => {
            let next;
            if (event.key === "ArrowRight") next = (index + 1) % descriptionTabs.length;
            if (event.key === "ArrowLeft") next = (index + descriptionTabs.length - 1) % descriptionTabs.length;
            if (event.key === "Home") next = 0;
            if (event.key === "End") next = descriptionTabs.length - 1;
            if (next === undefined) return;
            event.preventDefault();
            descriptionTabs[next].focus();
            selectDescription(descriptionTabs[next]);
        });
    });

    function makeTags(values) {
        const fragment = document.createDocumentFragment();
        for (const tag of Array.isArray(values) ? values : []) {
            const item = document.createElement("li");
            item.textContent = tag;
            fragment.append(item);
        }
        return fragment;
    }

    function makeImage(game, detailed = false) {
        const container = document.createElement("div");
        container.className = detailed ? "game-media game-media--detail" : "game-media";
        const placeholder = document.createElement("span");
        placeholder.className = "game-placeholder";
        placeholder.textContent = "画像準備中";
        container.append(placeholder);
        const source = detailed ? game.detailImage || game.image : game.image;
        if (source) {
            const picture = document.createElement("img");
            picture.alt = detailed ? game.imageAlt || game.title : "";
            picture.loading = detailed ? "eager" : "lazy";
            picture.decoding = "async";
            if (detailed) {
                picture.width = 1920;
                picture.height = 1080;
            }
            picture.addEventListener("load", () => { placeholder.hidden = true; });
            picture.addEventListener("error", () => { picture.remove(); });
            picture.src = new URL(source, gamesBaseUrl);
            container.append(picture);
        }
        return container;
    }

    const cards = [];
    for (const game of games) {
        const item = document.createElement("li");
        const card = document.createElement("div");
        card.className = "game-card";
        const trigger = document.createElement("button");
        trigger.className = "game-card-trigger";
        trigger.type = "button";
        trigger.setAttribute("aria-haspopup", "dialog");
        trigger.setAttribute("aria-label", `${game.title}の詳細を表示`);
        const body = document.createElement("div");
        body.className = "game-card-body";
        const heading = document.createElement("h2");
        heading.textContent = game.title;
        const tagList = document.createElement("ul");
        tagList.className = "game-tags";
        tagList.append(makeTags(game.tags));
        body.append(heading, tagList);
        card.append(makeImage(game), body, trigger);
        trigger.addEventListener("click", () => {
            opener = trigger;
            title.textContent = game.title;
            tags.replaceChildren(makeTags(game.tags));
            engine.textContent = game.engine || "未設定";
            teamSize.textContent = game.teamSize || "未設定";
            developmentPeriod.textContent = game.developmentPeriod || "未設定";
            selectedGame = game;
            selectDescription(descriptionTabs[0]);
            image.replaceChildren(makeImage(game, true));
            dialog.showModal();
            dialog.scrollTop = 0;
            description.scrollTop = 0;
            title.scrollTop = 0;
            dialog.querySelector(".game-visual").scrollTop = 0;
            dialog.querySelector(".game-dialog-layout").scrollTop = 0;
            document.body.classList.add("game-dialog-open");
        });
        item.append(card);
        cards.push(item);
    }
    let ascending = false;
    let grouping = null;
    const sortButton = document.getElementById("games-sort");
    const groupButtons = [...document.querySelectorAll("[data-group]")];
    const selectedTags = new Set();
    let tagMode = "and";
    for (const radio of document.querySelectorAll('input[name="tag-mode"]')) {
        radio.checked = radio.value === tagMode;
        radio.addEventListener("change", () => {
            if (!radio.checked) return;
            tagMode = radio.value;
            renderGames();
        });
    }
    const tagToggle = document.getElementById("games-tag-toggle");
    const tagPanel = document.getElementById("games-tag-panel");
    const tagOptions = document.getElementById("games-tag-options");
    const tagStatus = document.getElementById("games-tag-status");
    const allTags = [...new Set(games.flatMap(game => Array.isArray(game.tags) ? game.tags : []))]
        .sort((a, b) => String(a).localeCompare(String(b), "ja"));
    for (const tag of allTags) {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) selectedTags.add(tag);
            else selectedTags.delete(tag);
            renderGames();
        });
        label.append(checkbox, document.createTextNode(tag));
        tagOptions.append(label);
    }
    if (!allTags.length) tagOptions.textContent = "登録されたタグはありません。";
    tagToggle.addEventListener("click", () => {
        tagPanel.hidden = !tagPanel.hidden;
        tagToggle.setAttribute("aria-expanded", String(!tagPanel.hidden));
    });
    tagPanel.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            tagPanel.hidden = true;
            tagToggle.setAttribute("aria-expanded", "false");
            tagToggle.focus();
        }
    });
    document.getElementById("games-tag-clear").addEventListener("click", () => {
        selectedTags.clear();
        for (const checkbox of tagOptions.querySelectorAll("input")) checkbox.checked = false;
        renderGames();
    });
    function renderGames() {
        const fragment = document.createDocumentFragment();
        let matchCount = 0;
        for (const group of window.arrangeGames(games, ascending, grouping, [...selectedTags], tagMode)) {
            const section = document.createElement("section");
            if (grouping) {
                const heading = document.createElement("h2");
                heading.className = "games-group-heading";
                heading.textContent = group.label;
                section.append(heading);
            }
            const list = document.createElement("ul");
            list.className = "games-grid";
            list.setAttribute("aria-label", group.label || "ゲーム一覧");
            for (const entry of group.entries) {
                cards[entry.index].classList.toggle("game-unmatched", !entry.matches);
                if (entry.matches) matchCount++;
                list.append(cards[entry.index]);
            }
            section.append(list);
            fragment.append(section);
        }
        grid.replaceChildren(fragment);
        tagToggle.textContent = selectedTags.size ? `タグ絞り込み（${selectedTags.size}）` : "タグ絞り込み";
        tagStatus.textContent = selectedTags.size ? `${tagMode.toUpperCase()}検索：${games.length}作品中${matchCount}作品が該当${grouping ? "（各分類内で優先表示）" : ""}` : "";
        sortButton.textContent = `開発時期${ascending ? "↑" : "↓"}`;
        sortButton.setAttribute("aria-label", `開発時期：${ascending ? "古い順。クリックで新しい順に変更" : "新しい順。クリックで古い順に変更"}`);
        for (const button of groupButtons) button.setAttribute("aria-pressed", String(button.dataset.group === grouping));
    }
    sortButton.addEventListener("click", () => { ascending = !ascending; renderGames(); });
    for (const button of groupButtons) button.addEventListener("click", () => {
        grouping = grouping === button.dataset.group ? null : button.dataset.group;
        renderGames();
    });
    renderGames();
    document.getElementById("games-empty").hidden = games.length > 0;

    dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
    // 背景を押して離した場合のみ閉じる（説明文を選択する操作と区別）。
    let backdropPressed = false;
    const isOutside = (event) => {
        const rect = dialog.getBoundingClientRect();
        return event.clientX < rect.left || event.clientX > rect.right ||
            event.clientY < rect.top || event.clientY > rect.bottom;
    };
    dialog.addEventListener("pointerdown", (event) => { backdropPressed = isOutside(event); });
    dialog.addEventListener("pointerup", (event) => {
        if (backdropPressed && isOutside(event)) dialog.close();
        backdropPressed = false;
    });
    dialog.addEventListener("close", () => {
        descriptionRequest?.abort();
        selectedGame = undefined;
        document.body.classList.remove("game-dialog-open");
        image.replaceChildren();
        opener?.focus({ preventScroll: true });
    });
})();
