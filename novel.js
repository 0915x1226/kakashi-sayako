document.addEventListener("DOMContentLoaded", () => {

    const novel = document.querySelector(".novel-body");

    if (!novel) return;

    // 元のテキストを取得
    const text = novel.innerHTML.trim();

    // 空行で段落分け
    const paragraphs = text
        .split(/\n\s*\n/)
        .map(p => p.trim())
        .filter(p => p.length > 0);

    // HTML生成
    novel.innerHTML = paragraphs
        .map(p => `<p>${p.replace(/\n/g,"<br>")}</p>`)
        .join("");

});