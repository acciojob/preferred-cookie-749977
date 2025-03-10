function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split("=");
        if (key === name) return value;
    }
    return null;
}

function applyPreferences() {
    const savedFontSize = getCookie("fontsize");
    const savedFontColor = getCookie("fontcolor");
    if (savedFontSize) document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
    if (savedFontColor) document.documentElement.style.setProperty("--fontcolor", savedFontColor);
}

document.getElementById("fontForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const fontSize = document.getElementById("fontsize").value;
    const fontColor = document.getElementById("fontcolor").value;
    setCookie("fontsize", fontSize, 30);
    setCookie("fontcolor", fontColor, 30);
    applyPreferences();
});

applyPreferences();
