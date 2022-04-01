let loginBtns = document.querySelectorAll('.login__other__choice-item'),
    login = document.querySelector('.login'),
    loginWithPhone = document.querySelector('.login__phone'),
    loginHeader = loginWithPhone.querySelector('.login__header'),
    loginReturnBtn = loginWithPhone.querySelector('.login__return-btn');

function displayLoginWithPhone () {
    loginWithPhone.classList.remove('login-block-out');
    login.classList.remove('login-block-in');
    login.classList.add('login-block-out');
    loginWithPhone.classList.add('login-block-in');
    loginHeader.textContent = 'Войдите или зарегистрируйтесь по номеру телефона';
    loginWithPhone.querySelector('.login__mail__form').classList.add('login__disable');
    loginWithPhone.querySelector('.login__phone__form').classList.remove('login__disable');
}

function displayLoginWithMail () {
    loginWithPhone.classList.remove('login-block-out');
    login.classList.remove('login-block-in');
    login.classList.add('login-block-out');
    loginWithPhone.classList.add('login-block-in');
    loginHeader.textContent = 'Войдите или зарегистрируйтесь по e-mail';
    loginWithPhone.querySelector('.login__phone__form').classList.add('login__disable');
    loginWithPhone.querySelector('.login__mail__form').classList.remove('login__disable');
}

loginReturnBtn.addEventListener('click', () => {
    loginWithPhone.classList.remove('login-block-in');
    login.classList.remove('login-block-out');
    login.style.left = '-55%';
    loginWithPhone.classList.add('login-block-out');
    login.classList.add('login-block-in');
})

loginBtns.forEach((i, index) => {
    i.addEventListener('click', () => {
        index === 0 ? displayLoginWithPhone() : displayLoginWithMail();
    })
})
