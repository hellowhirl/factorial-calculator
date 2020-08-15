import "./main.scss";
import { handleClick } from "./utils/handleClick";
import { handleClear } from "./utils/handleClear";

const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("clearButton");

calculateButton.addEventListener("click", handleClick);
clearButton.addEventListener("click", handleClear);
