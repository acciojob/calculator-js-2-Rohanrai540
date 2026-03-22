//your JS code here. If required.
const display = document.getElementById("display");

// Add numbers
for (let i = 0; i <= 9; i++) {
  document.getElementById(i).addEventListener("click", () => {
    display.value += i;
  });
}

// Operators
document.getElementById("plus").onclick = () => display.value += "+";
document.getElementById("-").onclick = () => display.value += "-";
document.getElementById("divi").onclick = () => display.value += "/";
document.getElementById("*").onclick = () => display.value += "*";

// Brackets
document.getElementById("op").onclick = () => display.value += "(";
document.getElementById("cl").onclick = () => display.value += ")";

// Decimal
document.querySelector("button:nth-child(16)").onclick = () => {
  display.value += ".";
};

// Clear all
document.getElementById("C").onclick = () => {
  display.value = "";
};

// Backspace
document.getElementById("back").onclick = () => {
  display.value = display.value.slice(0, -1);
};

// Equals
document.getElementById("equal").onclick = () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
};