
/* 1 - Implementar em JavaScript um programa que, a partir da cotação do dólar e do valor em reais, calcula o valor equivalente em dólares.
No console
Como um alerta
E no documento do HTML */

// let cotaçãoAtual = Number(prompt(`Informe a cotação atual do dolar: `))
// let carteira = Number(prompt(`Qual valor você possui? `))

// while (true) {
//     let opcao = Number(prompt(`Informe o tipo de conversão que você deseja realizar: \n - REAL → DOLAR \n - DOLAR → REAL`))
//     if (opcao == 1) {
//         let conversao = carteira * cotaçãoAtual
//         document.write(`R$${carteira.toFixed(2)} valem U$${conversao.toFixed(2)}`)
//         break;
//     } else if (opcao == 2) {
//         let conversao = carteira / cotaçãoAtual
//         document.write(`U$${carteira.toFixed(2)} valem R$${conversao.toFixed(2)}`)
//         break;
//     } else {
//         alert(`Selecione uma opção de conversão válida.`)       
//     }
// }

/*========================================================================================*/

/* 2 - Faça um programa em JS que leia um número inteiro informado pelo usuário e diga se esse número é par ou ímpar.
Sugestão: Use o % (resto da divisão inteira). */

// let numero = parseInt(prompt(`Informe um número INTEIRO: `))

// if (numero % 2 == 0) {
//     alert(`O número é par!`)
// } else {
//     alert(`O número é impar!`)
// }

/*========================================================================================*/

/* 3 - Faça um programa que leia dois números e informe qual é o maior.
Ex.: 
numero1 = 20
numero2 = 30
resposta = ‘O número2 é o maior’ */

// let n1 = Number(prompt(`Informe um número`))
// let n2 = Number(prompt(`Informe outro número:`))

// if (n1 > n2) {
//     alert(`- ${n1} \n é maior do que \n - ${n2}`)
// } else if (n1 < n2) {
//     alert(`- ${n2} \n é maior do que \n - ${n1}`)
// } else {
//     alert(`- ${n1} \n é igual a \n - ${n2}`)
// }

/*========================================================================================*/

/* 4 - Faça um programa que leia as notas de duas provas e informe se o aluno foi aprovado (nota maior ou igual a 6) ou reprovado (nota menor que 6) em cada uma das provas. */

// let primeiraNota = Number(prompt(`Informe a primeira nota do aluno: `))
// let segundaNota = Number(prompt(`Informe a segunda nota do aluno: `))
// let media = (primeiraNota + segundaNota) / 2

// if (media >= 6) {
//     document.write(`A média do aluno foi ${media}. Ele está APROVADO!`)
// } else {
//     document.write(`A média do aluno foi ${media}. Ele esta REPROVADO!`)
// }

/*========================================================================================*/

/* 5 - Um cinema oferece aos seus clientes dois tipos de ingressos: o ingresso VIP (com uma poltrona) e um ingresso standard (cadeira comum). É possível optar também por um combo promocional de pipoca e refrigerante ou não. Faça um programa que solicite ao usuário o tipo de ingresso que ele deseja (digitando 1 para VIP e 2 para standard), bem como se ele deseja o combo de pipoca (opção 1) ou não (opção 2). O programa deverá imprimir uma mensagem para o usuário de acordo com as seguintes regras:
Ingresso VIP sem pipoca: “Valor: 80 reais”;
Ingresso VIP com pipoca: : “Valor: 110 reais”;
Ingresso standard sem pipoca: “Valor: 40 reais”;
Ingresso standard com pipoca: “Valor: 70 reais”; */

// while (true) {
//     let ingresso = Number(prompt(`Selecione o tipo de ingresso que você deseja: \n 1 → Ingresso VIP \n 2 → Ingresso STANDARD`))
//     let combo = Number(prompt(`Você deseja adicionar um combo de pipoca e regrigerante? \n 1 → SIM \n 2 → NÃO`))

//     if (ingresso === 1 && combo === 2) {
//         alert(`Você selecionou as opções: \n Ingresso VIP \n Valor a pagar: → R$80,00`)
//         break;
//     } else if (ingresso === 1 && combo === 1) {
//         alert(`Você selecionou as opções: \n Ingresso VIP \n + \n Combo de pipoca e refrigerante \n Valor a pagar: → R$110,00`)
//         break;
//     } else if (ingresso === 2 && combo === 2) {
//         alert(`Você selecionou as opções: \n Ingresso STANDARD \n Valor a pagar: → R$40,00`)
//         break;
//     } else if (ingresso === 2 && combo === 1) {
//         alert(`Você selecionou as opções: \n Ingresso STANDARD \n + \n Combo de pipoca e refrigerante \n Valor a pagar: → R$70,00`)
//         break;
//     } else {
//         alert(`SELECIONA OPÇOES VÁLIDAS.`)
//     }
// }

/*========================================================================================*/

/* 6 - Escreva um código que simula um Chat. Nesse código, o usuário criará um menu interativo com 3 opções de resposta. Em cada resposta terá que haver outras formas de interação final. Antes de terminar, o código deve informar que irá ser encerrado. */

// let opcao1 = Number(prompt(`Garçom: Bem vindo ao bar do Bola, o que vai querer pra hoje, meu patrão? \n 1 → Cervejinha \n 2 → Cachaça \n 3 → Refrigerante`))
// let opcao2
// let opcao3

// switch (opcao1) {
//     case 1:
//         opcao2 = Number(prompt(`Garçom: Qual cerveja tu quer, meu chefe? \n 1 → Skol \n 2 → Brahma \n 3 → Schin`))
//         switch (opcao2) {
//             case 1:
//                 opcao3 = Number(prompt(`A Skol veio quadrada, o que você faz? \n 1 → Levanta e vai embora \n 2 → Reclama com o garçom \n 3 → Bebe a Skol quadrada`))
//                 alert(`Seja feliz :D`)
//                 break;
//             case 2:
//                 opcao3 = Number(prompt(`A Brahma quente, o que você faz? \n 1 → Levanta e vai embora \n 2 → Reclama com o garçom \n 3 → Bebe a Brahma quente`))
//                 alert(`Seja feliz :D`)
//                 break;
//             case 3:
//                 opcao3 = Number(prompt(`Schin é ruim demais, o que você faz? \n 1 → Levanta e vai embora \n 2 → Reclama com o garçom \n 3 → Bebe a Schin ruim`))
//                 alert(`Seja feliz :D`)
//                 break;
//         }
//     break;
        
//     case 2:
//         opcao2 = Number(prompt(`Garçom: Qual Cachaça tu quer, meu chefe? \n 1 → Pitú \n 2 → 51 \n 3 → Velho barreiro`))
//         switch (opcao2) {
//             case 1:
//                 opcao3 = Number(prompt(`Pitú com o que? \n 1 → Limão \n 2 → Mel \n 3 → Pura, sou macho`))
//                 alert(`Seja feliz :D`)
//                 break;
//             case 2:
//                 opcao3 = Number(prompt(`51 com o que? \n 1 → Limão \n 2 → Mel \n 3 → Pura, sou macho`))
//                 alert(`Seja feliz :D`)
//                 break;
//             case 3:
//                 opcao3 = Number(prompt(`Velho barreiro com o que? \n 1 → Limão \n 2 → Mel \n 3 → Pura, sou macho`))
//                 alert(`Seja feliz :D`)
//                 break;
//         }
//     break;
//     case 3:
//         opcao2 = Number(prompt(`Garçom: Qual Refrigerante tu quer, meu chefe? \n 1 → Coquinha \n 2 → Fanta \n 3 → Antartica`))
//         switch (opcao2) {
//             case 1:
//                 opcao3 = Number(prompt(`Qual tamanho? \n 1 → 300ml \n 2 → 1L \n 3 → 2L`))
//                 alert(`Seja feliz :D`)
//                 break;
//             case 2:
//                 opcao3 = Number(prompt(`Qual tamanho? \n 1 → 300ml \n 2 → 1L \n 3 → 2L`))
//                 alert(`Seja feliz :D`)
//                 break;
//             case 3:
//                 opcao3 = Number(prompt(`Qual tamanho? \n 1 → 300ml \n 2 → 1L \n 3 → 2L`))
//                 alert(`Seja feliz :D`)
//                 break;
//         }
//     break;
// }

/*========================================================================================*/

/* 7 - A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, 
cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um programa que leia o número de horas trabalhadas em um mês,
o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas.
(considere que o mês possua 4 semanas exatas). */

// let horasTrabalhadas = Number(prompt(`Quantas horas você trabalhou nesse mês: `))
// let salarioHora = Number(prompt(`Quanto você ganha por hora trabalhada? `))
// let horasRegulares = 160
// let salarioBase = horasRegulares * salarioHora

// if (horasTrabalhadas <= horasRegulares) {
//     alert(`Você deve receber: R$${salarioBase.toFixed(2)}!`)
// } else {
//     let horaExtra = horasTrabalhadas - horasRegulares
//     let valorHoraExtra = salarioHora * 1.5
//     let salarioExtra = horaExtra * valorHoraExtra + salarioBase
//     alert(`Você deve receber: R$${salarioExtra.toFixed(2)}!`)
// }

/*========================================================================================*/

/* 8 - Elabore uma calculadora simples, levando em consideração dois números de entrada pelo usuário e uma opção de operação (SOMA, SUBTRAÇÃO, DIVISÃO etc).
Pode ser utilizado o conceito do switch/case, IF/ELSE, funções e... laço se já souber! */

// while (true) {
//     let numero1 = Number(prompt(`Digite o primeiro número: `))
//     let numero2 = Number(prompt(`Digite o segundo número: `))
    
//     while (true) {
//         let operacao = parseInt(prompt(`Escolha a operação desejada: \n 1 → ADIÇÃO (+) \n 2 → SUBTRAÇÃO (-) \n 3 → MULTIPLICAÇÃO (x) \n 4 → DIVISÃO (÷) \n 5 → EXPONENCIAÇÃO (a^)`))
    
//         if (operacao > 5 || operacao < 1) {
//             alert(`ERRO: SELECIONE UMA OPÇÃO VÁLIDA!`)
//         } else {
//             switch (operacao) {
//                 case 1:
//                     alert(`O resultado de ${numero1} + ${numero2} = ${numero1 + numero2}`)
//                     break;
//                 case 2:
//                     alert(`O resultado de ${numero1} - ${numero2} = ${numero1 - numero2}`)
//                     break;
//                 case 3:
//                     alert(`O resultado de ${numero1} x ${numero2} = ${numero1 * numero2}`)
//                     break;
//                 case 4:
//                     alert(`O resultado de ${numero1} ÷ ${numero2} = ${numero1 / numero2}`)
//                     break;
//                 case 5:
//                     alert(`O resultado de ${numero1} ^ ${numero2} = ${numero1 ** numero2}`)
//                     break;
//             }
//             break;
//         }
//     }
//     while (true) {
//         let continuar = Number(prompt(`Deseja realizar mais um calculo? \n 1 → SIM \n 2 → NÃO`))
//         if (continuar == 1) {
//             break;
//         } else if (continuar == 2) {
//             alert(`Até breve! :D`)
//             process.exit(0);
//         } else {
//             alert(`ERRO: SELECIONE UMA OPÇÃO VÁLIDA!`)
//         }
//     }
// }
