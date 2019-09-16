// referenced the variables using document.getByID so it displays on the UI
var directionsText = document.getElementById("directionsText");
var totalWins = document.getElementById("totalWins)";
var currentWord = document.getElementById("currentWord");
var remainingGuesses = document.getElementById("guessCounter");
var wrongLetters = document.getElementById("usedLetters");
var spaces = document.getElementById("spaces");
// ------------------------------------------------------------------------
// all variables - below
var secretWord = "";
var guessedWord = [];
var guessCounter = 0;
var usedLetters = [];
var winCounter = 0;
// ------------------------------------------------------------------------
// var wordsList based on theme chosen - "baby shark song(s)"
var sharkList = ["baby", "daddy", "mommy", "doggy", "grandma", "grandpa", "cousin", "disco", "santa"];
// ------------------------------------------------------------------------
// updated code:

// Game start
window.onkeypress = function initializeGame (event) {
    console.log("guessCounter is " + guessCounter)
};

if (secretWord === "") {
    // initializes secret word
    secretWord = sharkList[Math.floor(math.random() * sharkList.length)];
    guessCounter = secretWord.length + 2;
    console.log(guessCounter);
    directionsText.style.display = ("none");
    // prints secret word to console:
    console.log(secretWord);
    // create guessed word variable; gets underscore for each letter in the secret word.
    for ( var i = 0; i < secretWord.length; i++){
        if (secretWord[i] === " ") {
            guessedWord.push("&nbsp;");
        }
        else {
            guessedWord.push("_");
        }
    }
// ----------------------------------------------------------------------------------------
// borrowed classmate's code (start):
    else {
                
        // decrements guess counter if the chosen letter does not exist 
        if (!usedLetters.includes(String.fromCharCode (event.CharCode)) && (!guessedWord.includes(String.fromCharCode (event.CharCode))))
            guessCounter--;
    }
        console.log('guessCounter is ' + guessCounter);
        // logs string to console for checking:
        console.log(String.fromCharCode(event.CharCode));

        // check if secret word or used letters
        if (!secretWord.includes(String.fromCharCode(event.CharCode)) && (!usedLetters.includes(String.fromCharCode(event.CharCode)))){
            usedLetters.push(String.fromCharCode(event.CharCode));
        }
        for (var i=0; i<secretWord.length; i++){
        // displays letter in secret word
        if(secretWord[i] === String.fromCharCode(event.CharCode)){
            guessedWord[i] = String.fromCharCode(event.CharCode);
        }
    }
    // win or lose scenarios 
        console.log(secretWord);
        console.log(guessedWord);
    // if the secret word is filled in completely
    if (!guessedWord.includes("_")){
        // displays an alert & write to console
        alert("You're right! The secret word was " + secretWord);
        console.log("User guessed correctly");
        // increments win counter by 1, & logs to console
        winCounter++;
        console.log("Total Wins " + winCounter);
        usedLetters = [ ];
        secretWord = "";
        guessedWord = [ ];
        console.log(guessCounter, guessedWord, usedLetters, secretWord);
        initializeGame();
}
else if (guessCounter === 0){
    alert("Sorry! You ran out of guesses.  The secret word was " + secretWord);
    console.log("User ran out of turns");
    usedLetters = [];
    secretWord = "";
    guessedWord = [];
    console.log(guessCounter, guessedWord, usedLetters, secretWord);
    initializeGame();
}
// borrowed classmate's code (end)
// ----------------------------------------------------------------------------------------
currentWord.innerHTML = guessedWord.join(" ");
remainingGuesses.innerHTML = guessCounter;
wrongLetters.innerHTML = usedLetters;
totalWins.innerHTML = winCounter;
}