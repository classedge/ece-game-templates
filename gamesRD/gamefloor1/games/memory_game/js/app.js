// Create a NodeList of all cards.

const cards = document.body.querySelectorAll('.card');
console.log('​cards', cards);


// Shuffle cards and load them to the deck.

/*
 * Convert the `cards` NodeList to an array and store as a new variable.
 */
let cardsArray = Array.from(cards);

/*
 * Shuffle function from http://stackoverflow.com/a/2450976, posted by 
 * "CoolAJ86," who cites the original post by Ashley Pond V. of a JavaScript
 * version of the Fisher-Yates shuffle -- a.k.a. the Knuth shuffle -- at 
 * http://sedition.com/perl/javascript-fy.html. Pond notes an edit made to the 
 * function per feedback from David Sletten.
 */
function shuffle(array) {
   var currentIndex = array.length, temporaryValue, randomIndex;
   while (currentIndex !== 0) {
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;
       temporaryValue = array[currentIndex];
       array[currentIndex] = array[randomIndex];
       array[randomIndex] = temporaryValue;
   }
   return array;
}

/*
 * Run the array of cards through the shuffle function.
 */
shuffle(cardsArray);

/*
 * Add each card in the shuffled array to the deck.
 */
cardsArray.forEach(function(x) {
  document.body.querySelector('.deck').appendChild(x);
});

/*
 * Set deck height equal to deck width. Size ratio of cards will follow suite.
 * Relevant on smaller screen sizes smaller than 700px where `deckWidth` is
 * relative to window size.
 * Method inpsired by post at https://stackoverflow.com/questions/5445491/height-equal-to-dynamic-width-css-fluid-layout
 * by user "Hussein".
 */
 let deck = document.body.querySelector('.deck');
 let deckWidth = deck.clientWidth;

 function setDeckHeight() {
   deck.style.height = deckWidth + "px";
 }

 setDeckHeight();

 window.addEventListener('resize', function() {
   const newDW = document.body.querySelector('.deck').clientWidth;
   deck.style.height = newDW + "px";
 });


// Popover

const popoverClose = document.body.querySelectorAll('.popover-close');
const popover = document.body.querySelectorAll('.popover');
const completionPopoverClose = document.body.querySelector('#completion-popover-close');

/*
 * Code designed to handle possiblity of multiple popovers on page.
 */
popoverClose.forEach(function(x) {
  x.addEventListener('click', function () {
  popover.forEach(function(x) {
    x.style.display = 'none';
  });
  if (x.id = "completion-popover-close") {
    location.reload();
  };
  });
});

/* For popover displayed on game completion, refresh page if user
 * selects to play again.
 */
document.querySelector("#play-again-button").addEventListener('click', function () {
  location.reload();
});


// Timer

/* Timer code -- that found here and the related clearTimeout() method found in the 
 * "Game Functionality" section -- inspired by post "How to Create Stopwatch in JavaScript" 
 * by John Zenith: https://www.ostraining.com/blog/coding/stopwatch/.
 */
let timer;
let secs = [0, 0];
let mins = 0;
let timerIsNotRunning = 1;
let gameOver = 0;

/*
 * Function to deploy inside of the setInterval method below.
 */
function timerFunction () {
  const oneSecsDisplay = document.body.querySelector('#one-secs');
  const tenSecsDisplay = document.body.querySelector('#ten-secs');
  const minsDisplay = document.body.querySelector('#mins');
  secs[1]++;
  oneSecsDisplay.innerHTML = secs[1];
  if (secs[0] != 5 && secs[1] == 9) {
    secs[1] = -1;
    return secs[1];
  };
  if (secs[0] != 5 && secs[1] == 0) {
    secs[0]++;
    tenSecsDisplay.innerHTML = secs[0];
  };
  if (secs[0] == 5 && secs[1] == 9) {
    secs[0] = -1;
    secs[1] = -1;
    return secs;
  };
  if (secs[0] == 0 && secs[1] == 0) {
    mins++;
    minsDisplay.innerHTML = mins;
  };
}

/*
 * Function to execute when first card is clicked --
 * `if` statement used to prevent code from executing multiple times consecutively.
 */
function startTimer() {
  if (timerIsNotRunning == 1) {
  timer = setInterval(timerFunction, 1000);
  }
};


// Game Functionality

/*
 * Declare array to hold currently selected card or cards, which will have class "open."
 */
let isOpen = [];
let cardTheme;

/*
 * Get element displaying number of moves and store as variable.
 */
const moveCounter = document.body.querySelector('.moves');

/*
 * Code to run when a card is clicked.
 * The use event delegation here inspired by the suggestion made by fellow Udacity student 
 * Matthew Cranford in the post https://matthewcranford.com/memory-game-walkthrough-part-2-toggling-cards/.
 */
 document.body.querySelector('.deck').addEventListener('click', function(event) {
   console.log('​event.target.className', event.target.className);
   if (event.target.className == "card") {
    startTimer();
    timerIsNotRunning = 0;
    console.log('​timerIsNotRunning', timerIsNotRunning);
    event.target.classList.add('open', 'show');
    cardTheme = event.target.querySelector('i');
    isOpen.push(cardTheme);
    if (isOpen.length === 2 && isOpen[0].className == isOpen[1].className) {
      const matchedOpen = document.body.querySelectorAll('.open');
      matchedOpen.forEach(function(x) {
        x.classList.add('match');
        x.classList.remove('open', 'show');
        console.log('​x', x);
      });
      isOpen = [];
    };
    if (isOpen.length === 2 && isOpen[0].className != isOpen[1].className) {
      const noMatchOpen = document.body.querySelectorAll('.open');
      setTimeout(function() {
        noMatchOpen.forEach(function(x) {
          x.classList.remove('open', 'show');
          });
        }, 333
      );
      isOpen = [];
    };
    /*
     * Each time a card is clicked, increment move counter. When specified
     * move-count numbers are reached, change number of stars displayed.
     */
    const numMoves = moveCounter.innerHTML;
    if (numMoves == 26) {
      // Code to remove first child adpated from https://stackoverflow.com/questions/14294518/remove-first-child-in-javascript
      document.body.querySelector('.stars').removeChild(
        document.body.querySelector('.stars').children[0]
      );
    };
    if (numMoves == 32) {
      document.body.querySelector('.stars').removeChild(
        document.body.querySelector('.stars').children[0]
      );
    };
    if (numMoves == 38) {
      document.body.querySelector('.stars').removeChild(
        document.body.querySelector('.stars').children[0]
      );
    };
    if (numMoves == 43) {
      document.body.querySelector('.stars').removeChild(
        document.body.querySelector('.stars').children[0]
      );
    };
    moveCounter.innerHTML = parseInt(numMoves) + 1;
    /*
     * If all cards are matched, edit popover messages in accordance with results,
     * and display popover.
     */
    if (document.querySelectorAll('.match').length == cardsArray.length) {
      clearInterval(timer);
      document.body.querySelector('#num-moves-text').innerHTML = "It took you " + moveCounter.innerHTML + " moves to match all the cards.";
      document.body.querySelector('#mins-text').innerHTML = document.body.querySelector('#mins').innerHTML;
      document.body.querySelector('#tenSecs-text').innerHTML = document.body.querySelector('#ten-secs').innerHTML;
      document.body.querySelector('#oneSecs-text').innerHTML = document.body.querySelector('#one-secs').innerHTML;
      document.body.querySelector('#star-level-text').innerHTML = "Star Level: "  + document.body.querySelector('.stars').children.length + " out of 5."
      document.body.querySelector('#completion-popover').style.display = 'block';
    };
    return timerIsNotRunning;
  };
 });



// In-page refresh button

const refreshIcon = document.body.querySelector('.restart');
refreshIcon.addEventListener('click', function () {
  location.reload();
});
