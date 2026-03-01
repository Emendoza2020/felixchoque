document.addEventListener("DOMContentLoaded", function() {
    const bio = document.querySelector('.bio');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });
    observer.observe(bio);
});

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");
const header = document.getElementById("header");
const links = document.querySelectorAll("nav ul li a");

/* Toggle menú */
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
});

/* Cerrar al hacer clic */
links.forEach(link => {
    link.addEventListener("click", () => {
        toggle.classList.remove("active");
        nav.classList.remove("active");
    });
});

/* Cambio al hacer scroll */
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});