var board = document.querySelector('.board-js');
var button = document.querySelector('.button-js');
var result = document.querySelector('.result-js');
button.addEventListener('click', reset);
board.addEventListener('click', addXO);


var centinel = true;
var array = [];

function addXO(event) {
    var position = event.target.id[1] - 1;
    if (centinel) {
        event.target.textContent = 'X';
        event.target.style.color = '#ffc107';
        array[position] = 'X';
        winnerPlayer('X');
        centinel = false;
    } else {
        event.target.textContent = 'O';
        array[position] = 'O';
        winnerPlayer('O');
        centinel = true;
    }
};

function winnerPlayer(value) {
    if ((array[0] == value && array[1] == value && array[2] == value) ||
        (array[0] == value && array[3] == value && array[6] == value) ||
        (array[0] == value && array[4] == value && array[8] == value) ||
        (array[3] == value && array[4] == value && array[5] == value) ||
        (array[1] == value && array[4] == value && array[7] == value) ||
        (array[2] == value && array[4] == value && array[6] == value) ||
        (array[6] == value && array[7] == value && array[8] == value) ||
        (array[2] == value && array[5] == value && array[8] == value)) {

            board.removeEventListener('click', addXO);

        result.textContent = 'Ganó el jugador ' + value + '  yupi!';

    } else if (array[0] != null && array[1] != null && array[2] != null &&
        array[3] != null && array[4] != null && array[5] != null &&
        array[6] != null && array[7] != null && array[8] != null) {

        board.removeEventListener('click', addXO);

        result.textContent = 'Empate!';
    };
};

//función al button, en recarga la página
function reset() {
    window.location.reload();
};


