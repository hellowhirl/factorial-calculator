import { calculateFactorial } from "./calculateFactorial";

const numberInput = document.getElementById("numberInput");
numberInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleClick();
  }
});

export const handleClick = () => {
  const integer = Math.round(numberInput.value);
  if (integer <= 200 && integer >= 0) {
    const result = calculateFactorial(integer);
    document.getElementById("placeholder").innerHTML = result;

    let factoring = "";
    for (let i = 1; i <= integer; i++) {
      factoring += i !== integer ? i + " x " : i;
    }

    document.getElementById("userInput").innerHTML = `${integer}! = `;
    document.getElementById("mathematics").innerHTML = factoring;
    return;
  }
  if (integer < 0) {
    document.getElementById("placeholder").innerHTML =
      'INPUT must be an integer greater than or equal to "0"';
    document.getElementById("userInput").innerHTML = `${integer}! = `;
    document.getElementById("mathematics").innerHTML = null;
    return;
  }
  if (integer > 200) {
    document.getElementById("placeholder").innerHTML = "Infinity";
    document.getElementById(
      "userInput"
    ).innerHTML = `${integer}! = INPUT is too large`;
    document.getElementById("mathematics").innerHTML = null;
    return;
  } else document.getElementById("userInput").innerHTML = `invalid INPUT`;
  document.getElementById("placeholder").innerHTML =
    'INPUT must be an integer greater than or equal to "0" dude';
  document.getElementById("mathematics").innerHTML = null;
};
