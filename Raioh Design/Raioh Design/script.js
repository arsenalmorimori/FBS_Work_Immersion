// CONTACT
const contactButton = document.querySelector(".contact_button");
const contactForm = document.querySelector(".contact_forms");
const backDrop = document.querySelector(".backdrop");
contactButton.addEventListener("click", () => {
  if (contactForm.classList.contains("open")) {
    contactForm.classList.remove("open");
    contactButton.classList.remove("open");
    backDrop.classList.remove("open");
  } else {
    contactForm.classList.add("open");
    contactButton.classList.add("open");
    backDrop.classList.add("open");
  }
});

// BURGER
const burgir = document.querySelector(".togggle_menu");
const hNav = document.querySelector(".header_nav");
burgir.addEventListener("click", () => {
  burgir.classList.toggle("open");
  hNav.classList.toggle("open");
});
