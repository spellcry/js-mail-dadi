const min = Math.ceil(1);
const max = Math.floor(6);
const computer = Math.floor(Math.random() * ( max - min + 1 ) + min);
const player = Math.floor(Math.random() * ( max - min + 1 ) + min);

if ( computer > player ) {
    console.log(`Ha vinto il computer con un punteggio di ${computer} a ${player}`);
} else if ( computer < player ) {
    console.log(`Ha vinto il giocatore con un punteggio di ${player} a ${computer}`);
} else {
    console.log(`C'è stato un pareggio con un punteggio di ${player} a ${computer}`);
}