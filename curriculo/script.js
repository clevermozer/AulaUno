document.getElementById("btnMensagem").addEventListener("click", function () {
    alert("Olá! Obrigado por visitar meu currículo!");
});

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    if (nome === "") {
        alert("Digite seu nome!");
        return;
    }

    document.getElementById("saudacao").innerText =
        "Olá, " + nome + "! Seja bem-vindo à minha página.";
});
