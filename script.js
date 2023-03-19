const x = document.getElementById("number");
const y = document.getElementById("span-1");
const total = document.getElementById("span-2");
const custom = document.getElementById("number1");
const reset = document.getElementById("reset");
const z = document.getElementById("number2");
const error = document.getElementById("span-0");
let button = document.querySelectorAll(".btn");

Array.from(button).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "" || z.value == "0") {
      error.innerHTML = "Can't be zero";
      y.textContent = "0.00";
      total.textContent = "0.00";
    } else if (e.target.innerHTML == "" || z.value < "0") {
      error.innerHTML = "Can't be '-ve'";
      y.textContent = "0.00";
      total.textContent = "0.00";
    } else {
      error.innerHTML = "";

      if (e.target.innerHTML == "5%") {
        let a = x.value;
        let b = z.value;
        let c = (a * 0.05) / b;
        y.textContent = parseInt(c * 100) / 100;
        let d = a / b + c;
        total.textContent = parseInt(d * 100) / 100;
      } else if (e.target.innerHTML == "10%") {
        let a = x.value;
        let b = z.value;
        let c = (a * 0.1) / b;
        y.textContent = parseInt(c * 100) / 100;
        let d = a / b + c;
        total.textContent = parseInt(d * 100) / 100;
      } else if (e.target.innerHTML == "15%") {
        let a = x.value;
        let b = z.value;
        let c = (a * 0.15) / b;
        y.textContent = parseInt(c * 100) / 100;
        let d = a / b + c;
        total.textContent = parseInt(d * 100) / 100;
      } else if (e.target.innerHTML == "25%") {
        let a = x.value;
        let b = z.value;
        let c = (a * 0.25) / b;
        y.textContent = parseInt(c * 100) / 100;
        let d = a / b + c;
        total.textContent = parseInt(d * 100) / 100;
      } else if (e.target.innerHTML == "50%") {
        let a = x.value;
        let b = z.value;
        let c = (a * 0.5) / b;
        y.textContent = parseInt(c * 100) / 100;
        let d = a / b + c;
        total.textContent = parseInt(d * 100) / 100;
      }
    }
  });
});
custom.addEventListener("input", () => {
  let a = x.value;
  let b = z.value;
  let p = custom.value;
  let c = (a * (p / 100)) / b;
  y.textContent = parseInt(c * 100) / 100;
  let d = a / b + c;
  total.textContent = parseInt(d * 100) / 100;
});

reset.addEventListener("click", () => {
  x.value = "";
  z.value = "";
  custom.value = "";
  error.innerHTML = "";
  y.textContent = "0.00";
  total.textContent = "0.00";
});
