
let currentItem = 0

document.getElementById("section").addEventListener("scroll", function () {
    var section = this;
    var scrollLeft = section.scrollLeft;
    var items = section.querySelectorAll(".item");

    items.forEach(function (item, i) {
        var itemOffsetLeft = item.offsetLeft;
        var itemWidth = item.offsetWidth;
        let h1Element = document.querySelector("h1")
        let h2Element = document.querySelector("h2")
        let pElement = document.querySelector("p")

        let itensContent = [
            {
                h1: "Item 01",
                h2: "Amarelo",
                p: "Este Item é o Primeiro Item a ser mosttrado",
            },
            {
                h1: "Item 02",
                h2: "Verde",
                p: "Este Item é o Segundo Item a ser mosttrado",
            },
            {
                h1: "Item 03",
                h2: "Azul",
                p: "Este Item é o Terceiro Item a ser mosttrado",
            },
            {
                h1: "Item 04",
                h2: "Vermelho",
                p: "Este Item é o Quarto Item a ser mosttrado",
            }
        ];


        if (
            scrollLeft + 10 >= itemOffsetLeft - 75 &&
            scrollLeft < itemOffsetLeft + itemWidth
        ) {
            item.classList.add("focus");
            console.log(`"item" ${i} ${itemOffsetLeft}`);
            console.log(scrollLeft);
            if (currentItem !== i) {
                currentItem = i
                h1Element.innerHTML = itensContent[i].h1
                h2Element.innerHTML = itensContent[i].h2
                pElement.innerHTML = itensContent[i].p
            }
        } else {
            item.classList.remove("focus");
        }
    });
});
