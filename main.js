const plus = document.getElementById("plus")
const moins = document.getElementById("moins")
const number = document.getElementById("number")
const binary = document.getElementById("binary")


plus.addEventListener('click',incrementer)
moins.addEventListener('click',decrementer)

function incrementer() {
  let i = number.textContent;
  i++;
  number.textContent=i;
}

function decrementer() {
  let i = number.textContent;
  i--;
  number.textContent=i;
}

