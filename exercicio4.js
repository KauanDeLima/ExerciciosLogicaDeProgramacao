// Faça um programa que receba o nome, o peso e a altura de uma pessoa. Calcule e imprima o nome e o IMC dessa pessoa - IMC = peso / (altura * altura).

//entrada
    let peso = 69;
    let altura = 1.72;


//processamento
    let imc = peso / (altura * altura);

    if (imc >= 25.0) {
        console.log("atenção, IMC alto");       
    }
    if (imc <= 18.5) {

        console.log("Atenção, Imc baixo")
        
    }
    console.log("imc está dentro da média");


//saida
    console.log("seu imc é: " + imc.toFixed(1));
