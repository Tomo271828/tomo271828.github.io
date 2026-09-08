// 詳細画面を閉じる際は、戻り値の関数でタイマーを停止します。
window.createGameGallery = function (host, game, baseUrl, tags) {
    const sources = [...new Set(Array.isArray(game.detailImages)
        ? game.detailImages.filter(Boolean) : [game.detailImage || game.image].filter(Boolean))];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let current = 0;
    let timer;
    let disposed = false;
    const root = document.createElement("div");
    root.className = "game-gallery";
    root.setAttribute("aria-label", "ゲーム画像");
    const stage = document.createElement("div");
    stage.className = "game-media game-media--detail gallery-stage";
    const thumbnails = document.createElement("div");
    thumbnails.className = "gallery-thumbnails";
    thumbnails.setAttribute("role", "group");
    thumbnails.setAttribute("aria-label", "表示する画像を選択");
    const slides = [];
    const buttons = [];
    function schedule() {
        clearTimeout(timer);
        if (disposed || reducedMotion.matches || document.hidden || sources.length < 2) return;
        timer = setTimeout(() => show((current + 1) % sources.length), 5000);
    }
    function show(index) {
        current = index;
        slides.forEach((slide, i) => {
            slide.classList.toggle("is-active", i === index);
            slide.setAttribute("aria-hidden", String(i !== index));
            buttons[i].setAttribute("aria-pressed", String(i === index));
        });
        // サムネイル欄だけをスクロールし、本文の位置は動かしません。
        const button = buttons[index];
        if (button) thumbnails.scrollLeft = Math.max(0, button.offsetLeft - thumbnails.offsetLeft - (thumbnails.clientWidth - button.offsetWidth) / 2);
        schedule();
    }
    sources.forEach((source, index) => {
        const slide = document.createElement("div");
        slide.className = "gallery-slide";
        const picture = document.createElement("img");
        picture.alt = `${game.imageAlt || game.title}（${index + 1} / ${sources.length}）`;
        picture.width = 1920;
        picture.height = 1080;
        picture.decoding = "async";
        picture.addEventListener("error", () => {
            picture.remove();
            const message = document.createElement("span");
            message.className = "game-placeholder";
            message.textContent = "画像を読み込めませんでした。";
            slide.append(message);
        });
        picture.src = new URL(source, baseUrl).href;
        slide.append(picture);
        stage.append(slide);
        slides.push(slide);
        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("aria-label", `画像${index + 1}を表示`);
        const thumbnail = document.createElement("img");
        thumbnail.alt = "";
        thumbnail.src = picture.src;
        thumbnail.addEventListener("error", () => { thumbnail.remove(); button.textContent = `画像${index + 1}`; });
        button.append(thumbnail);
        button.addEventListener("click", () => show(index));
        button.addEventListener("keydown", event => {
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
            event.preventDefault();
            const next = (index + (event.key === "ArrowRight" ? 1 : -1) + sources.length) % sources.length;
            buttons[next].focus();
            show(next);
        });
        thumbnails.append(button);
        buttons.push(button);
    });
    if (!sources.length) stage.textContent = "画像準備中";
    const footer = document.createElement("div");
    footer.className = "gallery-footer";
    footer.append(thumbnails);
    if (tags) footer.append(tags);
    root.append(stage, footer);
    document.addEventListener("visibilitychange", schedule);
    reducedMotion.addEventListener("change", schedule);
    host.replaceChildren(root);
    show(0);
    return () => {
        disposed = true;
        clearTimeout(timer);
        document.removeEventListener("visibilitychange", schedule);
        reducedMotion.removeEventListener("change", schedule);
    };
};
