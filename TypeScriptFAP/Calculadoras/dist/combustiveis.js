var botao = document.getElementById("btn");
botao.addEventListener("click", function () {
    var entradaAlcool = document.getElementById("alcool");
    var entradaGasolina = document.getElementById("gasolina");
    var alcool = parseFloat(entradaAlcool.value);
    var gasolina = parseFloat(entradaGasolina.value);
    if (isNaN(alcool) || isNaN(gasolina) || alcool <= 0 || gasolina <= 0) {
        alert("Por favor, insira valores numéricos válidos maiores que zero.");
        return;
    }
    var resultado;
    var razao = alcool / gasolina;
    if (razao <= 0.7) {
        resultado = "Abasteça com álcool";
    }
    else {
        resultado = "Abasteça com gasolina";
    }
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = resultado;
});
