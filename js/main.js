// Mail
// - crea una lista contenente almeno 3 indirizzi email
// - chiedi all’utente la sua email,
// - controlla che sia nella lista di chi può acceder (lista creata sopra al punto 1),
// - stampa un messaggio appropriato sull’esito del controllo.


//creazione array email

const mailList = ['blu@gmail.it', 'rosso@gmail.it', 'verde@gmail.it', 'viola@gmail.it', 'marrone@gmail.it'];

//numero tot di item array
console.log(mailList.length);

//chiedere email all'utente
let mailChoise = prompt('Inserisca un e-mail valida presente in lista');

//check se l'email inserita è presente nella lista array

    let finalChoise = false; //flag

    for (let i= 0; i < mailList.length; i++) {
        if (mailList[i] === mailChoise) {
            finalChoise = true;
            break;
        }
    }

    if (finalChoise) {
        alert('E-mail valida, grazie');
    } else {
        alert('E-mail non valida, inserire e-mail presente in lista');
    }


