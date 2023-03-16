function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body');
const BtnChangeColorRef = document.querySelector('.change-color');
const backgroundColorRef = document.querySelector('.color');

function onBtnChangeColorClick() {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  backgroundColorRef.textContent = randomColor;
  
};
BtnChangeColorRef.addEventListener("click", onBtnChangeColorClick);