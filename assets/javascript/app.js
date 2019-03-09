window.onload = function() {
  $("#start").on("click", start);
  $("#done").on("click", stop);
  $("#reload").on("click", reload);
};

var number = 40;
var intervalId;
var isRunning = false;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;

function start() {
  if(!isRunning) {
    intervalId = setInterval(decrement, 1000);
    isRunning = true;
    unanswered = 0;
    number = 40;

  }
}

function gradeQuiz() {
  var firstAnswer = document.forms.wholeQuiz.firstRow.value;
  var secondAnswer = document.forms.wholeQuiz.secondRow.value;
  var thirdAnswer = document.forms.wholeQuiz.thirdRow.value;
  var fourthAnswer = document.forms.wholeQuiz.fourthRow.value;

  if(firstAnswer=="ansA"){correctAnswer = correctAnswer + 1
  }
  else if(firstAnswer == ""){unanswered = unanswered + 1
  }
  else{incorrectAnswer = incorrectAnswer + 1};


  if(secondAnswer=="ansB"){correctAnswer = correctAnswer + 1
  }
  else if(secondAnswer == ""){unanswered = unanswered + 1
  }
  else{incorrectAnswer = incorrectAnswer + 1};


  if(thirdAnswer=="ansD"){correctAnswer = correctAnswer + 1
  }
  else if(thirdAnswer == ""){unanswered = unanswered + 1
  }
  else{incorrectAnswer = incorrectAnswer + 1};

  if(fourthAnswer=="ansC"){correctAnswer = correctAnswer + 1
  }
  else if(fourthAnswer == ""){unanswered = unanswered + 1
  }
  else{incorrectAnswer = incorrectAnswer + 1};

  $("#correct").text(correctAnswer);
  $("#wrong").text(incorrectAnswer);
  $("#blank").text(unanswered);
}

function decrement() {

  number--;

  $("#show-number").html("<span>" + number + "</span>");

  if (number === 0) {

    number = 40;
    document.getElementById("resultsPage").style.display="block";
    document.getElementById("div1").style.display="none";
    document.getElementById("startDiv").style.display="block";

    stop();

    

    
  }
}

function stop() {
  if(isRunning){
    isRunning = false;
    number = 40;
    clearInterval(intervalId);
    gradeQuiz()

  }
}

function reload() {
    number = 40;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    document.getElementById("myForm").reset();
    reload()
  
}



document.getElementById("start").onclick=function(){
  document.getElementById("div1").style.display="block";
  document.getElementById("startDiv").style.display="none";
  document.getElementById("timeLeft").style.display="block";
}

document.getElementById("done").onclick=function(){
  document.getElementById("div1").style.display="none";
  document.getElementById("resultsPage").style.display="block";
  document.getElementById("timeLeft").style.display="block";
}

document.getElementById("reload").onclick=function(){
  document.getElementById("startDiv").style.display="block";
  document.getElementById("resultsPage").style.display="none";
  document.getElementById("timeLeft").style.display="none";
}