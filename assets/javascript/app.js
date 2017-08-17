alert("Click the butten when you are ready to start the quiz");
//amount of time left in game countdown
var count=60; 
//sets counter to run eery 1 second
var counter=setInterval(timer, 1000); 
//correct answer counter




//timer function to countdown
function timer(){
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     $("#timer").html("You are out of time!")
     return;
  }

  document.getElementById("timer").innerHTML=("You have "+ count + " secs remaining"); // watch for spelling

  // same line with jquery:
  // $("#timer").html("You have "+ count + " secs remaining");
}
//need to print something more than seconds remaining
// var correct=0;
// var wrong = 0;

// var selValue = $('input[name=questions]:checked').val();
// 	if(questions == null){
//            unanswered++;
//    }else if (questions ==right){
//    			correct++;
// 	}else(questions ==wrong){
// 			incorrect++;
// 	};
   
//         }

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











// var q1answer = $(“input[name=q1]:checked”).val();
//         if(q1answer == null){
//             alert(“You didn’t anwer question #1”);
//         }
//         else if(q1answer == "right"){
//             alert(“YOU WIN”);
//         } else {
//             alert(“NOPE, TRY AGAIN”);
//         };

// if (value=="wrong"){
// 	incorrect.innerHTML++;

// }else if (value=="right"){
// 	correct.innerHTML++;

// }else{
// 	unanswered.innerHTML++;

// };
//incorrect counter
// var incorrect=
//unanswered question counter
// var unanswered=


//Do code for showing the number of seconds here
  

  


