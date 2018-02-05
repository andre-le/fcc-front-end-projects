var quotes = [["Have you met Ted?", "Barney Stinson"], 
              ["Legen-wait4it-dary!", "Barney Stinson"], 
              ["There are a lot of little reasons why the big things in our lives happen.", "Ted Mosby"], 
              ["Definitions are important","Lily Eriksen"], 
              ["You can't just skip ahead to where you think your life should be","Lily Eriksen"] , 
              ["It's just, eventually we're all gonna move on. It's called growing up", "Lily Eriksen"], 
              ["The future is scary but you can't just run back to the past because it's familiar. Yes it's tempting... ","Robin Scherbatsky"] , 
              ["We gotta wait for the real thing, no matter how tough it gets", "Ted Mosby"], 
              ["Sometimes we search for one thing but discover another", "Barney Stinson"]
             ];

var color = ["purple", "khali", "black", "blue", "#C2C048", "aqua", "indigo", "teal", "green", "#1ECA4D", "#20813A", "#591699", "#2D84C5", "#9B37B9", "#0EE999", "#2A799E", "#B91877", "#12A29E"];
document.addEventListener("DOMContentLoaded",
  function (event) {
  function nextQuote (event){
    var i = Math.floor(Math.random() * quotes.length);
    var j = Math.floor(Math.random() * color.length);
    document.querySelector(".quote").textContent = "\"" + quotes[i][0] + "\"";
    document.querySelector(".author").textContent = "-" + quotes[i][1];
    document.querySelector(".quote").style.color = color[j];
    document.body.style.backgroundColor = color[j];
   document.querySelector("button").style.backgroundColor = color[j];
  }
  document.querySelector("button").addEventListener("click", nextQuote);
  document.addEventListener("keydown",nextQuote);
});