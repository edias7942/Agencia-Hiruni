// Mobile Menu Toggle

let mobileMenuElement = document.querySelector("#mobile-menu")
let mobileMenuIsOpened = false

function toggleMobileMenu() {
    if (mobileMenuIsOpened === false) mobileMenuElement.style.display = "flex"
    else mobileMenuElement.style.display = "none"
    mobileMenuIsOpened = !mobileMenuIsOpened
}