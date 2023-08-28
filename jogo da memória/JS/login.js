const input = document.querySelector('.Login_input');
const button = document.querySelector('.Login_button');
const form = document.querySelector('.login_form')

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');

}
const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
console.log(form);
form.addEventListener('submit', handleSubmit);



