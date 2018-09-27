$(document).ready(function () {
    var randNum = 0;
    var crystalValues = [];
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var myMusic;

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
        totalScore += crystalValue;
        $(".total").text(totalScore);
        checkScore(totalScore, randNum);
    }
    function handleCrystalButtonClick(crystalId, crystalValue) {
        $(crystalId).off();
        $(crystalId).on("click", function (e) { crystalClicked(crystalValue); });
    }
    function initializeGame() {
        myMusic = new sound("../audio/IndianaJonesTheme.mp3");
        myMusic.play();
        randNum = generateRandNum(19, 120);
        $(".randomNumber").text(randNum);
        crystalValues = [generateRandNum(1, 12), generateRandNum(1, 12), generateRandNum(1, 12), generateRandNum(1, 12)];
        totalScore = 0;
        $(".win").text(wins);
        $(".loss").text(losses);
        $(".total").text(totalScore);

        handleCrystalButtonClick("#crystal1", crystalValues[0]);
        handleCrystalButtonClick("#crystal2", crystalValues[1]);
        handleCrystalButtonClick("#crystal3", crystalValues[2]);
        handleCrystalButtonClick("#crystal4", crystalValues[3]);
    }

    initializeGame();
});