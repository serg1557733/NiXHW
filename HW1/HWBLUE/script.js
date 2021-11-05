let credentials = {
    login: 'admin',
    password: 'qwerty',
};

const btnLogin = document.querySelector('.btn'),
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close'),
    textMessageArea = document.querySelector('.modal__title');

let inputLogin = document.querySelector('.form__login'),
    inputPassword = document.querySelector('.form__password');

/* inputPassword.addEventListener('change', () => {
    inputPassword.value = inputPassword.value.replace(/[\s\S]/g, "*");
}) */

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputLogin.value === credentials.login && inputPassword.value === credentials.password) {
        modal.style.display = 'block';
        modal.style.backgroundColor = 'green';
        textMessageArea.innerText = 'Поздравляем - вы ввели верные данные';
        inputLogin.value = '';
        inputPassword.value = '';
    } else {
        modal.style.display = 'block';
        modal.style.backgroundColor = 'red';
        textMessageArea.innerText = 'Ошибка ввода пароля или логина. Попробуйте снова';
        inputPassword.value = '';
    }

});

close.addEventListener('click', () => {
    modal.style.display = 'none';
})