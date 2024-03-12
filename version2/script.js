// Mobile Menu Toggle

let mobileMenuElement = document.querySelector("#mobile-menu");
let mobileMenuIsOpened = false;
function toggleMobileMenu() {
    if (mobileMenuIsOpened === false) {
        document.body.style.overflowY = "hidden";
        mobileMenuElement.style.display = "block";
    } else {
        document.body.style.overflowY = "scroll";
        mobileMenuElement.style.display = "none";
    }
    mobileMenuIsOpened = !mobileMenuIsOpened;
}

// MUDANDO DE IMAGEM

let currentItem = 0;
let maxItem = 4

document
    .querySelector("#portfolio > .right > container")
    .addEventListener("scroll", function () {
        let section = this;
        let scrollLeft = section.scrollLeft;
        let items = section.querySelectorAll(
            "#portfolio > .right > container > div"
        );

        items.forEach(function (item, i) {
            let itemOffsetLeft = item.offsetLeft;
            let itemWidth = item.offsetWidth;
            let companyElement = document.querySelector(
                "#portfolio > .left > h2"
            );
            let websiteTypeElement = document.querySelector(
                "#portfolio > .left > h3"
            );
            let descriptionElement = document.querySelector(
                "#portfolio > .left > p"
            );
            let feedbackElement = document.querySelector(
                "#portfolio > .right > .subtitle > p"
            );
            let imageProfileElement = document.querySelector(
                "#portfolio > .right > .subtitle > img"
            );

            let itensContent = {
                sites: [
                    {
                        company: "Bruna Hosti",
                        websiteType: "Landing Page",
                        description: `Esse foi um site desenvolvido
                        com o objetivo de mostrar aos clientes da
                        Bruna todo seu trabalho como fotógrafa,
                        divulgar seu nome, além de centralizar
                        toda sua imagem digital`,
                        feedback: `"Eu amei o site, ficou incrível. Muito
                        obrigada pelo trabalho." - <b>Bruna Hosti</b>`,
                        imageProfile:
                            "./assets/images/bruna-hosti-perfil-img.png",
                    },
                    {
                        company: "Jackson Ford",
                        websiteType: "Portfolio",
                        description:
                            "Um site de portfólio para Jackson Ford, banqueiro, destacando sua experiência, conquistas e serviços financeiros, com design elegante, depoimentos de clientes e informações de contato.",
                        feedback: `"O site fez eu aumentar minhas vendas, obrigado!" - <b>Jackson Ford</b>`,
                        imageProfile:
                            "./assets/images/site-example-1-profile-photo.png",
                    },
                    {
                        company: "Creative",
                        websiteType: "Portfolio Website",
                        description: `Creative Vision's website showcases their graphic design portfolio,
                        highlights their creative process, and serves as a platform for potential clients to contact them.`,
                        feedback: `"The website is amazing! It truly reflects our design style and expertise." - <b>Creative Vision Team</b>`,
                        imageProfile:
                            "./assets/images/site-example-2-profile-photo.png",
                    },
                    {
                        company: "Nature's Best",
                        websiteType: "E-commerce Website",
                        description: `Nature's Best website was created to promote and sell their natural products online,
    provide information about their brand, and offer a seamless shopping experience for their customers.`,
                        feedback: `"We're thrilled with the website design! It reflects our brand perfectly." - <b>Nature's Best Team</b>`,
                        imageProfile:
                            "./assets/images/site-example-3-profile-photo.png",
                    },
                    {
                        company: "Solutions",
                        websiteType: "Corporate Website",
                        description: `This website was developed to showcase Green Solutions' environmental consulting services,
    highlight their sustainability initiatives, and provide a platform for sharing.`,
                        feedback: `"The website looks fantastic! Thank you for capturing the essence of our company so well." - <b>Green Solutions Team</b>`,
                        imageProfile:
                            "./assets/images/bruna-hosti-perfil-img.png",
                    },
                ],
            };
            let halfScreenWidth = window.innerWidth / 2;

            if (
                scrollLeft >= itemOffsetLeft - halfScreenWidth &&
                scrollLeft < itemOffsetLeft + itemWidth - halfScreenWidth
            ) {
                item.classList.add("focus");
                console.log(itemWidth);
                if (currentItem !== i) {
                    currentItem = i;
                    companyElement.innerHTML = itensContent.sites[i].company;
                    websiteTypeElement.innerHTML =
                        itensContent.sites[i].websiteType;
                    descriptionElement.innerHTML =
                        itensContent.sites[i].description;
                    feedbackElement.innerHTML = itensContent.sites[i].feedback;
                    imageProfileElement.setAttribute(
                        "src",
                        itensContent.sites[i].imageProfile
                    );
                }
            } else {
                item.classList.remove("focus");
            }
        });
    });

function scrollElement(elementPath, direction) {
    if (direction === 1 && currentItem === 4) return
    if (direction === -1 && currentItem === 0) return
    let itemWidth =
        document.getElementById(elementPath).children[0].offsetWidth; // Pegando primeiro elemento do container para verificar comprimento.
    console.log(itemWidth);
    currentItem = currentItem + direction;
    document
    .getElementById(elementPath)
    .scrollTo({
        left: currentItem * itemWidth + itemWidth,
        behavior: "smooth",
    });
}

// Testando ir para View com JS

function next() {
    console.log("next");
    let section = document.getElementById("portfolio");
    section.scrollIntoView({ behavior: "smooth" });
}
