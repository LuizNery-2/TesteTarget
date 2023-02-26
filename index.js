let teclado = require('prompt-sync')();


//Questão 2
function fibonacci(numero){
  
  let soma = 0;
  let aux = 0;
  let i = 1;

     while(true)
    {
      aux = soma;
      soma = soma + i;
      i = aux;

      
      if(soma == numero) {
          console.log("o número informado pertence a sequência de Fibonacci.");
          break;
      }
      else if(soma > numero){
          console.log("o número informado não pertence  a sequência de Fibonacci.");
          break;
      }

    }
}
let numero = teclado();
fibonacci(numero);

//Questão 3
const dados = require('./dados.json');
let faturamento = [];
dados.forEach(element => {
    faturamento.push(element.valor);
});

let menorValor = faturamento[0];
let maiorValor = faturamento[0];
let media;
let soma;
let diasAcimaMedia = 0;
let diasFaturamentoZero = 0;

for (let index = 0; index < faturamento.length; index++) {
    if(maiorValor < faturamento[index]){

        maiorValor = faturamento[index];

    }
    if(menorValor > faturamento[index]){

        menorValor = faturamento[index];
    }
    if (faturamento[index] > 0 ) {
       soma =+ faturamento[index]; 
    }
    else{
        diasFaturamentoZero++;
    }
}

media = soma/(faturamento.length - diasFaturamentoZero)

for (let index = 0; index < faturamento.length; index++) {
   
    if (media < faturamento[index] && faturamento[index] > 0 ) {
        diasAcimaMedia++;
    }
    
}


console.log(` O maior valor foi de R$ ${maiorValor} \n`,
`O menor valor foi de R$ ${menorValor} \n`,
`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi de : ${diasAcimaMedia}`);


//Questão 4

let SP = 67836.43;
let RJ = 36678.66;
let MG = 29229.88;
let ES = 27165.48;
let Outros = 19849.53;

let somaTotal = SP + RJ + MG + ES + Outros;

let porCentoSP =  (SP/somaTotal)*100;
let porCentoRJ =  (RJ/somaTotal)*100;
let porCentoMG =  (MG/somaTotal)*100;
let porCentoES =  (ES/somaTotal)*100;
let porCentoOutros = (Outros/somaTotal)*100;

console.log(` SP:  ${porCentoSP.toFixed(2)} %\n`,
`RJ:  ${porCentoRJ.toFixed(2)} %\n`,
`MG:  ${porCentoMG.toFixed(2)} %\n`,
`ES:  ${porCentoES.toFixed(2)} %\n`,
`Outros:  ${porCentoOutros.toFixed(2)} %`)


//Questão 5

console.log("Digite uma palavra: ")
let palavra = teclado();
let palavraInvertida = '';
for (let index = palavra.length-1; index >= 0; index--) {
    palavraInvertida += palavra[index];
    
}

console.log(palavraInvertida);
