# TIC TAC TOE
## By William Rudder

### HTML
To begin the project, I started off creating 9 divs which would represent the 3x3 grids of my tic tac toe game.


### Javascript

##### Adding a class on click:
I started with a click event in which
 when i clicked on a grid, a class of 'X' or 'O' would be placed into the square div selected. To begin with, both classes were being allocated to each square

```javascript
$('.square').on('click', function(event){
  var $squareSelected = $(this);
  var $addclass = $(this).addClass('X');
  var $addclass = $(this).addClass('O');
}
```
##### Introducing Player turns:
So, I introduced a If statement which defined who's turn it was with a number.

```javascript
let player = 1;

$('.square').on('click', function(event){
  var $squareSelected = $(this);
  if(player === 1) {

  var $addclass = $(this).addClass('X');
}
```

after a turn was made, a +1 is added to the player to indicate now it is player 2's turn (player++).

```javascript
let player = 1;
$('.square').on('click', function(event){
var $addclass = $(this).addClass('X');
var changeturn = player++;
}
```

For player 2's turn, I simply repeated the same process but the class added was 'O'. The player turn was then returned to player 1 once this was executed.
```javascript
else if (player === 2) {
  var $addclass = $(this).addClass('O');
}
player = 1
}
```
##### Preventing a second class from being added to a grid:
Next, a problem arose where if i clicked on the same grid again it would be asigned another class. to overcome this, i introduced  hasClass to the beginning of the function... indicating if the grid has a class, another can't be added.

```javascript
$('.square').on('click', function(event){
    //this line will prevenet another line from being selected
  var $squareSelected = $(this);
  if ($squareSelected.hasClass('X')) {
      return false;
} else if ($squareSelected.hasClass('O')) {
    return false;
};
```
So... i had player turns and adding a class working now working how i wanted... next i just needed to make sure the user was aware of who's turn it was. This was relatively simple, I just manipulated the DOM to indicate when the turn changes.

```javascript
const changeTurnHTML = function () {
  if (player % 2) {
    $('#whosturn').text('O');
  } else {
    $('#whosturn').text('X');
  }
};
```

#### Checking for wins!:
next was to create the all intimidating function to check if a player has won.

To do this, i found a list of winning sequences on google (thanks google) and assigned different ID's to each of them.

``` html
<div class="square sq0"></div>
<div class="square sq1"></div>
<div class="square sq2"></div>
<div class="square sq3"></div>
<div class="square sq4"></div>
<div class="square sq5"></div>
<div class="square sq6"></div>
<div class="square sq7"></div>
<div class="square sq8"></div>
```
From here, all i really had to do was create a function that indicated if any of the winning sequences contained the same class ('X' or 'O'). Here's how it looked:

```javascript
const checkIfPlayerWon = function (classType) {


if ($('.sq0').hasClass(classType) && $('.sq1').hasClass(classType) && $('.sq2').hasClass(classType)) {
  return true;
```
Here's one of the winning sequences.

the ClassType argument within the function is just asking what clas has been assigned to this div.

All i had to do now is chuck this function in the turn statement i previously talked about... this function is run when the winning numbers match the function true!

```javascript
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
```

#### Playing around with jCanvas:
Next, I had a play around with jcanvas and found a way to implement a line that goes through the winning sequences.

In doing this, I ran into quite a few problems with the canvas not allowing me to click on the grid elements. After looking around I found an easy fix

``` css
canvas {
  position: absolute;
  width: 450px;
  height: 430px;
  pointer-events: none;
}
```
They key here was pointer-events: none. this allowed me to click through the canvas. Life saver!


Next was to implement canvas code into my tictactoe game. This was a little time tedius as i had to find the absolute pixel positions of winning grids and draw a line through them.
```javascript
const checkIfPlayerWon = function (classType) {

if ($('.sq0').hasClass(classType) && $('.sq1').hasClass(classType) && $('.sq2').hasClass(classType)) {
    c.beginPath();
    c.moveTo(0, 25);
    c.lineTo(300, 25);
    c.strokeStyle = "black";
    c.stroke();
return true;
```
 After this, I wanted to have a reset button that cleared all the classes of the cells as well as the canvas line. This was pretty straight forward:

 ```javascript
 $('.reset').on('click', function () {
   $('.square').removeClass('X');
   $('.square').removeClass('O');
   c.clearRect(0, 0, canvas.width, canvas.height);
 })

 ```
Lastly, I wanted to to have some sort of winning animation effect. This was quite difficult to begin with and only managed to get one for the 'O' player win. It's not the best animation I've ever seen but It's working (to a degree (pun intended)).


```javascript
var x = Math.random()*innerWidth;
var y = Math.random()*innerHeight;
var dy = (Math.random() -0.5) * 8;
var dx = (Math.random() -0.5) * 8;
var radius = 30;
var circle = new Circle(100, 200, 3, 3, 30);

function Circle (x, y, dx, dy, radius) {
    this.x = x;
    this.y= y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
    c2.beginPath();
    c2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c2.strokeStyle = 'white';
    c2.stroke();
    c2.fill();
    }

  this.update = function() {
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

var circleArray = [];

for (var i = 0; i < 400; i++) {
  var x = Math.random()* (innerWidth - radius * 2) + radius;
  var y = Math.random()* (innerHeight - radius * 2) + radius;;
  var dy = (Math.random() -0.5);
  var dx = (Math.random() -0.5);
  var radius = 12;
  circleArray.push(new Circle(x, y, dx, dy, radius))
}


function animate() {
  requestAnimationFrame(animate);
  c2.clearRect(0, 0, innerWidth, innerHeight);
for (var i = 0; i < circleArray.length; i++) {;
circleArray[i].update();
  }
}
animate();


```
I had trouble fitting this to the whole web page because of prior css styling. The easiest thing I could do instead was just put it in the container section.
