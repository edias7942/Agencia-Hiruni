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

// MUDANDO DE IMAGEM

let carouselItems = {
    2: {
        allowChange: true,
        currentItem: 0,
        itensLength: 2,
        lastDirection: 1,
        locationItem: "#section2>.container>#right-side>#item-",
        itemsData: [
            document.querySelector(`#section2>.container>#right-side>#item-0`),
            document.querySelector(`#section2>.container>#right-side>#item-1`),
            document.querySelector(`#section2>.container>#right-side>#item-2`),
        ],
    },
    5: {
        currentItem: 0,
        itensLength: 10,
        lastDirection: 1,
    },
    6: {
        currentItem: 0,
        itensLength: 10,
        lastDirection: 1,
    },
};

console.log(carouselItems[2].itemsData)

let entrandoClass, saindoClass, classRemove, botoes, currentImage, prevImage;

function changeImage(section, direction) {
    let itemSaindo = carouselItems[section].itemsData[carouselItems[section].currentItem]
    itemSaindo.classList.add("saindo-fundo")
    carouselItems[section].currentItem += 1
    console.log(itemSaindo)
}

changeImage(2,1)