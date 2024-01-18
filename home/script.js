// MENU MOBILE

// setTimeout(() => {
//     scrollTo(0,0)
// }, 100);

let menuMobileOption = false;
let menuMobile = document.getElementById("menu-mobile");

function toggleMenuMobile() {
    if (menuMobileOption) {
        for (i = 1; i <= 3; i++) {
            let div = document.getElementById(`line-${i}`);
            let hamburguer = document.getElementById("hamburguer");
            hamburguer.classList.remove("close");
            div.classList.remove("close");
        }
        menuMobile.style.width = "0";
    } else {
        for (i = 1; i <= 3; i++) {
            let div = document.getElementById(`line-${i}`);
            let hamburguer = document.getElementById("hamburguer");
            hamburguer.classList.add("close");
            div.classList.add("close");
        }
        menuMobile.style.width = "calc(100vw - 90px)";
    }
    menuMobileOption = !menuMobileOption;
}

// MUDANDO DE IMAGEM

let carouselItems = {
    2: {
        allowChange: true,
        currentItem: 1,
        itensLength: 2,
        lastDirection: 1,
        locationItem: "#section2>.container>#right-side>#item-",
        itemsData: [
            document.querySelector(`#section2>.container>#right-side>#item-0`),
            document.querySelector(`#section2>.container>#right-side>#item-1`),
            document.querySelector(`#section2>.container>#right-side>#item-2`),
            document.querySelector(`#section2>.container>#right-side>#item-3`),
            document.querySelector(`#section2>.container>#right-side>#item-4`),
            document.querySelector(`#section2>.container>#right-side>#item-5`),
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

let entrandoClass,
    saindoClass,
    classRemove,
    botoes,
    currentItem,
    leftItem,
    mainItem,
    rightItem;

function changeImage(section, direction) {
    let currentItem = carouselItems[section].currentItem;
    let itemsList = carouselItems[section].itemsData;
    let itemsQuantity = itemsList.length - 1;
    let lastDirection = carouselItems[section].lastDirection;

    if (direction === 1) {
        leftItem = itemsList[currentItem];
        mainItem = itemsList[currentItem + 1];
        rightItem = itemsList[currentItem + 2];
    } else {
        leftItem = itemsList[currentItem - 1];
        mainItem = itemsList[currentItem];
        rightItem = itemsList[currentItem + 1];
    }

    console.log(currentItem);

    if (direction === 1) {
        leftItem.classList.add("saindo-fundo");

        setTimeout(() => {
            mainItem.classList.add("entrando-direita");
            rightItem.classList.add("quase-entrando");
        }, 660);

        setTimeout(() => {
            leftItem.classList.remove("saindo-fundo");
        }, 1320);

        if (lastDirection === 1) {
            leftItem.classList.remove("entrando-direita");

            setTimeout(() => {
                mainItem.classList.remove("quase-entrando");
            }, 660);
        } else {
            
            setTimeout(() => {
                leftItem.classList.remove('entrando-fundo')
                mainItem.classList.remove('quase-entrando-esquerda')
            }, 660);
        }
    } else {
        leftItem.classList.add("entrando-fundo");
        mainItem.classList.add("quase-entrando-esquerda");

        setTimeout(() => {
            rightItem.classList.remove("quase-entrando");
            rightItem.classList.add("saindo-direita");
        }, 660);

        setTimeout(() => {
            rightItem.classList.remove("saindo-direita");
        }, 1200);

        if (lastDirection === 1) {
            mainItem.classList.remove("entrando-direita");
        } else {
            mainItem.classList.remove('entrando-fundo')
            
            setTimeout(() => {
                rightItem.classList.remove('quase-entrando-esquerda')
            }, 330);
        }
    }

    console.log(lastDirection);
    carouselItems[2].currentItem += direction;
    carouselItems[2].lastDirection = direction;
}
