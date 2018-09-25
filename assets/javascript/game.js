//When game starts
//Random number between 19-120 to try to match is generated and written to div.randomNumber
//Wins and losses counters are both set to 0
//A different random number between 1-12 is generated and assigned to each of the 4 crystals
//total score is set to 0

$(document).ready(function () {
    var randNum = 0;
    var crystalValues = [];
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    function generateRandNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function checkScore(score, target) {
        if (score === target) {
            wins++;
            initializeGame();
        }
        if (score > target) {
            losses++;
            initializeGame();
        }
    }

    function crystalClicked(crystalValue) {
        return function () {
            console.log("Total Score: ", totalScore, crystalValue);
            totalScore += crystalValue;
            $(".total").text(totalScore);
            console.log(totalScore, randNum);
            checkScore(totalScore, randNum);
        };

    }

    function initializeGame() {
        randNum = generateRandNum(19, 120);
        $(".randomNumber").text(randNum);
        crystalValues = [generateRandNum(1, 12), generateRandNum(1, 12), generateRandNum(1, 12), generateRandNum(1, 12)];
        console.log(crystalValues);
        totalScore = 0;
        $(".win").text(wins);
        $(".loss").text(losses);
        $(".total").text(totalScore);
        for (var i = 0; i < 4; i++) {
            var crystalId = "#crystal" + (i + 1);
            var value = crystalValues[i];
            $(crystalId).off();
            $(crystalId).on("click", crystalClicked(value));
        }

    }









    initializeGame();
    //$(document).on("pagecontainerload", initializeGame());

    //clicking on each of the crystals should inrement totalScore by its value as long as totalScore is less than 39. If totalScore is less than 39, user is allowed to guess again,if totalScore is equal to 39 or greater its either a win or a loss, updates the win/loss count and starts game over


});