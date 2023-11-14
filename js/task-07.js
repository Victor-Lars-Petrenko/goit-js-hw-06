const input = document.querySelector('#font-size-control');
const textToChange = document.querySelector('#text');

input.addEventListener('input', evt => {
    textToChange.style.fontSize = `${input.value}px`;
})

