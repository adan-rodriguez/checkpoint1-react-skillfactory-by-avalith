const menu = document.querySelector(".nav-ftc");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

const toggleMenu = () => {
  menu.classList.toggle("nav-ftc-block");
  openMenuBtn.classList.toggle("open-menu-none");
};

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
