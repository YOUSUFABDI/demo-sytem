const openMenuFirstPageIcon = document.querySelector(
  "[data-first-page-open-nav]"
);
const closeMenuFirstPageIcon = document.querySelector(
  "[data-first-page-close-nav]"
);
const menuFirstPage = document.querySelector("[data-menu-first-page]");
const overlayFirstPage = document.querySelector("[data-overlay-first-page]");
const dataTable = document.querySelector("[data-table-sec]");

function openFirstPageNav() {
  menuFirstPage.classList.add("open-menu");
  overlayFirstPage.classList.add("open-overlay");
  dataTable.style.display = "none";
}

function closeFirstPageNav() {
  menuFirstPage.classList.remove("open-menu");
  overlayFirstPage.classList.remove("open-overlay");
  dataTable.style.display = "block";
}

openMenuFirstPageIcon.addEventListener("click", () => {
  openFirstPageNav();
});

closeMenuFirstPageIcon.addEventListener("click", () => {
  closeFirstPageNav();
});
