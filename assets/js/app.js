let label = document.querySelector("label");
let menu = document.querySelector(".menu");

label.addEventListener("click", () => {
    label.classList.toggle(".active-menu");
    label.classList.toggle(".active");
    menu.classList.toggle(".d-none")
})