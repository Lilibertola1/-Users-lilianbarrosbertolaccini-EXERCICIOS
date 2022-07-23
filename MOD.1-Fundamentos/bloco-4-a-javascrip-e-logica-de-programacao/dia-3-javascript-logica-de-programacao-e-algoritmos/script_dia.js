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


