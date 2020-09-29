let player = 1;

//not being used
// const winningCombinations = [
//  [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [6, 4, 2]

//displayer player turn function
const changeTurnHTML = function () {
  if (player % 2) {
    $('#whosturn').text('O');
  } else {
    $('#whosturn').text('X');
  }
};


//add class circle/ X to squares and use win function to detemrine winner
$('.square').on('click', function(event){
  var $squareSelected = $(this);
  if ($squareSelected.hasClass('X')) {
      return false;
} else if ($squareSelected.hasClass('O')) {
    return false;
};
    //add a line that will prevent another class from being added

  if(player === 1) {

    var $addclass = $(this).addClass('X');
      changeTurnHTML();
    if (checkIfPlayerWon('X')) {
      alert(`Player: ${player} has Won the game!`)
    }
    var changeturn = player++;
  } else if (player === 2) {
    var $addclass = $(this).addClass('O');
    changeTurnHTML();
    if (checkIfPlayerWon('O')) {
      alert(`Player: ${player} has Won the game!`)
    }
    player = 1
  }
});

const checkIfPlayerWon = function (symbol) {


if ($('.sq0').hasClass(symbol) && $('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol)) {
return true;
} else if ($('.sq3').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol)) {
  return true;
} else if ($('.sq6').hasClass(symbol) && $('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
  return true;
} else if ($('.sq0').hasClass(symbol) && $('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
  return true;
} else if ($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
  return true;
} else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
  return true;
} else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
    return true;
} else if ($('.sq0').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
    return true;
} else if ($('.sq6').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq2').hasClass(symbol)) {
    return true;
}
};



  $('.reset').on('click', function () {
    $('.square').removeClass('X');
    $('.square').removeClass('O');
  })





  // if (squareSelected.hasClass'ex') || squareSelected.hasClass('oh')) {
  //   alert('this square has already been selected - select another')



  //const $turnSquareToArray = $('.square').toArray();



//add clas son click
