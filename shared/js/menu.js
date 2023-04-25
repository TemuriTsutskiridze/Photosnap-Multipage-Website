`use strict`;

const menu = document.querySelector(`#menu-mob`);
const btn = document.querySelector(`#btn`);

const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  showMenu();
});
function showMenu() {
  if (menuBtn.classList.contains(`active`)) {
    btn.src = `../../shared/assets/mobile/close.svg`;
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
    btn.src = `../../shared/assets/mobile/menu.svg`;
  }
}
