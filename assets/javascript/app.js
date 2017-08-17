alert("Click the butten when you are ready to start the quiz");
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});
//amount of time left in game countdown


var count=60; 
//sets counter to run eery 1 second
var counter=setInterval(timer, 1000); 
//timer function to countdown
function timer(){
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     $("#timer").html("You are out of time!")
     return;
  }
      $("#timer").html("You have "+ count + " secs remaining");
};


function finalScore(){//begin function

  //initialize the correct variable
  var correct = 0;
  var incorrect = 0;
  var selectValue;

  //store the collection of elements with the class name question
  var questions = document.getElementsByClassName("question");

  //the number of questions(elements with a class name of question)
  var numOfQuestions = questions.length;

//loop through the collection of elements with a question class
for(var i = 0; i < questions.length; i++ ){//begin for loop

 //get the value of the select element
 selectValue = questions[i].options[questions[i].selectedIndex].value;

  //if the value equals right
  if(selectValue === "right"){//begin if then
    //increment the correct variable
    correct++;
console.log(correct);
  }else

  (selectValue ==="wrong")
    incorrect++;
console.log(incorrect);
  }//end if then

}//end for loop











// pseudo code
// 	if q1=right correct++
// 	else if q1=wrong, wrong++
// 		else 

// 			repeat above for each question

// 		OR

// 		count all value = correct
// 		count all value = wrong
// 		and count allvalue = null
// if counter = 6 answers no unanswered if not 6-answered=unanswered


// 