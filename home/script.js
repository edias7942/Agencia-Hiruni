// MENU MOBILE

let menuMobileOption = false;
let menuMobile = document.getElementById("menu-mobile");

function toggleMenuMobile() {
    if (menuMobileOption) {
        for (i=1;i<=3;i++){
            let div = document.getElementById(`line-${i}`)
            let hamburguer = document.getElementById('hamburguer')
            hamburguer.classList.remove('close')
            div.classList.remove('close')
        }
        menuMobile.style.width = '0'
    } else {
        for (i=1;i<=3;i++){
            let div = document.getElementById(`line-${i}`)
            let hamburguer = document.getElementById('hamburguer')
            hamburguer.classList.add('close')
            div.classList.add('close')
        }
        menuMobile.style.width = 'calc(100vw - 90px)'
    }
    menuMobileOption = !menuMobileOption;
}
