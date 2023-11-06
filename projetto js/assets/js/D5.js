/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log('primo esercizio');
console.log(pets ); //primo modo 
// secondo 
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log('secondo esercizio');

let alfaPets = pets.sort();

console.log(alfaPets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log('terzo esercizio');
let invPets = pets.reverse();
console.log(invPets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log('quarto esercizio');
let spoPets = pets.shift();
pets.push(spoPets)

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

console.log('quinto esrcizio');

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'AB123CD';
  //cars[i].licensePlate = `AB123C${i + 1}`;
}
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log('sesto esrcizio');

const newCar = {
  brand: 'Mercedes',
  model: 'Benz ',
  color: 'silver',
  trims: ['AMG','avantgard'],
  licensePlate: 'XY456ZW'
};

cars.push(newCar);


for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  car.trims.pop();
}

console.log(cars);


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let i = 0 ; i < cars.length; i++) {
  const primoTrim =  cars[i].trims[0];
  justTrims.push(primoTrim);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log('ottavo esercizio');

for (let i = 0; i < cars.length; i++) {
  const primaLettera = cars[i].color[0];

  if (primaLettera === 'b') {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let stampa = 0;

while (stampa< numericArray.length && numericArray[stampa] !== 32) {
  console.log(numericArray[stampa]);
  stampa++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']


const alphabet = 'abcdefgiklmnopqrstuvxz';

let positionsArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  let character = charactersArray[i].toLowerCase();
  let position = alphabet.indexOf(character) + 1;

  switch (position) {
    case 1:
      positionsArray.push(1);
      break;
    case 2:
      positionsArray.push(2);
      break;
    case 3:
      positionsArray.push(3);
      break;
    case 4:
      positionsArray.push(4);
      break;
    case 5:
      positionsArray.push(5);
      break;
    case 6:
      positionsArray.push(6);
      break;
    case 7:
      positionsArray.push(7);
      break;
    case 8:
      positionsArray.push(8);
      break;
    case 9:
      positionsArray.push(9);
      break;
    case 10:
      positionsArray.push(10);
      break;
    case 11:
      positionsArray.push(11);
      break;
    case 12:
      positionsArray.push(12);
      break;
    case 13:
      positionsArray.push(13);
      break;
    case 14:
      positionsArray.push(14);
      break;
    case 15:
      positionsArray.push(15);
      break;
    case 16:
      positionsArray.push(16);
      break;
    case 17:
      positionsArray.push(17);
      break;
    case 18:
      positionsArray.push(18);
      break;
    case 19:
      positionsArray.push(19);
      break;
    case 20:
      positionsArray.push(20);
      break;
    case 21:
      positionsArray.push(21);
      break;
    case 22:
      positionsArray.push(22);
      break;
    default:
      positionsArray.push('Not in the alphabet');
  }
}

console.log(positionsArray);

