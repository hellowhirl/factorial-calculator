import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported into this script
  element.innerHTML = _.join(["Hello", "webpack", "it's simple, dude"], " ");

  return element;
}

function testing() {
  const headerElement = document.getElementsByTagName("h1")[0];
  headerElement.style.color = "red";
}

testing();

console.log("testing");

document.body.appendChild(component());
