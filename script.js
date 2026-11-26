const menuButton = document.querySelector(".menu-mobile");
const aside = document.querySelector("aside");
const menuLinks = document.querySelectorAll("aside ul a");
const selector = document.querySelector(".language-selector");

// js from language selector
if (selector) {
  const current = selector.querySelector(".language-current");
  const currentImg = current.querySelector("img");
  const options = selector.querySelectorAll(".language-option");

  // Αρχική γλώσσα σύμφωνα με τη σημαία που εμφανίζεται επάνω
  let selectedLang = currentImg.getAttribute("src").includes("gb.svg")
    ? "en"
    : "el";

  function updateDropdown() {
    options.forEach((option) => {
      option.style.display =
        option.dataset.lang !== selectedLang ? "block" : "none";
    });
  }

  updateDropdown();

  current.addEventListener("click", (e) => {
    e.stopPropagation();
    selector.classList.toggle("active");
  });

  options.forEach((option) => {
    option.addEventListener("click", (e) => {
      e.stopPropagation();

      selectedLang = option.dataset.lang;

      const img = option.querySelector("img");

      currentImg.src = img.src;
      currentImg.alt = img.alt;

      updateDropdown();
      selector.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!selector.contains(e.target)) {
      selector.classList.remove("active");
    }
  });
}
// js for the menu on mobile

menuButton.addEventListener("click", () => {
  aside.classList.toggle("menu-open");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    aside.classList.remove("menu-open");
  });
});
