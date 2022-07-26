const min = Math.ceil(1);
const max = Math.floor(6);

// elemento in cui scrivere chi ha vinto
const chiVinceElement = document.querySelector('.chi-vince');

/* elementi in cui scrivere il punteggio
   di computer e player */
const playerResultElement = document.createElement('p');
playerResultElement.classList.add('player__result');
playerResultElement.classList.add('result');
const computerResultElement = document.createElement('p');
computerResultElement.classList.add('computer__result');
computerResultElement.classList.add('result');

// aggiungo elementi con il punteggio nei rispettivi div
const computerElement = document.querySelector('.results .computer');
computerElement.append(computerResultElement);
const playerElement = document.querySelector('.results .player');
playerElement.append(playerResultElement);

// event listener button gioca
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
