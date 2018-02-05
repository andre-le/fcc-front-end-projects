var solutions = [[3,6,9],[13,16,19],[23,26,29],[3,13,23],[6,16,26],[9,19,29],[3,16,29],[9,16,23]];
var pos = [3,6,9,13,16,19,23,26,29];
var occupied = [];

$(document).ready(function(){
  var human = [];
  var computer = [];
  var yourMove, compMove;
  var compTurn;
  $('.box').hide();
  $('#x').click(function(){
    show();
    yourMove = 'X';
    compMove = 'O';
  });
  
  $('#o').click(function(){
    show();
    yourMove = 'O';
    compMove = 'X';
  });
  
  $('.sqr').click(function(){
    var id = parseInt(this.id);
    if (occupied.indexOf(id) == -1){
      $('#' + id).append("<p class='blue move'><strong>" + yourMove + "</strong></p>");
      human.push(id);
      occupied.push(id);
      compTurn = true;
    }
    
    if (compTurn){
      var compNextMove = nextMove(human, computer);
      computer.push(compNextMove);
      occupied.push(compNextMove);
      $('#' + compNextMove).append("<p class='move red'><strong>" + compMove + "</strong></p>");
      compTurn = false;
    }
    
    
    if (occupied.length >= 9){
      $('.status').html("It's a tie!");
    }
    else if (isWin(computer)){
      $('.status').html("You lose!");
      occupied = pos;
    }
     
  });
 
  $('.reset').click(function(){
    $('.box').hide('slow');
    $('.welcome').show('slow');
    $('.sqr').empty();
    human = [];
    computer = [];
    occupied = [];
  });
  
});

function show(){
  $('.welcome').hide('slow');
  $('.box').show('slow');
  $('.status').html("");
}

function isWin(arr){
  for (var i = 0; i < solutions.length; i++){
    if(contains(arr, solutions[i])){
      return true;
    }
  }
  return false;
}

//function that check if every element in sub is contained in sup
function contains(sup, sub){
  return (sup.filter(function (elem) {
    return sub.indexOf(elem) > -1;
  }).length == sub.length);
}

//find the next move for the computer
function nextMove(human, computer){
  for (var i = 0; i < human.length; i++){
    for (var j = 0; j < human.length; j++){
      var check = Math.abs(computer[i] - computer[j]);
      if (check == 3){
        if (pos.indexOf(Math.max(computer[i], computer[j]) + 3) > -1 && occupied.indexOf(Math.max(computer[i], computer[j]) + 3) == -1)
        return Math.max(computer[i], computer[j]) + 3;
      else if (pos.indexOf(Math.min(computer[i], computer[j]) - 3) > -1 && occupied.indexOf(Math.min(computer[i], computer[j]) - 3) == -1)
        return Math.min(computer[i], computer[j]) - 3;
      }
      
      if (check == 10){
        if (pos.indexOf(Math.max(computer[i], computer[j]) + 10) > -1 && occupied.indexOf(Math.max(computer[i], computer[j]) + 10) == -1)
          return Math.max(computer[i], computer[j]) + 10;
        else if (pos.indexOf(Math.min(computer[i], computer[j]) - 10) > -1 && occupied.indexOf(Math.min(computer[i], computer[j]) - 10) == -1)
          return Math.min(computer[i], computer[j]) - 10;
      }
      
      if (check == 13){
        if (pos.indexOf(Math.max(computer[i], computer[j]) + 13) > -1 && occupied.indexOf(Math.max(computer[i], computer[j]) + 13) == -1)
          return Math.max(computer[i], computer[j]) + 13;
        else if (pos.indexOf(Math.min(computer[i], computer[j]) - 13) > -1 && occupied.indexOf(Math.min(computer[i], computer[j]) - 13) == -1)
          return Math.min(computer[i], computer[j]) - 13;
      }
      
      if (check == 7){
        if (pos.indexOf(Math.max(computer[i], computer[j]) + 7) > -1 && occupied.indexOf(Math.max(computer[i], computer[j]) + 7) == -1)
          return Math.max(computer[i], computer[j]) + 7;
        else if (pos.indexOf(Math.min(computer[i], computer[j]) - 7) > -1 && occupied.indexOf(Math.min(computer[i], computer[j]) - 7) == -1)
          return Math.min(computer[i], computer[j]) - 7;
      }
      
      if (check == 6 || check == 20 || check == 26 || check == 14){
        var move = (computer[i] + computer[j])/2;
        if (occupied.indexOf(move) == -1)
          return move;
      }
    }
  }
  
  //defense the player's attack
  for (var i = 0; i < human.length; i++){
    for (var j = 0; j < human.length; j++){ 
      check = Math.abs(human[i] - human[j]);
      if (check == 3){
        if (pos.indexOf(Math.max(human[i], human[j]) + 3) > -1 && occupied.indexOf(Math.max(human[i], human[j]) + 3) == -1)
          return Math.max(human[i], human[j]) + 3;
        else if (pos.indexOf(Math.min(human[i], human[j]) - 3) > -1 && occupied.indexOf(Math.min(human[i], human[j]) - 3) == -1)
          return Math.min(human[i], human[j]) - 3;
      }
      
      if (check == 10){
        if (pos.indexOf(Math.max(human[i], human[j]) + 10) > -1 && occupied.indexOf(Math.max(human[i], human[j]) + 10) == -1)
          return Math.max(human[i], human[j]) + 10;
        else if (pos.indexOf(Math.min(human[i], human[j]) - 10) > -1 && occupied.indexOf(Math.min(human[i], human[j]) - 10) == -1)
          return Math.min(human[i], human[j]) - 10;
      }
      
      if (check == 13){
        if (pos.indexOf(Math.max(human[i], human[j]) + 13) > -1 && occupied.indexOf(Math.max(human[i], human[j]) + 13) == -1)
          return Math.max(human[i], human[j]) + 13;
        else if (pos.indexOf(Math.min(human[i], human[j]) - 13) > -1 && occupied.indexOf(Math.min(human[i], human[j]) - 13) == -1)
          return Math.min(human[i], human[j]) - 13;
      }
      
      if (check == 7){
        if (pos.indexOf(Math.max(human[i], human[j]) + 7) > -1 && occupied.indexOf(Math.max(human[i], human[j]) + 7) == -1)
          return Math.max(human[i], human[j]) + 7;
        else if (pos.indexOf(Math.min(human[i], human[j]) - 7) > -1 && occupied.indexOf(Math.min(human[i], human[j]) - 7) == -1)
          return Math.min(human[i], human[j]) - 7;
      }
      
      if (check == 6 || check == 20 || check == 26 || check == 14){
        var move = (human[i] + human[j])/2;
        if (occupied.indexOf(move) == -1)
          return move;
      }
      
    }
  }
  for (var i = 0; i < pos.length; i++){
    if (occupied.indexOf(16) == -1)
      return 16;
    else if (occupied.indexOf(pos[i]) > -1 && pos.indexOf(pos[i] - 13) > -1 && occupied.indexOf(pos[i] - 13) == -1){  
      return pos[i] - 13;
    }
    else if (occupied.indexOf(pos[i]) > -1 && pos.indexOf(pos[i] + 3) > -1 && occupied.indexOf(pos[i] + 3) == -1){  
      return pos[i] + 3;
    }
    else if (occupied.indexOf(pos[i]) > -1 && pos.indexOf(pos[i] - 3) > -1 && occupied.indexOf(pos[i] - 3) == -1){  
      return pos[i] - 3;
    }
    else if (occupied.indexOf(pos[i]) > -1 && pos.indexOf(pos[i] + 10) > -1 && occupied.indexOf(pos[i] + 10) == -1){  
      return pos[i] + 10;
    }
    else if (occupied.indexOf(pos[i]) > -1 && pos.indexOf(pos[i] - 10) > -1 && occupied.indexOf(pos[i] - 10) == -1){  
      return pos[i] - 10;
    }
  }
}