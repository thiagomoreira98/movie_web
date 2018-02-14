var menu = false

function abrir_sidenav() {
    menu = !menu;
    var nav = document.getElementById('sidenav');

    if(menu)
        return nav.style.width = '250px';

    return nav.style.width = '0';
}