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
