function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body');
const backgroundColorRef = document.querySelector('.color');

const BtnChangeColorClick = bodyRef.addEventListener("click", onBtnChangeColorClick);

function onBtnChangeColorClick(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();
  backgroundColorRef.textContent = getRandomHexColor();

};