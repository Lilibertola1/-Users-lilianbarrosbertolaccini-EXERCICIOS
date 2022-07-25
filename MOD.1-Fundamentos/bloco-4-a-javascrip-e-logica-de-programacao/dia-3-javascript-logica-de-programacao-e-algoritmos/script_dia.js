O fatorial é representado pelo sinal ! // 1

4! = 4 x 3 x 2 x 1 = 24

let fatorial = 1;
for(let index = 10; index > 0; index += 1) {
    fatorial * index;
}console.log(fatorial);




//exercicio 2


let word = 'banana';
let reservWord = '';

for(let index = 0; index < word.length; index += 1) {
    reservWord += word[word.length - 1 - index];
}
console.log(reservWord);

//outra maneira usando split

let word = 'sopapos';
let reservWord = '';

reservWord = word.split('').reverse().join('');
console.log(reservWord)

// const myString = 'Lili'
// const splits = myString.splits()
// console.log(splits)



let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = [0];
let menorPalavra = [0];

for(let index = 0; index < array.length; index += 1) {
    if(array[index].length > maiorPalavra) {
        maiorPalavra = array[index];
    }
}
for(let index = 0; index < array.length; index += 1) {
    if(array[index].length < menorPalavra) {
        menorPalavra = array[index];
    }
}
console.log(maiorPalavra);
console.log(menorPalavra);



let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);
// nao deu certo o segundo resultado!!!!

//exercicio 4

let numeroPrimo = 0;
for(let index = 2; index <= 50; index += 1) {
    let imprime = true;
for(let indexDivisor = 2; indexDivisor < numeroPrimo; indexDivisor += 1) {
    if(numeroPrimo % indexDivisor === 0) {
        imprime = false;
    }
}
}
    if (imprime) {
        numeroPrimo = index;
    }
    console.log(numeroPrimo);


    let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);

// bonus 1

n = 5

*****
*****
*****
*****
*****
//console.log('*****');
//console.log('*****');
//console.log('*****');
//console.log('*****');
//console.log('*****');

let n = 10
let inputLine = '';
let symbol = '*'

for(let index = 0; index < n; index += 1) {
    inputLine = inputLine + symbol
}

for(let index = 0; index < n; index += 1) {
    console.log(inputLine);
}

// N2

let n = 5;
let inputLine = '';
let symbol = '*';

for (let index = 0; index < n; index += 1) {
    inputLine = inputLine + symbol;
    console.log(inputLine);
}


// N3

let n = 5
let inputLine = '';
let symbol = '*';
let position = size

for (let index = 0; index < size; index += 1) {
for(let colunAindex = 0; colunAindex < size; colunAindex += 1){
    if (colunAindex < position){
    inputLine = inputLine + '';
} else {
    inputLine = inputLine + symbol;
}
}
    inputLine = inputLine + symbol;
   console.log(inputLine);
}
---------------------------

let n = 5
let inputLine = '';
let symbol = '*';
let inputPosition = size

for (let index = 0; index < size; index += 1) {
for(let colunAindex = 0; colunAindex < size; colunAindex += 1){
    if (colunAindex < position){
    inputLine = inputLine + '';
} else {
    inputLine = inputLine + symbol;
}
}
    inputLine = '';
    inputPosition -= 1;
   console.log(inputLine);
}

//exercicio 4 (esse é a solucão do gabariro!)


let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2; // como pedir a posicao central, o meio! 
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) { // a altura agora é quantidade de linhas, não a base, não o n
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};
-----------

let n = 5;
let symbol = '*';
let inputLine = '';

let meioTriangulo = (n + 1) / 2;
let centroEsquerdo = meioTriangulo;
let centroDireito = meioTriangulo;



for (let index = 0; index <= meioTriangulo; index += 1) {
for(let colunAindex = 0; colunAindex <= n; colunAindex += 1){
    if (colunAindex > centroEsquerdo && colunAindex < centroDireito){
    inputLine = inputLine + symbol;
} else {
    inputLine = inputLine + '';
}
}
    inputLine = '';
    centroDireito += 1;
    centroEsquerdo -= 1;
    
   console.log(inputLine);
}
//exercicio 6

let divisor = 1
let lista = 87

for(let index = 2; index < lista.length; index += 1) {
    if(lista % index === 0) divisor += 1;
}   if(divisor === 2) console.log(lista + 'é primo');
    else{
        console.log(lista + ' não é primo');
    }