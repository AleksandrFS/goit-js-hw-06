
const inputRef = document.querySelector('#validation-input');
const inputRefLength = document.querySelector('[data-length]');

const attributeValueRef = Number(inputRefLength.getAttribute('data-length'));

const onInputBlur = () => {
  
    if (inputRef.value.length === attributeValueRef) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    }
    else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
};
inputRef.addEventListener("blur", onInputBlur);
