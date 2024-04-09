// javascript

const menuBtn = document.querySelector(".menu-btn");
menu = document.querySelector(".nav-container");
exitBtn = document.querySelector(".exit-btn");

let isOpen = false;

menuBtn.addEventListener("click", () => {
  isOpen
    ? (menu.style.transform = "translateY(-100%)")
    : (menu.style.transform = "translateY(0)");
  isOpen = !isOpen;
});
