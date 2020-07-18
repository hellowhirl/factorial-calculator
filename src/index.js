import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported into this script
  element.innerHTML = _.join(["Hello", "webpack", "it's simple, dude"], " ");

  return element;
}

document.body.appendChild(component());
