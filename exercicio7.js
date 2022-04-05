//Faça um programa que receba o nome, cargo e salário de um funcionário. Calcule o salário acrescido de 10%. Ao final exiba o nome, o cargo e o novo salário desse funcionário.

//entrada
    let nome = "kauan";
    let cargo = "estagiario";
    let salario = 1000;
//processamento
    salario = salario + (salario/100) * 10 ;  

//saida
    console.log("salario: " + salario); 