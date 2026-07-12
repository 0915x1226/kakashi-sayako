const PASSWORD = "2141";

function checkPassword() {
    const input = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (input === PASSWORD) {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        error.textContent = "パスワードが違います";
    }
}

// Enterキーでもログイン
document.getElementById("password").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        checkPassword();
    }
});