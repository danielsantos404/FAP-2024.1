"use strict";
class Pessoa {
    constructor(nome, idade, cpf) {
        this.nacionalidade = "Brasileiro";
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}
class Funcionario extends Pessoa {
    constructor(nome, idade, cpf, cargo) {
        super(nome, idade, cpf);
        this.cargo = cargo;
    }
    detalhes() {
        return `${this.apresentar()} Sou ${this.cargo}.`;
    }
}
const funcionario1 = new Funcionario("Daniel", 20, "999-999-999-99", "Desenvolvedor");
console.log(funcionario1.nome);
console.log(funcionario1.detalhes());
// console.log(funcionario1.cpf);
// funcionario1.nacionalidade = "Americano";
