function $(id) {
    return document.getElementById(id);
}

function digitar(event, element) {
    let key = event.key;
    console.log(key);
    if (key === "Enter") {
        validar();
        return;
    }

    if (key === "Backspace") {
        return;
    }

    element.nextElementSibling.focus();
}

function validar() {
    let senha = "ETERNIDADE";

    let teste = [
        $("input-1").value.toUpperCase(),
        $("input-2").value.toUpperCase(),
        $("input-3").value.toUpperCase(),
        $("input-4").value.toUpperCase(),
        $("input-5").value.toUpperCase(),
        $("input-6").value.toUpperCase(),
        $("input-7").value.toUpperCase(),
        $("input-8").value.toUpperCase(),
    ];

    teste = teste.join("");

    if (teste == senha) {
        $("input-container").classList.add("aprovado");
    } else {
        $("input-container").classList.remove("aprovado");
    }
}

let saida = function () {
    window.open("./resposta");
};

setTimeout(() => {
    let saidaElement = $("saida");
    saidaElement.style.display = "flex";

    setTimeout(() => {
        saidaElement.style.display = "none";
    }, 400);

    setTimeout(() => {
        saidaElement.style.display = "flex";
        setTimeout(() => {
            saidaElement.style.display = "none";
        }, 400);

        setInterval(() => {
            saidaElement.style.display = "flex";
            setTimeout(() => {
                saidaElement.style.display = "none";
            }, 400);
        }, 10000);
    }, 30000);
}, 77000);
