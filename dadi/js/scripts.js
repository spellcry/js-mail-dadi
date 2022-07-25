const min = Math.ceil(1);
const max = Math.floor(6);

const chiVinceElement = document.querySelector('.chi-vince');

let playerResultElement = document.querySelector('.player__result');
let computerResultElement = document.querySelector('.computer__result');

if ( playerResultElement == null && computerResultElement == null ) {
    playerResultElement = document.createElement('p');
    playerResultElement.classList.add('player__result');
    playerResultElement.classList.add('result');
    computerResultElement = document.createElement('p');
    computerResultElement.classList.add('computer__result');
    computerResultElement.classList.add('result');
}

const computerElement = document.querySelector('.results .computer');
computerElement.append(computerResultElement);
const playerElement = document.querySelector('.results .player');
playerElement.append(playerResultElement);

const giocaElement = document.addEventListener('click', function(){
    const computer = Math.floor(Math.random() * ( max - min + 1 ) + min);
    const player = Math.floor(Math.random() * ( max - min + 1 ) + min);
    computerResultElement.innerHTML = computer;
    playerResultElement.innerHTML = player;
    if ( computer > player ) {
        chiVinceElement.innerHTML = 'Hai perso!';
    } else if ( computer < player ) {
        chiVinceElement.innerHTML = 'Hai vinto!';
    } else {
        chiVinceElement.innerHTML = 'Pareggio!';
    }
});
