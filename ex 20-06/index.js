//Calculadora de IMC

// function calcularImc (peso, altura) {
//     const imc = peso / (altura * altura);
//     return imc;
// }

// console.log(`O IMC do indivíduo é ${calcularImc(60, 1.7).toFixed(3)}`);

/*========================================================================================*/

//Chamada e teste da biblioteca Prompt

// var prompt = require('prompt');

// prompt.start();

// prompt.get(['username', 'email'], function (err, result) {

//   console.log('Command-line input received:');
//   console.log('  username: ' + result.username);
//   console.log('  email: ' + result.email);
// });

/*========================================================================================*/

//Renovador de CNH por validação de idade

// const idade = 16;
// const renovar = false;

// if (idade >= 18 && renovar == false) {
//     console.log(`Você é maior de idade! Pode tirar a CNH`);
// } else if (idade >= 18 && renovar == true) {
//     console.log(`Você deve renovar a sua CNH!`);
// } else {
//     console.log(`Você não é maior de idade, não pode tirar a CNH!`);
// }

/*========================================================================================*/

//Lista e demonstração da lista

// const listaDeFrutas = [`Morango`, `Melancia`, `Uva`,`Maçã`, `Laranja`, `Limão`]

// for (let contador = 0; contador < listaDeFrutas.length; contador++) {
//     console.log(listaDeFrutas[contador]);
// }

/*========================================================================================*/

// Segurança de estabelecimento restrito para menores de 18 anos

// var prompt = require('prompt-sync')();

// var nome = prompt('Qual é seu nome?');
// var idade = prompt('Qual é sua idade?');

// if (idade >= 18) {
//     console.log(`Então você pode entrar! Seja bem vindo, ${nome}.`);
// } else {
//     console.log(`Desculpe, menores de idade não podem entrar.`);
// }
