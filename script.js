const botaoMenu = document.getElementById("menu-toggle");
const slideMenu = document.getElementById("slide-menu");

botaoMenu.addEventListener("click", () => {
    slideMenu.classList.toggle("open");
});


function botaoDarkMode() {
    const body = document.body;
    const darkModeOn = body.classList.toggle("dark-mode");
    
   
    localStorage.setItem("darkMode", darkModeOn ? "enabled" : "disabled");
}

document.addEventListener("DOMContentLoaded", () => {
    const modoSalvo = localStorage.getItem("darkMode");
    
    if (modoSalvo === "enabled") {
        document.body.classList.add("dark-mode");
    }
});
