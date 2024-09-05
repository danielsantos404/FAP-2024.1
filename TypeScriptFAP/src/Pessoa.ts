class Pessoa {

    public nome: string;
    protected idade: number;
    private cpf: string;
    readonly nacionalidade: string = "Brasileiro"

    constructor(nome: string, idade: number, cpf: string) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;

    }
    
    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

class Funcionario extends Pessoa {

    private cargo: string;
    constructor(nome: string, idade: number, cpf: string, cargo: string) {
        super(nome, idade, cpf);
        this.cargo = cargo;

    }

    detalhes(): string {
        return `${this.apresentar()} Sou ${this.cargo}.`;

    }
}

class Gerente extends Funcionario {

    public equipe: string[];
    constructor(nome: string, idade: number, cpf: string, cargo: string, equipe: string[] = []) {
        super(nome, idade, cpf, cargo);
        this.equipe = equipe;
    }
    
    adiconarMembro(nome: string): void {
        this.equipe.push(nome);
        console.log(`${this.nome} foi adicionado à equipe.`);
    }

    liderarEquipe(): void {
        console.log(`${this.nome} está liderando a equipe: ${this.equipe.join(',')}`);
    }
}

const funcionario1 = new Funcionario("Daniel", 20, "999-999-999-99", "Desenvolvedor");
console.log(funcionario1.nome);
console.log(funcionario1.detalhes());
// console.log(funcionario1.cpf);
// funcionario1.nacionalidade = "Americano";
