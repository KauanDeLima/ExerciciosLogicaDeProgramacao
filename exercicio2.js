/*Faça um programa que receba o ano de nascimento de uma pessoa e o ano atual. Calcule e imprima:
a. A idade dessa pessoa
b. Essa idade convertida em semana*/

// entrada

    let anoNascimento = 2005;
    let anoAtual = 2022;
    
//processamento

    let idade = anoAtual - anoNascimento;
    let semana = idade * 52;
    

//saida
console.log("a sua idade é: " + idade);
console.log("a sua idade em semanas é: " + semana)
