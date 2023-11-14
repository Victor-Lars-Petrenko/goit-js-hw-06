const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
    output.textContent = input.value.trim();
    if (input.value.trim() === '') {
        output.textContent = 'Anonymous';
    }
})
