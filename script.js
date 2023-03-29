/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* let a = 3;
let b = 5;

if (a > b) {
  console.log("Il maggiore è " + a);
} else {
  console.log("Il maggiore è " + b);
} */


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* let a = 6;
if (a !== 5) {
  console.log(a + " is not equal to 5!");
} else {
  console.log(a + " is equal to 5!");
} */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* let a = 15;
if(!(a%5)) {
  console.log(a + " è perfettamente divisibile per 5");
  console.log("(Ci sta " + (a / 5) + " volte)")
} else {
  console.log(a + " non è divisibile perfettamente per 5");
  console.log("(Resto = " + (a % 5) + ")");
} */


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* let a = 4;
let b = 2;
if((a === 8) || (b === 8) || (a + b === 8) || (a - b === 8)) {
  console.log(true);
} else {
  console.log(false);
} */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* let totalShoppingCart = 45;
let shippingCost;
if(totalShoppingCart > 50){
  shippingCost = 0;
  console.log("La spedizione è gratuita.");
  console.log("Totale: " + totalShoppingCart + "€");
} else {
  shippingCost = 10;
  console.log("Costo spedizione: 10€");
  console.log("Totale: " + (totalShoppingCart + shippingCost) + "€");
} */


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* let totalShoppingCart = 45;
let shippingCost;
let discount = 20;
if(totalShoppingCart > 50){
  shippingCost = 0;
  console.log("La spedizione è gratuita.");
  console.log("Totale: " + totalShoppingCart + "€");
} else {
  shippingCost = 10;
  console.log("Costo spedizione: 10€");
  console.log("Totale: " + (totalShoppingCart + shippingCost) + "€");
}
console.log("Il totale con lo sconto Black Friday è " + ((totalShoppingCart + shippingCost) / 100 * (100 - discount))); */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* let a = 3;
let b = 8;
let c = 12;
if((a > b) && (a > c)) {
  if(b > c){
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
} else if ((b > a) && (b > c)) {
  if(a > c) {
    console.log(b, a, c);
  } else {
    console.log(b, c, a);
  }
} else {
  if(a > b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
} */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* let numero = 12;
if(typeof numero === "number" && (numero % 1 === 0)) {
  console.log(numero + " è un numero intero");
} else {
  console.log(numero + " non è un numero intero");
} */



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* let numero = 4;
if(!(numero % 2)) {
  console.log(numero + " è pari!");
} else {
  console.log(numero + " è dispari!");
} */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */

/*   let val = 7
  if (val < 5) {
      console.log("Meno di 10");
    } else if (val < 10) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    } */


/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* let num = 16;
if(num < 5) {
  console.log("Tiny");
} else if(num > 10) {
  console.log("Small");
} else if(num < 15) {
  console.log("Medium");
} else if(num < 20) {
  console.log("Large");
} else {
  console.log("Huge");
} */

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* let gender;
let isMale = true;
gender = isMale ? "male" : "female";
console.log(gender); */

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* let n = 0;
while(n <= 5) {
  console.log(n);
  n ++;
} */

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* for(let n = 0; n <= 10; n++) {
  console.log(n);
} */

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* for(let n = 0; n <= 10; n++) {
  if((n !== 3) && (n !== 8)) {
    console.log(n);
  }
} */

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* for(let n = 0; n <= 15; n++) {
  if(!(n % 2)) {
    console.log(n + " è pari!");
  } else {
    console.log(n + " è dispari!");
  }
} */


/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/


/* for(let i = 0; i <= 100; i++) {
  if((!(i % 3)) && (!(i % 5))) {
    console.log("FizzBuzz");
  } else if(!(i % 3)) {
    console.log("Fizz");
  } else if(!(i % 5)) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
} */


/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* let day = 3;
switch (day) {
  case 1:
    console.log("lunedì");
    break;
  case 2:
    console.log("martedì");
    break;
  case 3:
    console.log("mercoledì");
    break;
  case 4:
    console.log("giovedì");
    break;
  case 5:
    console.log("venerdì");
    break;
  case 6:
    console.log("sabato");
    break;
  case 7:
    console.log("domenica");
    break;
  default:
    console.log("Scrivi un numero da 1 a 7");
} */
