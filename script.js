const elements = document.querySelectorAll(".fade-in");
const indicator = document.querySelector(".nav-indicator");
const links = document.querySelectorAll("nav a");

function showOnScroll() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

let lastScroll = 0;
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.classList.add("hidden");
    } else {
        nav.classList.remove("hidden");
    }

    lastScroll = currentScroll;
});