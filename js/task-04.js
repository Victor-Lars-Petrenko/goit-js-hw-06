let counterValue = 0;
document.querySelector('#value').textContent = counterValue;
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

increment.addEventListener('click', (event) => {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
    console.log(counterValue);
})

decrement.addEventListener('click', (event) => {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
    console.log(counterValue);
})
