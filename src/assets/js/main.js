var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btns");

function register(){
    document.getElementById("login").style.left="-400px";
    document.getElementById("register").style.left="0px";
    document.getElementById("btns").style.left="110px";
}

function login(){
    document.getElementById("login").style.left="0px";
    document.getElementById("register").style.left="400px";
    document.getElementById("btns").style.left="0px";
}

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






