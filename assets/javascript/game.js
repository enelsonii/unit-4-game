var targetNumber;
var loss; 
var win;

// random number from  19- 120
targetNumber = Math.floor(Math.random() * 101) +19;
// console.log(targetNumber);

// display the "target number" on html
$("#targetNumber").html('Target Number: ' + targetNumber);

// create for loop for each crystal box and create a div for each crystal.
// for loop to make random number 1-12 in 4 times
for (var i = 0; i < 4; i++) {

    // random number up to 12
     var random = Math.floor(Math.random() * 11) +1;
    // console.log(random);
    
    // crystal div for iamge to be placed in 
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "random-number": random
        });

    $(".crystals").append(crystal);
}

$(".crystal").on("click", function() {
    console.log($(this).attr("random-number")); 
});