let scrollY = 0;
let section1Height = document.getElementById("section-1").clientHeight;
let header = document.getElementById("header");

document.addEventListener("scroll", (e) => {
    if (menuOpened) toggleMenu();
    scrollY = window.scrollY;
    if (window.scrollY > section1Height - 55) header.classList.add("scroll");
    else header.classList.remove("scroll");
});

// ABRINDO POPUPS

function togglePopup(display) {
    let instaPopup = document.getElementById("insta-popup");
    instaPopup.style.display = display;
}

let carouselImages = {
    4: {
        allowChange: true,
        currentItem: 0,
        itensLength: 10,
        lastDirection: 1,
        imagesData: [
            document.getElementById("s4-image0"),
            document.getElementById("s4-image1"),
            document.getElementById("s4-image2"),
            document.getElementById("s4-image3"),
            document.getElementById("s4-image4"),
            document.getElementById("s4-image5"),
            document.getElementById("s4-image6"),
            document.getElementById("s4-image7"),
            document.getElementById("s4-image8"),
            document.getElementById("s4-image9"),
            document.getElementById("s4-image10"),
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

let entrandoClass, saindoClass, classRemove, botoes, currentImage, prevImage;

function changeImage(section, direction) {
    if (!carouselImages[section].allowChange) return;
    if (
        carouselImages[section].currentItem ===
            carouselImages[section].itensLength &&
        direction === 1
    )
        return;
    if (carouselImages[section].currentItem === 1 && direction === -1) return;

    carouselImages[section].allowChange = false;
    carouselImages[section].currentItem += direction;
    images = carouselImages[section].imagesData;
    botoes = [...document.getElementsByClassName(`s${section}-botao`)];
    currentImage = carouselImages[section].currentItem;
    prevImage = currentImage - direction;

    if (direction === 1) {
        entrandoClass = "entrandoDireita";
        saindoClass = "saindoEsquerda";
    } else {
        entrandoClass = "entrandoEsquerda";
        saindoClass = "saindoDireita";
    }

    if (carouselImages[section].lastDirection === 1) {
        classRemove = "entrandoDireita";
    } else {
        classRemove = "entrandoEsquerda";
    }
    images[currentImage].classList.add(entrandoClass);
    images[prevImage].classList.remove(classRemove);
    images[prevImage].classList.add(saindoClass);
    botoes.forEach((item) => item.classList.add("hide"));
    setTimeout(() => {
        carouselImages[section].allowChange = true;
        images[prevImage].classList.remove(saindoClass);
        botoes.forEach((item) => item.classList.remove("hide"));
        if (
            carouselImages[section].currentItem ===
            carouselImages[section].itensLength
        ) {
            botoes[1].classList.add("hide");
        }
        if (carouselImages[section].currentItem === 1)
        {
            botoes[0].classList.add("hide");
        }
    }, 500);

    carouselImages[section].lastDirection = direction;
}

changeImage(4, 1);

// function changeCarouselImage(section, direction) {
//     let sectionImage = carroselImages[`section${section}`];
//     let divImage = document.getElementById(`s${section}-image`);
//     let divLeftArrow = document.getElementById(`s${section}-left-arrow`);
//     let divRightrrow = document.getElementById(`s${section}-right-arrow`);
//     if (direction === -1) {
//         divRightrrow.classList.remove("hide");
//         if (sectionImage.currentItem === 1) {
//             console.log("Limite Mínimo");
//             return;
//         } else if (sectionImage.currentItem === 2) {
//             console.log("Escondendo Seta Esquerda");
//             divLeftArrow.classList.add("hide");
//         }
//     } else if (direction === 1) {
//         divLeftArrow.classList.remove("hide");
//         if (sectionImage.currentItem === sectionImage.itensLength) {
//             console.log("Limite Máximo");
//             return;
//         } else if (sectionImage.currentItem + 1 === sectionImage.itensLength) {
//             console.log("Escondendo Seta Direita");
//             divRightrrow.classList.add("hide");
//         }
//     }
//     divImage.src = `imagens/section${section}/image${
//         sectionImage.currentItem + direction
//     }.webp`;
//     carroselImages[`section${section}`].currentItem =
//         sectionImage.currentItem + direction;

//     console.log(sectionImage.currentItem);
// }

// ABRINDO MENU

let menuOpened = false;
let menuDiv = document.getElementById("menu");
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function toggleMenu() {
    if (menuOpened) {
        if (scrollY < section1Height) header.classList.remove("scroll");
        menuDiv.classList.remove("open");
        menuDiv.classList.add("close");
        document.body.classList.remove("blocked");
    } else {
        header.classList.add("scroll");
        menuDiv.classList.remove("close");
        menuDiv.classList.add("open");
        document.body.classList.add("blocked");
    }
    menuOpened = !menuOpened;
}
