// global variables
//======================
//array of word options
var wordsList = [
    'baby',
    'daddy',
    'mommy',
    'doggy',
    'grandma',
    'grandpa',
    'cousin',
    'disco',
    'santa',
];
//solution stored here
var chosenWord = '';

var lettersInChosenWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

//game counter
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

//game functions
function startGame() {
    //resets guesses back to 0
    numGuesses = 9;
    // solution is chosen randomly from wordlist
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    //word is broken into individual letters
    lettersInChosenWord = chosenWord.split('');
    //count the number of letters in the word
    numBlanks = lettersInChosenWord.length;
    //print to console
    console.log(chosenWord);

    // resets the guess and success array at each round
    blanksAndSuccesses = [];
    // resets the wrong guesses from the previous round
    wrongGuesses = [];
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push('_');
    }
    console.log(blanksAndSuccesses);

    //reprints guessesLeft to 9
    document.getElementById('guesses-left').innerHTML = numGuesses;
    //prints the blanks at the begging of each round in the HTML
    document.getElementById('words-blank').innerHTML = blanksAndSuccesses.join(
        ' ',
    );
    //clears the wrong guesses from previous round
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(' ');
}

function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
            if (chosenWord[j] === letter) {
                blanksAndSuccesses[j] = letter;
            }
        }
        console.log(blanksAndSuccesses);
    } else {
        wrongGuesses.push(letter);
        numGuesses--;
    }
}
//round complete
function roundComplete() {
    console.log(
        'WinCount: ' +
            winCounter +
            ' | LossCount: ' +
            lossCounter +
            ' | NumGuesses: ' +
            numGuesses,
    );
    // updates html to reflect new # of guesses; also update the correct guesses
    document.getElementById('guesses-left').innerHTML = numGuesses;
    //print array of guesses and blanks on page
    document.getElementById('word-blanks').innerHTML = blanksAndSuccesses.join(
        ' ',
    );
    //prints wrong guesses on page
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(' ');

    //if user has gotten all the letters to match the solution
    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
        //adds to win counter, and prompts user with win alert
        winCounter++;
        alert('You Win');
        //update the win counter in html & restarts the game
        document.getElementById('win-counter').innerHTML = winCounter;
        startGame();
    }
    //if user runs out of guesses
    else if (numGuesses === 0) {
        //adds to loss counter
        lossCounter++;
        //gives the user an alert
        alert('You lose');
        //update the loss counter in the html
        document.getElementById('loss-counter').innerHTML = lossCounter;
        //restart game
        startGame();
    }
}

//main process - code that controls what is actually run

//starts game
startGame();
//initiates function for capturing clicks
document.onkeyup = function(event) {
    //check if the key pressed is a letter
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        //converts all key clicks to lower case
        var letterGuessed = event.key.toLowerCase();
        //runs code to check for correctness
        checkLetters(letterGuessed);
        //runs code after each round is done
        roundComplete();
    }
};
