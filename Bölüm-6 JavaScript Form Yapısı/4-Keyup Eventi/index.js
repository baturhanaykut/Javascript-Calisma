const form = document.querySelector('.signupForm');
const message = document.querySelector('.message');
const userNamePattern = /^[a-z]{6,10}$/

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;

    if (userNamePattern.test(username)) {
        message.textContent = 'Başarılı'
    }
    else {
        message.textContent = 'Lütfen hepsini küçük harf ve 6 ile 10 karakter giriniz.'
    }
});

form.username.addEventListener('keyup', e => {
    //console.log(e.target.value);
    if (userNamePattern.test(e.target.value)) {
        //console.log('Başarılı');
        form.username.setAttribute('class','success');
    }
    else {
        //console.log('Başarısız');
        form.username.setAttribute('class','error');
    }
})