// exercicio 


 



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index +=1);{
    console.log(numbers[index]);
}


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0
for(let index = 0; index < numbers.length; index += 1);{
  result += numbers[index]
  }  console.log(result);


  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let resultado = 0;
  for (let index = 0; index < numbers.length; index += 1) {
      resultado += numbers[index];
  } console.log(resultado);



// exercicio 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
} media = soma / numbers.length
console.log(media);

// exercicio 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
    if(soma > 20 ){
     console.log("valor maior que 20");
    } else {
        console.log("valor menor ou igual a 20");
    }
    
} media = soma / numbers.length
console.log(media);

// exerciciop 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorValor = numbers[0];

for(let index = 1; index < numbers.length; index += 1) {
    if(numbers[index] > maiorValor){
        maiorValor = numbers[index]
    }
}console.log(maiorValor);



// exercicio 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;

for(let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 !== 0){
        resultado += 1;
    }
}        if(resultado === 0){
            console.log('nenhum valor ímpar encontrado')
        }    else{
            
           }   console.log(resultado);
                     

  //         exercicio 7

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = [0];

for(let index = 1; index < numbers.length; index += 1) {
if(numbers[index] < menorValor){
    menorValor = numbers[index];
}
}console.log(menorValor);

// exercicio 8

let numbers = [];

for (let index = 1; index <= 25; index += 1){
numbers.push[index]     // olha o erro do [] e nao ()
} console.log(numbers);



let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);

 //exercicio 9

 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
 }
