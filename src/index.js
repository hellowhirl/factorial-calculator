import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported into this script
  element.innerHTML = _.join(["Hello", "webpack", "it's simple, dude"], " ");

  return element;
}

document.body.appendChild(component());

const node = document.getElementById("numberInput");
node.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleClick();
  }
});

function calculateFactorial(n) {
  // If the number is less than 0, reject it.
  if (n < 0) {
    return 'input must be an integer greater than or equal to "0"';
  }
  // If the number is 0, its factorial is 1.
  else if (n === 0) {
    return 1;
  }
  // Otherwise, call this recursive procedure again.
  else {
    return n * calculateFactorial(n - 1);
  }
}

function handleClick() {
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
}

document.getElementById("calculate").addEventListener("click", handleClick);

console.log("testing");
