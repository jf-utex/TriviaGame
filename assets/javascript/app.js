alert("linked");
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
     //counter ended, do something here
     return;
};
//need to print something more than seconds remaining
var correct=0;

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
  document.getElementById("timer").innerHTML=("You have "+ count + " secs remaining"); // watch for spelling
}


