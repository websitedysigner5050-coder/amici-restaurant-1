document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.querySelector(".main-nav");
    const year = document.getElementById("year");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("open");
        });
    }

    document.querySelectorAll(".main-nav a").forEach(link => {
        link.addEventListener("click", () => {
            mainNav?.classList.remove("open");
        });
    });

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
