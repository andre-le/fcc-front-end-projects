$(document).ready(function(){
  var text = "";
  var cal = false;
  var type;
  var result;
  var num1, num2;
  
  //action when the click the number
  $('.number').click(function(){
    if (cal){
      $('.plus').css('background-color', '#DCDCDC');
      $('.minus').css('background-color', '#DCDCDC');
      $('.times').css('background-color', '#DCDCDC');
      $('.divide').css('background-color', '#DCDCDC');
      num1 = parseFloat(text);
      cal = false;
      text = "";
    }
    
    text += this.id;
    
    //control the text area
    if (text.length > 7){ 
      $('.text').css('font-size', '36px');
    }
    if (text.length > 14){
      $('.text').css('font-size', '20px');
    }
    if (text.length > 16){
      alert('The number is too large to compute!');
      text = text.substring(0, text.length - 1);
    }
    
    $('.text').html(text);
    
  });
  
  //action when click the calculate button
  $('.plus').click(function(){
    $('.plus').css('background-color', '#C0C0C0');
    cal = true;
    type = "plus";
  });
  
  $('.minus').click(function(){
    $('.minus').css('background-color', '#C0C0C0');
    cal = true;
    type = "minus";
  });
  
  $('.times').click(function(){
    $('.times').css('background-color', '#C0C0C0');
    cal = true;
    type = "times";
  });
  
  $('.divide').click(function(){
    $('.divide').css('background-color', '#C0C0C0');
    cal = true;
    type = "divide";
  });
  
  $('.negate').click(function(){
    text += "-";
    $('.text').html(text);
  });
  
  $('.point').click(function(){
    text += ".";
    $('.text').html(text);
  });
  
  $('.allclear').click(function(){
    text = "";
    num1 = "";
    num2 = "";
    $('.text').html("00");
    $('.result').html("0");
  });
  
  $('.clear').click(function(){
    text = "";
    $('.text').html("00");
  });
  
  $('.equal').click(function(){
    num2 = parseFloat(text);
    if (type == "plus")
      result = num1 + num2;
    else if (type == "minus")
      result = num1 - num2;
    else if (type == "times")
      result = num1*num2;
    else if (type == "divide")
      result = (num1/num2).toFixed(5);
    else
      result = num2;
    text = "" + result;
    if (result === NaN)
      $('.result').html("Syntax Error");
    else
      $('.result').html(result);
  });
});