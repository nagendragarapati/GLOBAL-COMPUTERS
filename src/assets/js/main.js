

function scroll(){
window.scrollTo(0,345);
}


function vanish(){
  var x = document.getElementById("panel");
  if (x.style.display === "block") {
    x.style.display = "none";

  }
}

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "44px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}






