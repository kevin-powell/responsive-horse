const navToggle = document.querySelector(".nav-toggle");
const mainMenu = document.querySelector("#main-menu");

navToggle.addEventListener("click", () => {
  const navState = navToggle.getAttribute("aria-expanded");
  if (navState == "false") {
    navToggle.setAttribute("aria-expanded", true);
    mainMenu.setAttribute("data-visible", true);
  } else {
    navToggle.setAttribute("aria-expanded", false);
    mainMenu.setAttribute("data-visible", false);
  }
});
