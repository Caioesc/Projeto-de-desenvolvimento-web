const darkModeButton = document.getElementById('dark-mode');
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const menuButton = document.getElementById("menu-toggle");
const slideMenu = document.getElementById("slide-menu");

menuButton.addEventListener("click", () => {
    slideMenu.classList.toggle("open");
});
