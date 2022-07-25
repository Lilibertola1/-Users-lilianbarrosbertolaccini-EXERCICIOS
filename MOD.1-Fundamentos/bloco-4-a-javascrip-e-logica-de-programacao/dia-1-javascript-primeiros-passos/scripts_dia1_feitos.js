const myName = "Lili";
const birthCity = 'São Paulo';
let birthYear = 2030 ;
console.log(myName);
console.log(birthCity);
console.log(birthYear);
 

const base = 5 ;
var height = 8 ;
const area = base * height;
console.log(area);

const perimeter = 5 + 5 + 8 + 8;
console.log(perimeter);



const nota = 70; 
if (nota >= 70) {
console.log("Você foi aprovado")
} else if (nota < 70 && nota >= 60) {
console.log("Você está na nossa lista de espera");
} else if (nota < 60){
    console.log ("Você foi reprovada(o)")
}




const currentHour = 14;
let message = " "
if (currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
} else if (currentHour < 11 && currentHour < 4) {
   message = "Hmmm, cheiro de café recém passado";
} console.log(message)








let weekDay = "quarta-feira"
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
} else {

}console.log("FINALMENTE, descanso merecido UwU")




const a = 2;
const b = 4;
  console.log(a + b);
  console.log(a - b);
  console.log(a / b);
  console.log(a * b);
  console.log(a % b);



  const A = 75;
const B = 28;

if (A > B) {
    console.log("A é maior que B");
} else if (A = B) {
    console.log("A é igual a B");
}else {
    console.log("B é maior que A");
}






const A = 5;
const B = 8;
const C = 6;
if (A < B && A < C){
console.log("o maior numero é ' + A + '(A)");
} else if (B > A && B > C){
    console.log("o maior numero é ' + B + '(B)"); 
}else {
    console.log("o maior numero é ' + C + '(C)'");
}





const valor = 5
if(valor > 0){
    console.log("positive"); 
}else if(valor < 0){
    console.log("negative");
}else{
    console.log(zero);
}


««««let Marina = 20
let Silvia = 30
let Iza = 45
if (Marina < Silvia && Marina < Iza) {
    console.log("Marina é a pessoa mais jovem que possui 20 anos de idade");
} else if (Silvia < Marina && Silvia < Iza) {
    console.log("Silvia é a pessoa mais jovem que possui 30 anos de idade");
} else {
    console.log("Iza é a pessao mais jovem que possui 45 anos de idade");
}





let age = 18;
let sex = F;
let weight = 50
let height = 1.67
if (sex = F){
    (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161
    console.log(a taxa metabolica basal é: )
}



const base
let height













    let prova = '10';

    switch (prova) {
        case "5,0 a 6,9":
            console.log('você precisa estudar mais');
            brake;

        case "7,0 a 8,5":
            console.log('você esta indo bem!');
            brake;

        case "8,6 a 10":
            console.log('vc, está, aprovada!');
            brake;

        default:
            console.log('vc não alcancou a pontuacão');


    }

    

   // exercicio 6 - xadrez

   let chessPiece = 'peão';

   switch(chessPiece.toLowerCase()) {
    case 'rei' : console.log('Rei -> um movimento por jogada para qualquer direção');
    break;
    case 'rainha' : console.log('Rainha -> horizontal, vertical e diagonal');
    break;
    case 'bispo' : console.log('bispo -> diagonal');
    break;
    default: console.log('peça invalida')
   }

   //exercicio 7

Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F

const grade = 86

if(grade < 0 || grade > 100) {
    console.log("essa nota não existe, vai procurar em outra escola!");
}else if(grade >= 90){
    console.log("A");
}else if(grade >= 80) {
    console.log("B");
}else if(grade >=70) {
    console.log("C");
}else if(grade >= 60) {
    console.log("D");
}else if(grade >=50) {
    console.log("E");
}else if(grade < 50) {
    console.log("F");
}

// ex. 8

let n1 = 6;
let n2 = 9;
let n3 = 3;

if(n1 === par){
    console.log(true)
    else{
        console.log(false);
    }
}
// exercicio 8. Escreva um programa que defina três números em variáveis no seu começo 
//e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.


const n1 = 6;
const n2 = 9;
const n3 = 3;

let tudoPar = false;

if((n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0)) {
    todas = true;
} console.log(tudoPar);

// 10

const valorProd = 1;
const valorRenda = 3;


if (valorProd >= 0 && valorRenda >= 0) {
    const tatalValorProd = valorProd * 1.2;
    const tatlValorLucro = (valorProd - valorProd) * 1000;
    console.log(tatlValorLucro);
} else{
    console.log(EROOOOOOOOOOOOO);
};


const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};

let asterisco = '*';
let string = '';
let length = 3;
for (let i = 1; i <= length; i++) {
  if (i == 1) {
    string = ' '.repeat(2).concat(asterisco);
  } else if(i == 2) {
    string += ' ';
    string += asterisco.repeat(3)
  } else{
    string += asterisco.repeat(5);
  };
  console.log(string);
  string = '';
};