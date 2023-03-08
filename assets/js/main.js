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
let travelKm = prompt("How many kilometers do you want to travel? ");
console.log(travelKm)

// 2. declaretion "How old are you?"
const age = prompt("How old are you?");
console.log(age)

// 3. declaretion price per km
const priceKm = 0.21;
console.log(priceKm)

// 4. declaretion total price travel
let totalPrice = (travelKm * priceKm)
console.log(totalPrice)

// 5. IF age is lower than 18 years THEN active discount 20%
// 6. ELSE IF age is higher than 18 years THEN active discount 40%

/* if (age < 18) {
    price20 = totalPrice * ; // 20% discount for minors
} else if (age > 65) {
    price40 = totalPrice * ; // 40% discount for senio5rs
}else{
    (totalPrice)
}
 */
// 7. print in page HTML result with human confortable numericlal figures

document.getElementById("result").innerHTML = "Total price: " + totalPrice.toFixed(2) + "€";
