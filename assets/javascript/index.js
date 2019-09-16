/ 1. [Watch the demo](https://youtu.be/W-IJcC4tYFI).
        // completed. 
// 2. Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
        // baby shark theme 
// 3. Use key events to listen for the letters that your players will type.

// 4. Display the following on the page:

// 5. Press any key to get started!

// 6. Wins: (# of times user guessed the word correctly).

//    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
// **text shared from classmate on slack**
var underscores = [];
var letterCount = function (word) {
    for (i = 0; i < word.length; i++) {
        underscores[i] = "_";
    }
    document.querySelector('.word').innerHTML = underscores.join("");
}

//    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.
letterCount(word); 
var wrongGuess = [];
// 7. Number of Guesses Remaining: (# of guesses remaining for the user).
var chancesLeft = word.length + 3;
document.querySelector('.num-chances').innerHTML = chancesLeft;
document.onkeyup = function (guess) {
    if (chancesLeft > 0) {
        if (!guess.key.toUpperCase().match(/^[A-Za-z]$/)) {
            return;
        }
        var found = false;
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess.key.toUpperCase()) {
                found = true;
                underscores[j] = guess.key.toUpperCase();
                document.querySelector('.word').innerHTML = underscores.join("");
            }
        }
// 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

// 9. After the user wins/loses the game should automatically choose another word and make the user play it.


        var gameAnswer = "";
        var sharkType = ["baby", "daddy", "mommy", "doggy", "grandma", "grandpa", "cousin", "disco", "santa"]; {
            userGuess: funciton() {
                document.write(userGuess);
            }

        }
            sharkType = gameAnswer
        var wins = 0;
        var losses = 0;
        var ties = 0;
        document.onkeyup = function() {
            var userGuess = String.fromCharCode(event.keyCode);
                toLowerCase();
            console.log(userGuess);
            for (let i = userGuess; i < 6; i++);{
                console.log(i+1);
            }

            if (userGuess===[sharkType] ) {
                return "";

            }
            if (userGuess === gameAnswer ) {
                wins++
                return ("Wins:" + wins);
            }





            // var maxGuess = numArr[0];
            //     for (var i = 1; i < numArr.length; i++) {
            //         if (numArr[i] > maxGuess) {
            //             maxGuess = numArr[i];
            //         }
            //     }

            //     return maxGuess;
            // };

            // var gameAnswer = sharkType [1, 2, 3];
            // console.log(findMax(gameAnswer));