const menuButton = document.querySelector(".menu-mobile");
const aside = document.querySelector("aside");
const menuLinks = document.querySelectorAll("aside ul a");

menuButton.addEventListener("click", () => {
  aside.classList.toggle("menu-open");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    aside.classList.remove("menu-open");
  });
});
