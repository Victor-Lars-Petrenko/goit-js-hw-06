const input = document.querySelector('#validation-input')

input.addEventListener('blur', evt => {
    const strWithoutSpace = input.value.trim()

    if (strWithoutSpace.length === Number(input.dataset.length)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else if (strWithoutSpace.length !== Number(input.dataset.length) && strWithoutSpace !== '') {
        input.classList.add('invalid');
    } else {
        input.classList.remove('valid');
        input.classList.remove('invalid');
    }
})


