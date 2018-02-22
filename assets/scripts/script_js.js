window.onload = function(evt) {	
	init(evt);	
}	


function init(evt) {
	evt.preventDefault();
	var flechaDerecha = document.getElementsByClassName("w3-display-left");
	flechaDerecha.onclick = plusDivs(evt, 1);
	//var elements = document.getElementsByClassName("w3-display-left");

}

/*
var slideIndex = 1;
showDivs(slideIndex);
*/
function plusDivs(n) {
  //showDivs(slideIndex += n); 
  
  console.log("se ha pulsado el boton "+ n);
}
/*
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}*/