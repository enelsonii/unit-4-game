var targetNumber;
var lost = 0;
var win = 0;
var originalNumber = 0;


// start the game
var resetAndStart = function () {
    // emptry crystal value to get new number each round and prevents doubles
    $(".crystals").empty();
    var images = [
        "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/19/Crystal_rare.png/revision/latest?cb=20151122000058",
        "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/6/6a/Free_Crystal.png/revision/latest?cb=20151121235051",
        "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/8/8d/Daily_Crystal.png/revision/latest?cb=20150825213624",
        "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/c3/Crystal_iso8.png/revision/latest?cb=20151121235324",
    ];
    // random number from  19- 120
    targetNumber = Math.floor(Math.random() * 101) + 19;
    // console.log(targetNumber);

    // display the "target number" on html
    $("#targetNumber").html('Target Number: ' + targetNumber);

    // create for loop for each crystal box and create a div for each crystal.
    // for loop to make random number 1-12 in 4 times
    for (var i = 0; i < 4; i++) {

        // random number up to 12
        var random = Math.floor(Math.random() * 11) + 1;
        // console.log(random);

        // crystal div for iamge to be placed in 
        var crystal = $("<div>");
        // assign crystals a value with random hw
        crystal.attr({
            "class": 'crystal',
            "random-number": random
        });
        crystal.css({
            "background-images": "url('" + images[i] + ")'",
            "background":"#d0aebc",
            "backgournd-size":"cover"
            
        });
        $(".crystals").append(crystal);
    }
    $("#originalNumber").html("Number Count: " + originalNumber);
}

resetAndStart();
var reset = function () {

}

// when clicking one of the four crystals, should add the previous result      
$(document).on("click", ".crystal", function () {

    var num = parseInt($(this).attr("random-number"));
    // able add results together to get tagert number
    originalNumber += num;

    $("#originalNumber").html("Number Count: " + originalNumber);
    console.log(originalNumber);

    // if user user score goes above ta rget number, you lose 
    if (originalNumber > targetNumber) {
        //console, console.log("you lose");

        lost++;

        $("#lost").html("Loss: " + lost);

        $("#originalNumber").html("Number Count: " + originalNumber);

        originalNumber = 0;

        resetAndStart();
    }
    // if user score equals target number, you wim
    else if (originalNumber === targetNumber) {
        // console.log("you win")

        win++;

        $("#win").html("Win: " + win);

        $("#originalNumber").html("Number Count: " + originalNumber);

        originalNumber = 0;

        resetAndStart();
    }
    targetNumber.css({
        "backgroud":"#f6f4f",
    });

    // console.log(originalNumber);
});