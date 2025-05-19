const input = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

const greetings = (event) => {
    userName.textContent = event.currentTarget.value.trim();

    if (!userName.textContent) {
        userName.textContent = 'Anonymous';
    }
}

input.addEventListener('input', greetings);