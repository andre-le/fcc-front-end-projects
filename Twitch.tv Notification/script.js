$(document).ready(function(){
  var channels = ["freecodecamp","WagamamaTV", "Arteezy", "BeyondtheSummit_ES", "AdmiralBulldog", "SumailDoto", "PGL_Dota"];
  
  channels.forEach(function(element) {
    var logo;
    var name;
    var url;
    var status;
    var label;
    var onlineMode;
    var image;
    var viewers = "";
    var channelApi = "https://wind-bow.glitch.me/twitch-api/channels/" + element;
    var streamApi = "https://wind-bow.glitch.me/twitch-api/streams/" + element;
    
    //Get the info of the Twitchtv channel by 2 ajax calls from 2 APIs
    $.ajax({
      async: false,
      url: channelApi,
      success: function(data){
        logo = data.logo;
        name = data.display_name;
        url = data.url;
      }
    });
    
    $.ajax({
      async: false,
      url: streamApi,
      success: function(data){
        if (data.stream == null){
          onlineMode = false;
          status = "<li class='red'><i>Offline</i></li>";
        }  
        else{
          status = "<li class='green'><i>Online</i></li>";
          onlineMode = true;
          label = data.stream.channel.status;
          viewers = data.stream.channel.views;
          image = data.stream.preview.medium;
        }
      }
    });
    
    if(onlineMode){
      $('.onl').append('<div class="row"><div class="logo col-sm-1"><img width="50px" src="'+logo+'" alt="'+name+'"/></div><div class="name col-sm-5"><p><a target="blank" href="'+ url +'"><b>'+name+'</b></a></p></div><div class="status col-sm-3">'+status+'</div><div class="view col-sm-3">'+viewers+' viewers</div></div><img alt="streaming display" src="' + image + '"><p class ="label">'+label+'</p><p></p>');
    }
    else{
      $('.off').append('<div class="row"><div class="logo col-sm-1"><img width="50px" src="'+logo+'" alt="'+name+'"/></div><div class="name col-sm-5"><p><a target="blank" href="'+ url +'"><b>'+name+'</b></a></p></div><div class="status col-sm-3">'+status+'</div><div class="view col-sm-3"></div>');
    }     
  });
  //When clicking the online button
  $('#online').click(function(){
    $('.panel').css("background-color","#5cb85c");
    $('.onl').show();
    $('.off').hide('slow');  
  });
    
  //When clicking the offline button
  $('#offline').click(function(){
    $('.panel').css("background-color","#d9534f");
    $('.off').show();
    $('.onl').hide('slow'); 
  });
  $('#all').click(function(){
    $('.panel').css("background-color","#e090ed");
    $('.off').show('slow');
    $('.onl').show('slow'); 
  });
  
});