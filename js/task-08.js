const form = document.querySelector('.login-form');

form.addEventListener('submit', evt => {
    evt.preventDefault();
    const userData = {};
    const { elements: { password, email } } = evt.currentTarget;

    if (password.value === '' || email.value === '') {
        alert('Please, fill empty fields')
    } else {
        userData[email.name] = email.value;
        userData[password.name] = password.value;
        form.reset();
        console.log(userData);
    }
})