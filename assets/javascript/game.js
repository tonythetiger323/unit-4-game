//When game starts
//Random number between 19-120 to try to match is generated and written to div.randomNumber
//Wins and losses counters are both set to 0
//A different random number between 1-12 is generated and assigned to each of the 4 crystals
//total score is set to 0

$(document).ready(function () {
    function generateRanNum() {
        var num = Math.floor(Math.random() * 102) + 19;
        return num;
    }
    function generateCrystalNum() {
        var crystalNum = Math.floor(Math.random() * 12) + 1;
        return crystalNum;
    }
    function initializeGame() {
        var ranNum = generateRanNum();
        $(".randomNumber").text(ranNum);
        var crystal1 = generateCrystalNum();
        var crystal2 = generateCrystalNum();
        var crystal3 = generateCrystalNum();
        var crystal4 = generateCrystalNum();
        var wins = 0;
        $(".win").text(wins);
        var losses = 0;
        $(".loss").text(losses);
        var totalScore = 0;
        $(".total").text(totalScore)
    }

    $(document).on("pagecontainerload", initializeGame());
})