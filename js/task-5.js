function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const body = document.querySelector("body");

btnChangeColor.addEventListener("click", handlerClick);

function handlerClick() {
  spanColor.textContent = getRandomHexColor();
  body.style.backgroundColor = spanColor.textContent;
}

