/* 1 creazione di un array con diverse mail.
   2 prompt della propria mail e successivamente un (if) per cui:
        _SE la mail immessa è uguale a una delle mail nella lista allora stampa "accesso consentito"
        _SE la mail immessa non corrisponde a nessuna mail nella lista allora stampa "accesso negato"
*/

const mailList = ["enrico@fermi.it" , "sauron@darklord.com" , "tony@stark.av" , "cassius@clay.us" , "edgarallan@poe.us" ];
 
const userMail = prompt("immetti la tua mail");

for (let i = 0; i < mailList.length; i++) {


    if (mailList[i] == userMail) {
        
        console.log('Accesso consentito')

    }

}



