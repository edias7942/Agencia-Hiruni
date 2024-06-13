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


function clicando(scrollNumber) {
    let alvo = document.getElementById('alvo');
    console.log(alvo.scrollLeft)
    alvo.scrollLeft += scrollNumber;
};