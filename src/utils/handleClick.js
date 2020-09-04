import { calculateFactorial } from "./calculateFactorial";

const numberInput = document.getElementById("numberInput");
numberInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleClick();
  }
});

export const handleClick = () => {
  const integer = Math.round(numberInput.value);
  if (integer <= 200) {
    const result = calculateFactorial(integer);
    document.getElementById("placeholder").innerHTML = result;

    let factoring = "";
    for (let i = 1; i <= integer; i++) {
      factoring += i !== integer ? i + " x " : i;
    }

    document.getElementById("userInput").innerHTML = `${integer}! = `;
    document.getElementById("mathematics").innerHTML = factoring;
  } else
    document.getElementById("placeholder").innerHTML = "INPUT is too large";
};
