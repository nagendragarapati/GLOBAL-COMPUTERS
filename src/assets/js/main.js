

function scroll(){
window.scrollTo(0,440);
}


function vanishPage(){
  if (document.getElementById("navbarNav").style.display === "block") {
    document.getElementById("navbarNav").style.display = "none";

  }
  
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.fontSize = "20px";
  } else {
    document.getElementById("navbar").style.padding = "44px 10px";
    document.getElementById("logo").style.fontSize = "26px";
  }
}






