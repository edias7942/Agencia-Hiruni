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
