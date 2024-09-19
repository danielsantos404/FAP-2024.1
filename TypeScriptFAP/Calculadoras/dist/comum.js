var valorVisor = '';
function adicionarNumero(numero) {
    valorVisor += numero;
    var visor = document.getElementById('visor');
    visor.value = valorVisor;
}
function adicionarOperador(operador) {
    valorVisor += operador;
    var visor = document.getElementById('visor');
    visor.value = valorVisor;
}
function calcular() {
    try {
        valorVisor = eval(valorVisor).toString();
        var visor = document.getElementById('visor');
        visor.value = valorVisor;
    }
    catch (e) {
        var visor = document.getElementById('visor');
        visor.value = "ERRO";
        valorVisor = '';
    }
}
function limparVisor() {
    valorVisor = '';
    var visor = document.getElementById('visor');
    visor.value = '';
}
function apagarUltimoCaracter() {
    valorVisor = valorVisor.slice(0, -1);
    var visor = document.getElementById('visor');
    visor.value = valorVisor;
}
