
var score=0

function check(){
  var x=$("#inputToDO").val()
 
 if (x=="4"){
   alert("Corect Answer");
 }else alert("No Try Again.");
}
function check2(){
  var x=$("#inputToDO").val()
 if (x==="green"){
   alert("Corect Answer");
 }else alert("No Try Again.");
}


function checkAnswer(quizForm, theAnswer,urlRight, urlWrong){

  var s = "?";
  for(var i = 0;i<quizForm.elements.length;i++){
    if(("cc" == quizForm.elements[i].name) && (quizForm.elements[i].checked)){
      s = quizForm.elements[i].value;
    }
  }

  if("?" == s)
  {
    alert("Please make a selection.");
    return false;
  }

  if(s == theAnswer)
  {
    alert("'"+s+"' is correct!");
    if(urlRight)
    {
    document.location.href = urlRight;
    }
  }
  else
  {
    alert("'"+s+"' is incorrect.");
    if( urlWrong )
    {
    document.location.href = urlWrong;
    }
  }
  return false;
}


function hide(){
  $('#img2').hide("slow")
  
}
