<script type="text/javascript">
    var sharkType = ["baby", "daddy", "mommy", "doggy", "grandma", "grandpa"];
    var gameAnswer = "";
        sharkType = gameAnswer
    document.onkeyup = function() {
        var userGuess = String.fromCharCode(event.keyCode);
            toLowerCase();
        console.log(userGuess)

        var maxGuess = numArr[0];
            for (var i = 1; i < numArr.length; i++) {
                if (numArr[i] > maxGuess) {
                    maxGuess = numArr[i];
                }
            }

            return maxGuess;
        };

        var gameAnswer = sharkType [1, 2, 3];
        console.log(findMax(gameAnswer));

    
</script>