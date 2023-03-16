

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
const inputAtBegin = '';
const outputAtEmptyInput = outputRef.textContent;

inputRef.addEventListener("input", () => {
    inputRef.value !== inputAtBegin
      ? (outputRef.textContent = inputRef.value)
      : (outputRef.textContent = outputAtEmptyInput);
    });




