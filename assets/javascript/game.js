//When game starts
//Random number between 19-120 to try to match is generated and written to div.randomNumber
//Wins and losses counters are both set to 0
//A different random number between 1-12 is generated and assigned to each of the 4 crystals
//total score is set to 0

$(document).ready(function () {
    var ranNum;
    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;
    var wins = 0;
    var losses = 0;
    var totalScore;

    function generateRanNum() {
        var num = Math.floor(Math.random() * 102) + 19;
        return num;
    }
    function generateCrystalNum() {
        var crystalNum = Math.floor(Math.random() * 12) + 1;
        return crystalNum;
    }

    function initializeGame() {
        ranNum = generateRanNum();
        $(".randomNumber").text(ranNum);
        crystal1 = generateCrystalNum();
        crystal2 = generateCrystalNum();
        crystal3 = generateCrystalNum();
        crystal4 = generateCrystalNum();
        totalScore = 0;
        console.log(crystal1, crystal2, crystal3, crystal4);
        $(".win").text(wins);
        $(".loss").text(losses);
        $(".total").text(totalScore);
    }

    $("#crystal1").on("click", function () {
        totalScore += crystal1;
        console.log("Total Score: ", totalScore);
        $(".total").text(totalScore);
        if (totalScore === ranNum) {
            wins++;
            initializeGame();
        }
        if (totalScore > ranNum) {
            losses++;
            initializeGame();
        }
    });

    $("#crystal2").on("click", function () {
        totalScore += crystal2;
        console.log("Total Score: ", totalScore);
        $(".total").text(totalScore);
        if (totalScore === ranNum) {
            wins++;
            initializeGame();
        }
        if (totalScore > ranNum) {
            losses++;
            initializeGame();
        }
    });

    $("#crystal3").on("click", function () {
        totalScore += crystal3;
        console.log("Total Score: ", totalScore);
        $(".total").text(totalScore);
        if (totalScore === ranNum) {
            wins++;
            initializeGame();
        }
        if (totalScore > ranNum) {
            losses++;
            initializeGame();
        }
    });

    $("#crystal4").on("click", function () {
        totalScore += crystal4;
        console.log("Total Score: ", totalScore);
        $(".total").text(totalScore);
        if (totalScore === ranNum) {
            wins++;
            initializeGame();
        }
        if (totalScore > ranNum) {
            losses++;
            initializeGame();
        }
    });







    $(document).on("pagecontainerload", initializeGame());

    //clicking on each of the crystals should inrement totalScore by its value as long as totalScore is less than 39. If totalScore is less than 39, user is allowed to guess again,if totalScore is equal to 39 or greater its either a win or a loss, updates the win/loss count and starts game over


});