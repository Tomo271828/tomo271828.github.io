(() => {
    const list = document.getElementById("qiita-list");
    const status = document.getElementById("qiita-status");
    const techBookList = document.getElementById("techbook-list");
    const techBookStatus = document.getElementById("techbook-status");
    if (!list || !status || !techBookList || !techBookStatus) return;

    const dateFormatter = new Intl.DateTimeFormat("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    function createCard(item) {
        const listItem = document.createElement("li");
        const article = document.createElement("article");
        article.className = "qiita-card";

        const title = document.createElement("h3");
        title.textContent = item.title || "無題の記事";

        const tags = document.createElement("ul");
        tags.className = "qiita-tags";
        for (const tagName of Array.isArray(item.tags) ? item.tags : []) {
            const tag = document.createElement("li");
            tag.textContent = tagName;
            tags.append(tag);
        }

        const excerpt = document.createElement("p");
        excerpt.className = "qiita-excerpt";
        excerpt.textContent = item.excerpt || "記事の概要はQiitaでご覧ください。";

        const footer = document.createElement("div");
        footer.className = "qiita-card-footer";

        const published = document.createElement("time");
        published.className = "qiita-published";
        if (item.created_at) {
            const date = new Date(item.created_at);
            published.dateTime = item.created_at;
            published.textContent = Number.isNaN(date.getTime()) ? "" : dateFormatter.format(date);
        }

        const link = document.createElement("a");
        link.className = "qiita-read";
        link.href = item.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "読む";
        link.setAttribute("aria-label", `${title.textContent}をQiitaで読む`);

        footer.append(published, link);
        article.append(title);
        if (tags.childElementCount) article.append(tags);
        article.append(excerpt, footer);
        listItem.append(article);
        return listItem;
    }

    function createTechBookCard(item) {
        const listItem = document.createElement("li");
        const article = document.createElement("article");
        article.className = "qiita-card techbook-card";

        const content = document.createElement("div");
        content.className = "techbook-card-content";

        const title = document.createElement("h3");
        title.textContent = item.bookTitle || "タイトル未設定";

        const articleTitle = document.createElement("p");
        articleTitle.className = "techbook-article-title";
        articleTitle.textContent = item.articleTitle || "記事タイトル未設定";

        const footer = document.createElement("div");
        footer.className = "qiita-card-footer";

        const salePeriod = document.createElement("span");
        salePeriod.className = "qiita-published";
        salePeriod.textContent = `販売時期：${item.salePeriod || "未設定"}`;

        const link = document.createElement("a");
        link.className = "qiita-read";
        link.href = item.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "販売ページ";
        link.setAttribute("aria-label", `${title.textContent}の販売ページを開く`);

        footer.append(salePeriod, link);
        content.append(title, articleTitle, footer);

        const imageUrl = getTechBookImageUrl(item.url);
        if (imageUrl) {
            const cover = document.createElement("img");
            cover.className = "techbook-cover";
            cover.src = imageUrl;
            cover.alt = `${title.textContent}の表紙`;
            cover.loading = "lazy";
            cover.decoding = "async";
            cover.addEventListener("error", () => {
                cover.remove();
                article.classList.add("techbook-card--no-image");
            });
            article.append(cover, content);
        } else {
            article.classList.add("techbook-card--no-image");
            article.append(content);
        }
        listItem.append(article);
        return listItem;
    }

    function getTechBookImageUrl(productUrl) {
        try {
            const url = new URL(productUrl);
            if (url.hostname !== "techbookfest.org") return "";
            const match = url.pathname.match(/^\/product\/([^/]+)/);
            if (!match) return "";
            return `https://techbookfest.org/api/product/ogp/image/${encodeURIComponent(match[1])}`;
        } catch {
            return "";
        }
    }

    async function loadArticles() {
        try {
            const response = await fetch("qiita-articles.json", { cache: "no-cache" });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            const items = Array.isArray(data.items) ? data.items : [];
            list.replaceChildren(...items.map(createCard));
            status.textContent = items.length
                ? `${items.length}件の記事を新しい順に掲載しています。`
                : "公開中の記事はありません。";
        } catch (error) {
            status.textContent = "記事一覧を読み込めませんでした。時間をおいて再度お試しください。";
        }
    }

    function loadTechBooks() {
        const items = Array.isArray(window.portfolioTechBooks) ? window.portfolioTechBooks : [];
        const validItems = items.filter((item) => item && item.url);
        techBookList.replaceChildren(...validItems.map(createTechBookCard));
        techBookStatus.textContent = validItems.length
            ? `${validItems.length}件の販売情報を掲載しています。`
            : "現在掲載中の販売情報はありません。";
    }

    loadArticles();
    loadTechBooks();
})();
