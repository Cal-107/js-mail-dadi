// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// Generare un numero random

let numGioc = Math.floor(Math.random() * 6) + 1;
let numComp = Math.floor(Math.random() * 6) + 1;

if (numGioc > numComp ) {
    alert('Il giocatore ha vinto')
    console.log(numGioc)
} else if (numGioc < numComp) {
    alert('il computer ha vinto')
    console.log(numComp)
} else {
    alert('pareggio')
    console.log('pareggio')
}