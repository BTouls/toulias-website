
const menuButton = document.querySelector(".menu-mobile");
const aside = document.querySelector("aside");
const menuLinks = document.querySelectorAll("aside ul a");
const selector = document.querySelector(".language-selector");

// Language selector
if (selector) {
  const current = selector.querySelector(".language-current");
  const currentImg = current.querySelector("img");
  const options = selector.querySelectorAll(".language-option");

  let selectedLang = currentImg.getAttribute("src").includes("gb.svg")
    ? "en"
    : "el";

  function changeLanguage(lang) {
    document.body.classList.remove("english", "greek");
    document.body.classList.add(lang === "en" ? "english" : "greek");
  }

  function updateDropdown() {
    options.forEach((option) => {
      option.style.display =
        option.dataset.lang !== selectedLang ? "block" : "none";
    });
  }

  changeLanguage(selectedLang);
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

      changeLanguage(selectedLang);

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

// Mobile menu
menuButton.addEventListener("click", () => {
  aside.classList.toggle("menu-open");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    aside.classList.remove("menu-open");
  });
});
