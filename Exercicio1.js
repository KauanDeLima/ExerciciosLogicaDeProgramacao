// 1 Faça um programa que receba a idade de uma pessoa em anos emprima essa idade em: Meses, Dias, Horas, Minutos.


//entrada
let idade = 2 ;

//processamento
let idadeMeses = idade * 12;
let idadeDias = idade * 365;
let idadeHoras = idadeDias * 24;
let idadeMinutos = idadeHoras * 60;

//saida 
console.log("a idade em meses é " + idadeMeses + " meses");
console.log("a idade em dias é " + idadeDias + " dias");
console.log("a idade em horas é " + idadeHoras + " horas");
console.log("a idade em minutos é " + idadeMinutos + " Minutos");