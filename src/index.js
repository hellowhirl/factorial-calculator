import _ from "lodash";
import "bootstrap";
// we didn't use export defualt so we need to use specific name in curly brackets
import { handleClick } from "./utils/handleClick";

const node = document.getElementById("numberInput");
node.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleClick();
  }
});

document.getElementById("calculate").addEventListener("click", handleClick);
