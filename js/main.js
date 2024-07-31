const input = document.querySelector(".input");
const output = document.querySelector(".output");
const PASSLENGTH = 12;

input.addEventListener("input", function () {
  output.textContent = 0 + this.value.length;

  if (this.value.length >= PASSLENGTH) {
    output.style.color = "green";
  } else {
    output.style.color = "red";
  }
});
