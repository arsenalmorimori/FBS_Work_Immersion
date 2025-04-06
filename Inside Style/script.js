// BURGER
const burgir = document.querySelector(".toggle_menu");
const hNav = document.querySelector(".header_nav");
burgir.addEventListener("click", () => {
  burgir.classList.toggle("open");
  hNav.classList.toggle("open");
});

