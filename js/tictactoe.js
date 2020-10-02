//canvas

const canvas = document.querySelector('.canvas1');
const c = canvas.getContext('2d');
let player = 1;
// to indicate how many games each player has won
let wintallycountX = 0
let wintallycountO = 0


//displayer player turn function in html
const changeTurnHTML = function () {
  if (player % 2) {
    $('#whosturn').text('O');
  } else {
    $('#whosturn').text('X');
  }
};


//add class circle/ X to squares and use win function to detemrine winner
$('.square').on('click', function(event){
    //this line will prevenet another grid from being allocated a class
  var $squareSelected = $(this);
  if ($squareSelected.hasClass('X')) {
      return false;
} else if ($squareSelected.hasClass('O')) {
    return false;
};

//player 1's turn
  if(player === 1) {
//on click add class 'x'
    var $addclass = $(this).addClass('X');
    //this function is called to indicate it's players 2's turn after a class has been added
      changeTurnHTML();
    //this function checks for whether it's a draw
      draw();
      //this function checks if player 1 wins and displays relevant css
    if (checkIfPlayerWon('X')) {
      //displays winning css div
      $('#winner').css('visibility', 'visible');
      $('#winner').text("Player X wins the game!")
      //hides player turn html
      $('.playerturn').css('visibility', 'hidden');
      //updates tally
      $('.player1tally').text(`Player X: ${wintallycountX += 1}`)
      $('.player2tally').text(`Player O: ${wintallycountO + 0}`)
    }
    //switches to player 2
    var changeturn = player++;
  } else if (player === 2) {
    var $addclass = $(this).addClass('O');
    changeTurnHTML();
    draw();
    if (checkIfPlayerWon('O')) {
      $('#winner').css('visibility', 'visible');
      $('#winner').text("Player O wins the game!")
      $('.playerturn').css('visibility', 'hidden');
      $('.player1tally').text(`Player X: ${wintallycountX + 0}`)
      $('.player2tally').text(`Player O: ${wintallycountO += 1}`)
      $('.canvas2').css('visibility', 'visible');
    }
    //changes player back to player 1
    player = 1
  }
});


//function to indicate if player has won the game
const checkIfPlayerWon = function (classType) {
//if these 3 squares have the same class player has won = return true
  if ($('.sq0').hasClass(classType) && $('.sq1').hasClass(classType) && $('.sq2').hasClass(classType)) {

      c.beginPath();
      //this indicates the start of the line via x and y corodinates
      c.moveTo(0, 25);
      //this indicates where the line should go on
      c.lineTo(300, 25);
      //colour of line
      c.strokeStyle = "black";
      //stroke draws the line
      c.stroke();
  return true;
  } else if ($('.sq3').hasClass(classType) && $('.sq4').hasClass(classType) && $('.sq5').hasClass(classType)) {
      c.beginPath();
      c.moveTo(0, 72);
      c.lineTo(300, 72);
      c.strokeStyle = "black";
      c.stroke();
    return true;
  } else if ($('.sq6').hasClass(classType) && $('.sq7').hasClass(classType) && $('.sq8').hasClass(classType)) {
        c.beginPath();
        c.moveTo(0, 125);
        c.lineTo(300, 125);
        c.strokeStyle = "black";
        c.stroke();
    return true;
  } else if ($('.sq0').hasClass(classType) && $('.sq3').hasClass(classType) && $('.sq6').hasClass(classType)) {
      c.beginPath();
      c.moveTo(58, 0);
      c.lineTo(58, 300);
      c.strokeStyle = "black";
      c.stroke();
      return true;
  } else if ($('.sq1').hasClass(classType) && $('.sq4').hasClass(classType) && $('.sq7').hasClass(classType)) {
      c.beginPath();
      c.moveTo(150, 0);
      c.lineTo(150, 300);
      c.strokeStyle = "black";
      c.stroke();
      return true;
  } else if ($('.sq2').hasClass(classType) && $('.sq5').hasClass(classType) && $('.sq8').hasClass(classType)) {
      c.beginPath();
      c.moveTo(245, 0);
      c.lineTo(245, 300);
      c.strokeStyle = "black";
      c.stroke();
      return true;
  } else if ($('.sq0').hasClass(classType) && $('.sq4').hasClass(classType) && $('.sq8').hasClass(classType)) {
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(300, 150);
    c.strokeStyle = "black";
    c.stroke();
      return true;
  } else if ($('.sq6').hasClass(classType) && $('.sq4').hasClass(classType) && $('.sq2').hasClass(classType)) {
    c.beginPath();
    c.moveTo(300, 0);
    c.lineTo(0, 150);
    c.strokeStyle = "black";
    c.stroke();
    return true;

  } else {
    return false;
  }
};


//reset button
  $('.reset').on('click', function () {
    $('.square').removeClass('X');
    $('.square').removeClass('O');
    c.clearRect(0, 0, canvas.width, canvas.height);
    $('#winner').css('visibility', 'hidden');
    $('.playerturn').css('visibility', 'visible');
    $('.canvas2').css('visibility', 'hidden');
  })

const draw = function () {
  if ($('.square.X, .square.O').length === 9) {
    if(checkIfPlayerWon() === false);
    $('#winner').css('visibility', 'visible');
    $('#winner').text("It's a draw!")
    $('.playerturn').css('visibility', 'hidden');
  }
}
//------------------------------------------canvas stuff ----------------//

//this is to select the canvas
const canvas2 = document.querySelector('.canvas2');
canvas2.width  = 300;
canvas2.height = 300;
//indicates the canvas will be in 2d
const c2 = canvas2.getContext('2d');
//spawns the circle in a random x and y corodinate
var x = Math.random()*innerWidth;
var y = Math.random()*innerHeight;
//indicates velocity (how quick the circle should be going)
var dy = (Math.random() -0.5) * 8;
var dx = (Math.random() -0.5) * 8;
var radius = 30;
var circle = new Circle(100, 200, 3, 3, 30);

//this is an object indicated by the capital Circle
function Circle (x, y, dx, dy, radius) {
    this.x = x;
    this.y= y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
    c2.beginPath();
    //draws a circle
    c2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c2.strokeStyle = 'white';
    c2.stroke();
    //fills the circle black
    c2.fill();
    }

  this.update = function() {
    //making sure the radius bounces off sides - the radius so it doesnt go out og the window of the amount of radius
    //this makes sure it bounces off the sides of the screen
  if (this.y + radius  > innerHeight || this.y - this.radius < 0) {
    this.dy = -this.dy
    }

  if (this.x + this.radius  > innerWidth || this.y - this.radius < 0) {
    this.dx = -this.dx;
    }

    this.y += this.dy;
    this.x += this.dx;
    this.draw();
  }
}

//this creates 400 circles
var circleArray = [];

for (var i = 0; i < 400; i++) {
  var x = Math.random()* (innerWidth - radius * 2) + radius;
  var y = Math.random()* (innerHeight - radius * 2) + radius;;
  var dy = (Math.random() -0.5)*4;
  var dx = (Math.random() -0.5)*4;
  var radius = 12;
  circleArray.push(new Circle(x, y, dx, dy, radius))
}

  //this makes sure the circle is deleted upon refresh rate so we dont have trails
function animate() {
  requestAnimationFrame(animate);

  c2.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {;
    circleArray[i].update();
  }
}
animate();
