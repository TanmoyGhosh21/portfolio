$("#bun").click(function(){
  $(".side-menu").slideToggle();
});
$(".droppBtn").click(function(){
  $(".side-menu").slideToggle();
});




$("#Linkedin").click(function(){
  window.open("https://www.linkedin.com/in/tanmoy21/");
});

$("#Resume").click(function(){
  window.open("resources/TanmoyGhosh.pdf");
});

document.querySelector("#gra").addEventListener("click",function(){
  document.querySelector("#co").innerHTML="Bachelors's in Computer Application";

  document.querySelector("#ins").innerHTML="Inspiria Knowledge Campus";

  document.querySelector("#fro").innerHTML="2017";

  document.querySelector("#to").innerHTML="2020";

  document.querySelector("#res").innerHTML="7.44/10";
});

document.querySelector("#cls12").addEventListener("click",function(){
  document.querySelector("#co").innerHTML="Class XII Commerce";

  document.querySelector("#ins").innerHTML="Army Public School, Sukna";

  document.querySelector("#fro").innerHTML="2016";

  document.querySelector("#to").innerHTML="2017";

  document.querySelector("#res").innerHTML="Nahi Batunga 🧐";
});

document.querySelector("#cls10").addEventListener("click",function(){
  document.querySelector("#co").innerHTML="Class X";

  document.querySelector("#ins").innerHTML="Army Public School, Bikaner";

  document.querySelector("#fro").innerHTML="2014";

  document.querySelector("#to").innerHTML="2015";

  document.querySelector("#res").innerHTML="Nahi Batunga 🧐";
});

document.querySelector("#mas").addEventListener("click",function(){
  document.querySelector("#co").innerHTML="Master Of Computer Application";

  document.querySelector("#ins").innerHTML="University of North Bengal";

  document.querySelector("#fro").innerHTML="2020";

  document.querySelector("#to").innerHTML="2022";

  document.querySelector("#res").innerHTML="Result Awaited 😨😨";
})

document.querySelectorAll(".sa img")[0].addEventListener("click",function(){
  document.querySelector("h4").innerHTML="C programming Language";
})

document.querySelectorAll(".sa img")[1].addEventListener("click",function(){
  document.querySelector("h4").innerHTML="C++ programming Language";
})

document.querySelectorAll(".sa img")[2].addEventListener("click",function(){
  document.querySelector("h4").innerHTML="HTML5. (HyperText Markup Language)";
})

document.querySelectorAll(".sa img")[3].addEventListener("click",function(){
  document.querySelector("h4").innerHTML="CSS3. (Cascading Style Sheets)";
})

document.querySelectorAll(".sa img")[4].addEventListener("click",function(){
  document.querySelector("h4").innerHTML="JavaScript programming Language";
})

document.querySelectorAll(".sb img")[0].addEventListener("click",function(){
  document.querySelector("h4").innerHTML="Node Js";
})

document.querySelectorAll(".sb img")[1].addEventListener("click",function(){
  document.querySelector("h4").innerHTML="SQL (Structured Query Language) (Data Base)";
})

document.querySelectorAll(".sb img")[2].addEventListener("click",function(){
  document.querySelector("h4").innerHTML="MongoDB (Data Base)";
})

document.querySelectorAll(".sb img")[3].addEventListener("click",function(){
  document.querySelector("h4").innerHTML="React Js";
})

$(".conIcon-0 a").click(function(){
  $(".conIcon").addClass("visible");
})

