/* 1 creazione di un array con diverse mail.
   2 prompt della propria mail e successivamente un (if) per cui:
        _SE la mail immessa è uguale a una delle mail nella lista allora stampa "accesso consentito"
        _SE la mail immessa non corrisponde a nessuna mail nella lista allora stampa "accesso negato"
*/

const mailList = ["enrico@fermi.it" , "sauron@darklord.com" , "tony@stark.av" , "cassius@clay.us" , "edgarallan@poe.us" ];
 
let userMail = prompt("immetti la tua mail");

const validMail = mailList[i];

for (let i = 0; i < mailList.length; i++) {

    console.log(mailList[i])
}

if (userMail == i) {
    console.log('accesso consentito')
} else {
    console.log('accesso negato')
}

