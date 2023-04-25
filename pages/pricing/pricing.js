const input = document.getElementById("input");
const per_year = document.querySelectorAll('.per-year');
const payment = document.querySelectorAll('.payment');
const month = document.getElementById("month");
const year = document.getElementById("year");

const updateElements = () => {
  const factor = input.checked ? 10 : 0.1;
  month.style.color = input.checked ? "rgba(0, 0, 0, 0.5)" : "var(--pure-black)";
  year.style.color = input.checked ? "rgba(0, 0, 0, 1)" :  "rgba(0, 0, 0, 0.5)";
  per_year.forEach(element => element.textContent = input.checked ? "per year" : "per month");
  payment.forEach(element => element.textContent = `$${parseInt(element.textContent.slice(1)) * factor}.00`);
};

input.addEventListener("click", updateElements);