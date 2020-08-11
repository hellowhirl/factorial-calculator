import { calculateFactorial } from "./calculateFactorial";

const node = document.getElementById("numberInput");
node.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleClick();
  }
});

export const handleClick = () => {
  const num = document.getElementById("numberInput").value;
  const integer = Math.round(num);
  const result = calculateFactorial(integer);
  document.getElementById("placeholder").innerHTML = result;

  let factoring = "";
  for (let i = 1; i <= integer; i++) {
    factoring += i !== integer ? i + " x " : i;
  }

  document.getElementById("userInput").innerHTML = `${integer}!`;
  document.getElementById("mathematics").innerHTML = factoring;
};
