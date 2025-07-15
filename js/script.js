function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon .material-symbols-rounded");

    menu.classList.toggle("open");
    const isHam = icon.textContent.trim() === "menu";
    icon.textContent = isHam ? "close" : "menu";
}