import _ from "lodash";
// we didn't use export defualt so we need to use specific name in curly brackets
import "./main.scss";
import { handleClick } from "./utils/handleClick";

const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", handleClick);
