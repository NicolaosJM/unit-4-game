var userWins = 0;
var userLosses = 0;
var userTotal;
var greenValue;
var yellowValue;
var blueValue;
var redValue;
var computerNum; 

$(document).ready(function () {
    function startGame() {
        userTotal = 0;
        computerNum = [Math.floor(Math.random() * 102) + 19];

        // console.log(computerNum);
        redValue = [Math.floor(Math.random() * 12) + 1];
        blueValue = [Math.floor(Math.random() * 12) + 1];
        yellowValue = [Math.floor(Math.random() * 12) + 1];
        greenValue = [Math.floor(Math.random() * 12) + 1];
        $("#computerNumber").html(computerNum);
        // document.getElementById("computerNumber").innerHTML = computerNum;
        $("#userTotalNum").html(userTotal);

    }

    function crystalButtonValueIncrease() {
        // console.log(userTotal, computerTotal)
        if (userTotal == computerNum) {
            userWins++;
            $("#userTotalNum").html(userTotal);
            $("#winsHtml").html(userWins);
            startGame();

        } else if (userTotal > computerNum) {
            userLosses++;
            $("#userTotalNum").html(userTotal);
            $("#losses").html(userLosses);
            startGame();

        } else {
            $("#userTotalNum").html(userTotal);

        }
    }


    $("#redCrystalButton").on("click", function () {
        console.log(userTotal);
        userTotal += parseInt(redValue);
        console.log(userTotal);
        crystalButtonValueIncrease();

    })
    $("#blueCrystalButton").on("click", function () {
        userTotal += parseInt(blueValue);
        crystalButtonValueIncrease();
    })
    $("#greenCrystalButton").on("click", function () {
        userTotal += parseInt(greenValue);
        crystalButtonValueIncrease();
    })
    $("#yellowCrystalButton").on("click", function () {
        userTotal += parseInt(yellowValue);
        crystalButtonValueIncrease();
    })
    startGame();
})
