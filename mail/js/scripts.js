const mail = prompt('Inserisci la tua email');
const emailValide = ['email1@test.com', 'email2@test.com', 'email3@test.com', 'email4@test.com', 'email5@test.com', 'email6@test.com', 'email7@test.com'];
let trovato = false;

for ( let i = 0; i < emailValide.length && !trovato; i++ ) {
    emailCorrente = emailValide[i];
    if ( mail === emailCorrente ) {
        trovato = true;
    }
}

if ( trovato ) {
    console.log(`L'email ${mail} può accedere`);
} else {
    console.log(`L'email ${mail} non può accedere`);
}