let valorVisor: string = '';

function adicionarNumero(numero: string): void {
    valorVisor += numero;
    const visor = document.getElementById('visor') as HTMLInputElement;
    visor.value = valorVisor;
}

function adicionarOperador(operador: string): void {
    valorVisor += operador;
    const visor = document.getElementById('visor') as HTMLInputElement;
    visor.value = valorVisor;
}

function calcular(): void {
    try {
        valorVisor = eval(valorVisor).toString();
        const visor = document.getElementById('visor') as HTMLInputElement;
        visor.value = valorVisor;
    } catch (e) {
        const visor = document.getElementById('visor') as HTMLInputElement;
        visor.value = `ERRO`
        valorVisor = '';
    }
}

function limparVisor(): void {
    valorVisor = '';
    const visor = document.getElementById('visor') as HTMLInputElement;
    visor.value = '';
}

function apagarUltimoCaracter() {
    valorVisor = valorVisor.slice(0, -1);
    const visor = document.getElementById('visor') as HTMLInputElement;
    visor.value = valorVisor;
}