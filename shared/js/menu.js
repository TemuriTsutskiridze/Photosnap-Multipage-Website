`use strict`;

const open = document.querySelector(`#open`);
const menu = document.querySelector(`#menu-mob`);
let opened = false;

open.addEventListener(`click`, () => {
  if (!opened) {
    menu.classList.remove(`invisible`);
    open.src = "../../shared/assets/mobile/close.svg";
    opened = true;
  } else {
    menu.classList.add(`invisible`);
    open.src = "../../shared/assets/mobile/menu.svg";
    opened = false;
  }
});
