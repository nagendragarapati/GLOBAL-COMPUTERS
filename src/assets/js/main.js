var string="Nagendra & Sai Krishna...";
var strArray=string.split();

function animate(){
	if(strArray.length > 0){
		document.getElementById("animation").innerHTML += strArray.shift();
	}
	else{
document.getElementById("animation").innerHTML="";
	 strArray=string.split("");
		}
		setTimeout(animate,250);

}

function nagendra(){
window.scrollTo(0,350);
}


function maya(){
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






