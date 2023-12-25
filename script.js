let menuMobileOpened = false;
let menuMobile = document.getElementById("menu-mobile");
let bortaoFecharMenu = document.getElementById('bota-fechar-menu')
menuMobile.style.transition = 'none'
menuMobile.style.width = 'calc(100vw - 90px)'

function toggleMenuMobile() {
    if (menuMobileOpened) {
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
    menuMobileOpened = !menuMobileOpened;
}

// toggleMenuMobile()
