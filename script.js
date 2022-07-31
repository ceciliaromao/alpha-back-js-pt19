import startButton from "./components/atoms/startButton.js";
import gamePage from "./components/template/gamePage.js";

const container = document.querySelector("#container");
container.innerHTML = startButton();

document.querySelector("#play").addEventListener("click", () => {
  gamePage();
});
