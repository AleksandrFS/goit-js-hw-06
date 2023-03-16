let counterValue = 0;

const refs = {
 decrementBtnRef: document.querySelector('[data-action = "decrement"]'),
 encrementbtnRef: document.querySelector('[data-action = "increment"]'),
 valueRef: document.querySelector('#value')
}

// const decrementBtnRef = document.querySelector('[data-action = "decrement"]');
// const encrementbtnRef = document.querySelector('[data-action = "increment"]');
// const valueRef = document.querySelector('#value');


refs.encrementbtnRef.addEventListener('click', () => {
        counterValue += 1;
        refs.valueRef.textContent = counterValue;
        
    })

refs.decrementBtnRef.addEventListener('click', () => {
        counterValue -= 1;
        refs.valueRef.textContent = counterValue;
    })


