(() => {
    const progress = document.getElementById("undergraduate-progress");
    const output = document.getElementById("undergraduate-progress-value");
    if (!progress || !output) return;

    const percentage = progress.max > 0
        ? Math.round((progress.value / progress.max) * 100)
        : 0;
    output.value = `${percentage}%`;
    progress.textContent = `${percentage}%`;
})();
