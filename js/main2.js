// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// Generare un numero random

let numGioc = Math.floor(Math.random() * 6) + 1;
console.log(`il numero del giocatore è ${numGioc}`)
let numComp = Math.floor(Math.random() * 6) + 1;
console.log(`il numero del computer è ${numComp}`)

if (numGioc > numComp ) {
    alert(`Il giocatore ha vinto con il numero ${numGioc}`)
    console.log (`Il giocatore ha vinto con il numero ${numGioc}`)
} else if (numGioc < numComp) {
    alert(`il computer ha vinto con il numero ${numComp}`)
    console.log (`il computer ha vinto con il numero ${numComp}`)
} else {
    alert('pareggio')
    console.log('pareggio')
}