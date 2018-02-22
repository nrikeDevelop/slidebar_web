window.onload = function(evt) {	
	init(evt);	
}	

//Creamos variable global que utilizaremnos como contador
var count = 1;

function init(event) {
	event.preventDefault();
	//cargamos en variables las flechas del slider
	var flechaDerecha = document.getElementsByClassName("w3-display-left");	
	var flechaIzquierda = document.getElementsByClassName("w3-display-rigth");
	//Incluimos eventos del tipo clic en las flechas del slider
	flechaDerecha.onclick = plusDivs;
	flechaIzquierda.onclick = minusDivs;
}

function plusDivs(event) {
	event.preventDefault();
	//Aqui sumaremos +1 al contador y lo enviaremos a la función show Divs
}

function minusDivs(event) {
	event.preventDefault();
	//Aquí restaremos -1 y lo enviaremos a la funcion showDivs
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