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
            document.querySelector(`#section2>.container>#right-side>#item-1`),
            document.querySelector(`#section2>.container>#right-side>#item-2`),
            document.querySelector(`#section2>.container>#right-side>#item-3`),
            document.querySelector(`#section2>.container>#right-side>#item-4`),
            document.querySelector(`#section2>.container>#right-side>#item-5`),
            document.querySelector(
                `#section2>.container>#right-side>#item-limiter`
            ),
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

let leftItem, mainItem, rightItem;
botoes = [
    ...document.querySelectorAll(
        "#section2 > .container > #left-side > #buttons > div:not(#main-button)"
    ),
];
botoes.enabled = [false, true];
function changeImage(section, direction) {
    let currentItem = carouselItems[section].currentItem - 1;
    let itemsList = carouselItems[section].itemsData;
    let itemsQuantity = itemsList.length - 1;
    let lastDirection = carouselItems[section].lastDirection;

    function toggleButton(button, action) {
        if (action === "active") {
            botoes[button].classList.remove("hide");
            botoes.enabled[button] = true;
        } else if (action === "desactive") {
            botoes[button].classList.add("hide");
            botoes.enabled[button] = false;
        }
    }

    // Função para ocultar botões enquanto a animação acontece
    if (direction === 1 && !botoes.enabled[1]) return;
    if (direction === -1 && !botoes.enabled[0]) return;

    toggleButton(0, "desactive");
    toggleButton(1, "desactive");

    if (direction === 1) {
        setTimeout(() => {
            toggleButton(0, "active");
            if (!(currentItem === itemsQuantity - 2)) toggleButton(1, "active");
        }, 1500);

        leftItem = itemsList[currentItem];
        mainItem = itemsList[currentItem + 1];
        rightItem = itemsList[currentItem + 2];
    } else {
        setTimeout(() => {
            toggleButton(1, "active")
            if(!(currentItem === 1)) toggleButton(0, 'active')
        }, 1500);
        leftItem = itemsList[currentItem - 1];
        mainItem = itemsList[currentItem];
        rightItem = itemsList[currentItem + 1];
    }

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
                leftItem.classList.remove("entrando-fundo");
                mainItem.classList.remove("quase-entrando-esquerda");
            }, 660);
        }
    } else {
        leftItem.classList.add("entrando-fundo");
        mainItem.classList.add("quase-entrando-esquerda");

        setTimeout(() => {
            rightItem.classList.remove("quase-entrando");
        }, 660);

        setTimeout(() => {
            rightItem.classList.remove("saindo-direita");
        }, 1200);

        if (lastDirection === 1) {
            mainItem.classList.remove("entrando-direita");
        } else {
            mainItem.classList.remove("entrando-fundo");

            setTimeout(() => {
                rightItem.classList.add("saindo-direita");
                rightItem.classList.remove("quase-entrando-esquerda");
            }, 330);
        }
    }

    carouselItems[2].currentItem += direction;
    carouselItems[2].lastDirection = direction;
}
