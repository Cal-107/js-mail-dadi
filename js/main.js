// Mail
// - crea una lista contenente almeno 3 indirizzi email
// - chiedi all’utente la sua email,
// - controlla che sia nella lista di chi può acceder (lista creata sopra al punto 1),
// - stampa un messaggio appropriato sull’esito del controllo.


//creazione array email

const mailList = ['blu@gmail.it', 'rosso@gmail.it', 'verde@gmail.it', 'viola@gmail.it', 'marrone@gmail.it'];
console.log(mailList);

//numero tot di item array
console.log(mailList.length);

//chiedere email all'utente
let mailChoise = prompt('Inserisca un e-mail valida presente in lista');
console.log(mailChoise);

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
        console.log('Email valida');
    } else {
        alert('E-mail non valida, inserire e-mail presente in lista');
        console.log('email non valida');
    }
   

    // for (let i= 0; i < mailList.length; i++) {
    //     if (mailList[i] !== finalChoise) {
    //         finalChoise = true;
    //     }
    //     console.log(`L'E-mail scelta ${finalChoise} non è disponibile nella lista`)
    // }


