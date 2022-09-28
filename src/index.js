import "./style.css";
import {} from "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import {} from "../node_modules/bootstrap/dist/css/bootstrap.css";
import { DllPlugin } from "webpack";

function update(code, input) {
  switch (code) {
    case 1:
      document.getElementById("image").innerHTML =
        '<img class="img-responsive" id="image" src="' +
        input +
        '" alt="your image" title="your image"/>';
      break;

    case 2:
      document.getElementById("image").style.width = input;
      break;

    case 3:
      document.getElementById("image").style.borderWidth = input;
      break;

    case 4:
      document.getElementById("image").style.borderColor = input;
      break;

    default:
      break;
  }
}

function init() {
  document.getElementById("url").addEventListener("change", function () {
    update(1, document.getElementById("url").value);
  });
  document.getElementById("width").addEventListener("change", function () {
    update(2, parseInt(document.getElementById("width").value));
  });
  document.getElementById("thickness").addEventListener("change", function () {
    update(3, parseInt(document.getElementById("thickness").value));
  });
  document.getElementById("colorPick").addEventListener("change", function () {
    update(4, document.getElementById("colorPick").value);
  });
}

document.addEventListener("DOMContentLoaded", init);
