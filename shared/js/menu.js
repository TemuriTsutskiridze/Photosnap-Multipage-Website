`use strict`;

const menu = document.querySelector(`#menu-mob`);

const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  showMenu();
});
function showMenu() {
  if (menuBtn.classList.contains(`active`)) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
}
