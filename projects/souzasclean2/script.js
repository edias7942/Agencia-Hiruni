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

// Change Class

/**
 *
 * @param {string} elementId Html Element Id para a mudança de Classe
 * @param {string} classRemove
 * @param {string} classAdd
 */
function changeClass(elementId, classRemove, classAdd) {
    let element = document.getElementById(elementId);
    if (classRemove) element.classList.remove(classRemove);
    if (classAdd) element.classList.add(classAdd);
}

// CRIANDO ANIMAÇÕES COM O SCROLL

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            // entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Lidando com o resize element do Antes e Depois

const box = document.querySelector("#antes-depois-resize-element");
var x, w;

function ts(e) {
    x = e.touches[0].clientX;
    w = box.clientWidth;
    console.log("Clicando");
}

function tm(e) {
    mx = e.touches[0].clientX;
    cx = mx - x;
    box.style.width = cx + w + "px";
    console.log("arrastando");
}
