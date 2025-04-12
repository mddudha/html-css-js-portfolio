function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function loadPen(penId) {
    const pens = {
        pen1: "https://codepen.io/Mirva-Dudhagara/embed/dPyEqJK?default-tab=result",
        pen2: "https://codepen.io/Mirva-Dudhagara/embed/GgRaXab?default-tab=result",
    };
    
    const embedUrl = pens[penId];
    document.getElementById("embed-area").innerHTML = `
        <iframe height="500" style="width: 100%;" scrolling="no" title="Showcase Embed"
            src="${embedUrl}" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        </iframe>`;
}


window.onload = function() {
    loadPen("pen1");
};