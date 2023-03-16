function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberRef = document.querySelector("input[type=number]");
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector('#boxes');

let quantityOfBoxes = 0;
let sizeOnFirstIteration = 30;
let sizeOfBox = 0;

numberRef.addEventListener("input", getValue);

function getValue(event) {
  if (event.currentTarget.value > 100) {
    alert('Максимальное количество блоков 100 штук!');
    event.currentTarget.value = 100;
  } else {
    quantityOfBoxes = event.currentTarget.value;
  }
};

createBtnRef.addEventListener("click", createBoxes);
  
function createBoxes(amount) {
  amount = quantityOfBoxes;
  let allDivs = '';
  for (let i = 0; i < amount; i += 1) {
    if (amount <= 1) {
      sizeOfBox = sizeOnFirstIteration;
    } else {
      sizeOfBox = sizeOnFirstIteration + i * 10;
    }
    const randomBackgroundColor = getRandomHexColor();
    let div = `<div style = 'background-color:${randomBackgroundColor}; 
    width:${sizeOfBox}px; height:${sizeOfBox}px;'></div>`;
    allDivs += div;
  }
   boxesRef.insertAdjacentHTML("beforeend", allDivs);
};

  destroyBtnRef.addEventListener('click', () => {
  boxesRef.innerHTML = '';
});




















