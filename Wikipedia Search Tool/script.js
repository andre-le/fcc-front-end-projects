$(document).ready(function() {
  $('#hit').click(function() {
    //Get the search term
    var term = $('#term').val();
    
    //Get the search API from wiki
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + term +"&limit=10&namespace=0&format=json&callback=?";
    //Get data in the form of JSON
    $.getJSON(url, function(data){
      $("ul").empty();
      for (var i = 0; i < 10;i++){
        var text = data[1][i];
        var des = data[2][i];
        var link = data[3][i];
        $('ul').append("<li><button class='result'><a href='"+ link + "'><b>"+ text + " </b></a><p><i>" + des +"</i></p></button></li>");
      }
    });
  });
});