/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// 1- Fa un ciclo di numeri da 0 a 5
// 2- Si, i > 5
// 3- No

// correzione

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }
// 1- Fa una funzione che riceve un numero come parametro e in base alla condizione restituisce un risultato. Se il numero è divisibile per 2 restituisce il numero più 5 altrimenti restituisce il numero
// 2- Si, 2 = 0 
// 3- Si, la funzione deve essere invocata

// correzione
const num = 4;

console.log(addIfEven(4));

function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// 1- Fa una funzione che cicla i numeri da 0 a 5
// 2- Si, le virgole nella struttura del ciclo for
// 3- Si, la funzione deve essere invocata

loopToFive();
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// 1- Fa una funzione in cui ci sono due array, uno con dei numeri e l'altro vuoto. La funzione cicla i numeri del primo array e inserisce nel secondo solo i pari
// 2- Si, i++; , 2 = 0); 
// 3- No

//////////////////

function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers % 2 === 0) {
           return evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers();
