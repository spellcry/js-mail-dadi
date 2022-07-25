console.log('ESERCIZIO BONUS');
const arrayACaso = [20, 59, 'Pippo', 'Topolino', true, 110, 'Mille'];
console.log(`Stampo a video gli ultimi 5 elementi dell'array ${arrayACaso}`);

for ( let i = arrayACaso.length - 1; i >= arrayACaso.length - 5; i-- ) {
    console.log(arrayACaso[i]);
}

console.log('ESERCIZIO EXTRA BONUS E SUPER EXTRA BONUS');
min = Math.ceil(0);
max = Math.floor(100);
const arrayLength = parseInt(prompt('Quanti elementi dovrà contenere l\'array?'));
const elementiDaTogliere = parseInt(prompt('Quanti elementi dobbiamo togliere dal fondo dell\'array?'));

/* se arrayLength e elementiDaTogliere sono interi positivi
   inizializzo l'array con numeri interi randomici e stampo gli ultimi a video
   in base al numero inserito dall'utente */
if ( !isNaN(arrayLength) && arrayLength > 0 ) {
    if ( !isNaN(elementiDaTogliere) && elementiDaTogliere > 0 ) {
        let arrayNumericoRandom = [];
        for ( let i = 0; i < arrayLength; i++) {
            arrayNumericoRandom.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
        console.log(`Array generato randomicamente di ${arrayLength} elementi: ${arrayNumericoRandom}`);
        console.log(`Stampo a video gli ultimi ${elementiDaTogliere} elementi`);
        for ( let i = arrayNumericoRandom.length - 1; i >= arrayNumericoRandom.length - elementiDaTogliere; i-- ) {
            console.log(arrayNumericoRandom[i]);
        }
    } else {
        console.log('Non hai inserito un numero valido. Deve essere un intero maggiore di 0');
    }
} else {
    console.log('Non hai inserito un numero valido. Deve essere un intero maggiore di 0');
}