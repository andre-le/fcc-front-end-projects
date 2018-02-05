$(document).ready(function(){
  var min = 25;
  var sec = 0;
  var breakMin = 5;
  var breakSec = 0;
  var isPause = true;
  var timer, breakTime;
  
  $("#inc").click(function(){
    min++;
    $('#showtime').html(min + ":" + sec);
  });
  $("#des").click(function(){
    if (min == 1){
      alert("Don' try to work less than 1 minutes!")
    }
    else{
      min--;
    }
    $('#showtime').html(min + ":" + sec);
  });
  
  $("#incBreak").click(function(){
    breakMin++;
    $('#showbreak').html(breakMin + ":" + breakSec);
  });
  $("#desBreak").click(function(){
    if (breakMin == 0){
      alert("0 is the minimum amount!")
    }
    else{
      breakMin--;
    }
    $('#showbreak').html(breakMin + ":" + breakSec);
  });
  
  function resumeBreak(){
      breakSec--;
      if (breakSec < 0){
        breakSec = 59;
        breakMin--;
      }
      if (breakSec == 0 && breakMin == 0){
        clearInterval(breakTime);
        alert("Congratz! Effective works paid off!! Now begin your new session");
      }
        $('#showbreak').html(breakMin + ":" + breakSec);
  }
  
  function resume(){
      sec--;
      if (sec < 0){
        sec = 59;
        min--;
      }
      if (min == 0 && sec == 0) {
        clearInterval(timer);
        breakTime = setInterval(resumeBreak, 1000);
      }
      $('#showtime').html(min + ":" + sec);
  }
  
  $('#showtime').html(min + ":" + sec);
  $('#showbreak').html(breakMin + ":" + breakSec);
  $("#control").click(function(){
    
    isPause = !isPause;
    if (isPause){
      $("#control").html("Resume");
      if (min == 0 && sec == 0){
        clearInterval(breakTime);
      }
      else {
        clearInterval(timer);
      }
      clearInterval(timer);
      $("#reset").show();
    }
    else{
      if (min == 0 && sec == 0){
        breakTime = setInterval(resumeBreak, 1000);
      }
      else {
        timer = setInterval(resume, 1000);
      }
      
      $("#control").html("Pause");
      $("#reset").hide();
    }
      
  });
  
  $("#reset").click(function(){
    min = 25;
    sec = 0;
    breakMin = 5;
    breakSec = 0;
    $("#control").html("Start");
    $('#showtime').html(min + ":" + sec);
    $('#showbreak').html(breakMin + ":" + breakSec);
  });
  
});