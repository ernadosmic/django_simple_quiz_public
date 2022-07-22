// MENU TOGGLE
const toggleButton = document.getElementsByClassName("nav-toggle")[0];
const navLinks = document.getElementsByClassName("nav-links");
const navButtons = document.querySelectorAll("li.nav-buttons");
toggleButton.addEventListener("click", () => {
    navButtons[i].toggle("open-menu");
    for (const i in navLinks) {
        navLinks[i].classList.toggle("open-menu");
    }
    window.navigator.vibrate([80]);
});

// CLICK AWAY
window.onclick = function (e) {
    if (!document.getElementById("header").contains(e.target)) {
        for (const i in navLinks) {
            navLinks[i].classList.remove("open-menu");
        }
        for (const i in navButtons) {
            navButtons[i].remove("open-menu");
        }
    };
};

// SCROLL AWAY
window.onscroll = function () {
    for (const i in navLinks) {
        navLinks[i].classList.remove("open-menu");
    }
    for (const i in navButtons) {
        navButtons[i].remove("open-menu");
    }
}