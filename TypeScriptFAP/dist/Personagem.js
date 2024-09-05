"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class Personagem {
    constructor(nome, vida, energia, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.energia = energia;
        this.ataque = ataque;
        this.defesa = defesa;
    }
}
let deb = new Personagem('Deborah Leticia', 100, 40, 15, 20);
let opcao = 0;
while (opcao != 9) {
    console.log(`x============== PERSONAGEM ==============x`);
    console.log(`| 1 → Treinar ATAQUE                     |`);
    console.log(`| 2 → Treinar DEFESA                     |`);
    console.log(`| 3 → Mostrar ATRIBUTOS                  |`);
    console.log(`| 0 → SAIR                               |`);
    console.log(`x========================================x`);
    opcao = Number(prompt(`Escolha uma opção: `));
    switch (opcao) {
        case 1:
            deb.ataque += 2;
            break;
        case 2:
            deb.defesa += 2;
            break;
        case 3:
            console.log(deb);
            break;
        case 9:
            console.log(`Finalizando Aplicação...`);
        default:
            console.log(`ERRO: Escolha uma opção válida!`);
            break;
    }
}
// let deb : Personagem;
// deb = new Personagem('Deborah Leticia', 100, 40, 15, 20); //construtor
// deb.ataque = 80;
// console.log(deb);
// let vini : Personagem = new Personagem(); //outra forma de fazer um construtor
// vini.nome = 'Vinicius Rodrigues'
// vini.vida = 120;
// vini.energia = 50;
// vini.ataque = 20;
// vini.defesa = 35;
// console.log(vini);
