function calcularImc(data) {
    if (data.altura <= 0) {
        throw new Error("Altura precisa ser maior que zero.");
    }
    return data.peso / Math.pow(data.altura, 2);
}
function obterResultadoImc(imc) {
    var resultado = document.querySelector('.resultado');
    if (!resultado) {
        throw new Error("Elemento 'resultado' não encontrado no HTML.");
    }
    var interpretacao;
    if (imc < 18.5)
        interpretacao = "Abaixo do peso";
    else if (imc < 25)
        interpretacao = "Peso normal";
    else if (imc < 30)
        interpretacao = "Sobrepeso";
    else if (imc < 35)
        interpretacao = "Obesidade Grau I";
    else if (imc < 40)
        interpretacao = "Obesidade Grau II";
    else
        interpretacao = "Obesidade Grau III";
    resultado.textContent = "Seu IMC \u00E9: ".concat(imc.toFixed(2), " - ").concat(interpretacao);
    return interpretacao;
}
var pesoInput = document.getElementById('peso');
var alturaInput = document.getElementById('altura');
var calcularButton = document.querySelector('.calImc');
calcularButton.addEventListener('click', function () {
    var peso = parseFloat(pesoInput.value);
    var altura = parseFloat(alturaInput.value);
    if (isNaN(peso) || isNaN(altura)) {
        alert('Preencha corretamente os campos Peso e Altura.');
        return;
    }
    try {
        var imc = calcularImc({ peso: peso, altura: altura });
        obterResultadoImc(imc);
    }
    catch (error) {
        alert("ERRO");
    }
});
