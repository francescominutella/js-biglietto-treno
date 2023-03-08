/* Il programma dovrà chiedere all'utente il numero di chilometri
che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare
il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km(0.21 € al km)

va applicato uno sconto del 20 % per i minorenni

va applicato uno sconto del 40 % per gli over 65.

L'output del prezzo finale va messo fuori in forma umana

(con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
 */

/* 
strumenti:
- prompt
- const/let
- let (operation)
- IF statement
- innerHTML
- toFixed (https://www.w3schools.com/jsref/jsref_tofixed.asp)
*/


// 1. declaretion "How many kilometers do you want to travel?"
let kilometers = prompt("Enter the number of kilometers:");
console.log(kilometers)

// 2. declaretion "How old are you?"
let age = prompt("Enter your age:");
console.log(age)

// 3. declaretion price per km
const priceKm = 0.21;
console.log(priceKm)

// 4. declaretion total price travel
let totalPrice = kilometers * priceKm;
console.log(totalPrice);




// 5. IF age is lower than 18 years THEN active discount 20%
// 6. ELSE IF age is higher than 18 years THEN active discount 40%


if (age < 18) {
    totalPrice = ((totalPrice * 20) / 100);
    document.getElementById("result").innerHTML = `Price with descount 20%: ${totalPrice.toFixed(2)}€ `; /* "Total price: " + totalPrice.toFixed(2) + "€" */;
} else if (age > 65) {
    totalPrice = ((totalPrice * 40) / 100);
    document.getElementById("result").innerHTML = `Price with descount 40%: ${totalPrice.toFixed(2)}€ `;
}else{
    document.getElementById("result").innerHTML = `Whole price: ${totalPrice.toFixed(2)}€ `
}




/* alert("The total price of the ticket is " + totalPrice.toFixed(2) + "€"); */
// 7. print in page HTML result with human confortable numericlal figures
