/*----- constants -----*/



const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

const player1 = 'X';
const player2 = 'O';
/*----- app's state (variables) -----*/
let board = [
'', '', '',
'', '', '',
'', '', ''
];

let turn = 'X';
//
const squares = Array.from(document.querySelectorAll('#board div'));

function render() {
board.forEach(function(mark, index){
console.log(mark, index);
squares[index].textContent = mark;
});
};
render();

// });

// $( document ).ready(function() {

    /*----- cached element references -----*/

    /*----- event listeners -----*/
    document.getElementById('board').addEventListener('click', handleTurn);
    /*----- functions -----*/
    function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });
    board[idx] = turn;
// check your console logs to make sure it's working!
console.log(board);
};
    

    //be sure to call the init function!


//});
