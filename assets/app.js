

var timeLeft = 30;

var elem = $("#timer");

console.log(elem);

var timerID;



function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerID);
        alert("You lose")

    } else {
        elem.text(timeLeft + ' seconds remaining');
        timeLeft--;
        console.log(timeLeft);
    }


}


function submitAnswers() {
    $('#test').addClass('hiddenText');
    $('#start').removeClass('hiddenText');
    elem.addClass('hiddenText');
    clearTimeout(timerID);
    var total = 6;
    var score = 0;
    $('.displayAnswers').removeClass('hiddenText');
    timeLeft = 30;
    console.log(score)
    
    
    // for (i = 1; i <= total; i++) {
        //     if (eval('q' + i) == null || eval('q' + i) == '') {
    //         alert("You missed question " + i);
    //         return false;
    //     }
    // }
    
    // Setting Correct Answers
    var answers = ['a', 'b', 'd', 'c', 'b', 'b']

    var userValue = [
        document.forms["quizForm"]["q1"].value,
        document.forms["quizForm"]["q2"].value,
        document.forms["quizForm"]["q3"].value,
        document.forms["quizForm"]["q4"].value,
        document.forms["quizForm"]["q5"].value,
        document.forms["quizForm"]["q6"].value,
    ]
    
    for (var i = 0; i < userValue.length; i++) {
        if (userValue[i] == answers[i]) {
            score++;
        }
    }
    
    $('.displayAnswers').text("You answered " + score + " correct");
    console.log(score);

}

$('#start').on("click", function () {
    timerID = setInterval(countdown, 1000);
    $('#test').removeClass('hiddenText');
    $('#start').addClass('hiddenText');
    $('#quizForm').trigger('reset');
    elem.removeClass('hiddenText');
    $('.displayAnswers').addClass('hiddenText');

})


$('.submit').on("click", function (event) {
    event.preventDefault();
    console.log("hello");
    submitAnswers();

});

