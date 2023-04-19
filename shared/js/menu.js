`use strict`;

const open = document.querySelector(`#open`);
const close = document.querySelector(`#close`);
const menu = document.querySelector(`#menu-mob`);

open.addEventListener(`click`, () => {
  menu.classList.remove(`invisible`);
  close.classList.remove(`invisible`);
  open.classList.add(`invisible`);
});

close.addEventListener(`click`, () => {
  menu.classList.add(`invisible`);
  close.classList.add(`invisible`);
  open.classList.remove(`invisible`);
});
