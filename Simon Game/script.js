var color = ['#5cb85c', '#d9534f', '#f0ad4e', '#0275d8'];
var snd = [new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
          new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
          new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
          new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")];
var count = 0;
var currentMove = [], yourMove = [];

$(document).ready(function(){
  
  var strict = false;
  
  $('.reset').hide();
  $('.start').click(function(){
    var move = Math.floor(Math.random()*4 + 1);
    currentMove.push(move);
    playPattern(currentMove);
    $('.start').hide();
    $('.reset').show();
  });
  
  $('.reset').click(function(){
    reset();
  });
  
  $('.color').click(function(){
    var id = parseInt(this.id);
    snd[id - 1].play();
    yourMove.push(id);
  });
  
  $('.next').click(function(){
    if (equals(currentMove, yourMove)){
      count++;
      $('.count').html("Count: " + count);
      if (count == 20){
        alert('You have achieved the victory!');
        reset();
      }
      else{
        var move = Math.floor(Math.random()*4 + 1);
        currentMove.push(move);
        playPattern(currentMove);     
        yourMove = []; 
      }
    }
    else{
      alert('Your move is wrong!');
      if (strict){
        reset();
      }
      else{
        playPattern(currentMove);
        yourMove = [];
      }
    }
  });
  
  $('.strict').click(function(){
    if (strict){
      strict = false;
      $('.strict').html('Strict Mode: Off');
    }
    else{
      strict = true;
      $('.strict').html('Strict Mode: On');
    }
  });
  
});

//Reset the game
function reset(){
  currentMove = [];
  yourMove = [];
  count = 0;
  $('.count').html("Count: 0");
  $('.reset').hide();
  $('.start').show();
}

function playPattern(currentMove){
  var i = -1;
  var timer = setInterval(function(){
    if (i < currentMove.length - 1){
      i++;
      $('#' + currentMove[i]).css("background", "grey");
      snd[currentMove[i] - 1].play();
      setTimeout(function(){
        $('#' + currentMove[i]).css("background", color[currentMove[i] - 1]);
      }, 200);
          
    }
    else{
      clearInterval(timer);
    }
  }, 1000);
}

//check if 2 arrays are equal
function equals(arr1, arr2){
  if (arr1.length != arr2.length)
    return false;
  else{
    for (var i = 0; i < arr1.length; i++){
      if (arr1[i] != arr2[i])
        return false;
    }
    return true;
  }
}