function entrar() {
    var btn = document.getElementById('btn-login');
    var popup = document.getElementById('popup');
    popup.style.display = 'block';

    btn.innerText = null;
    btn.style.width = '50px';
    btn.style.height = '50px';
    btn.style.borderRadius = '70%';
    btn.style.transform = 'rotate(360deg)';
    btn.style.userSelect = 'none';

    btn.addEventListener('click', function () {
        btn.style.width = '100px';
        btn.style.height = '36px';
        btn.style.borderRadius = '2px';
        btn.innerHTML = null;
        btn.style.backgroundColor = '#3E50B4';
        btn.innerText = 'ENTRAR';
        btn.style.transform = null;
    })

    var login = {
        usuario: document.getElementById('usuario').value,
        senha: document.getElementById('senha').value
    }

    var ok = true;

    if (ok) {
        setTimeout(function () {
            btn.style.backgroundColor = '#4CAF50';
            btn.innerHTML = '<i class="material-icons" style="margin-left: -2px;">done</i>';
        }, 1000);
    }
    else {
        setTimeout(function () {
            btn.style.backgroundColor = '#EF5350';
            btn.innerHTML = '<i class="material-icons" style="margin-left: -2px;">close</i>';
        }, 1000);
    }

    console.log('login: ', login);

}