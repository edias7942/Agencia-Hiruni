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


function scrollLateral(divId, scrollNumber) {
    let divScroll = document.getElementById(divId);
    console.log(divScroll.scrollLeft)
    divScroll.scrollLeft += scrollNumber;
};