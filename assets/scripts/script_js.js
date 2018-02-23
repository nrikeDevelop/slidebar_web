window.onload = function(event) {	
	init(event);	
}	

var count = 1;

function init(event) {
	event.preventDefault();	
	document.getElementById("arrowleft").addEventListener("click",previusPicture);	
	document.getElementById("arrowright").addEventListener("click",nextPicture);	
	showPictures(count);
}

function nextPicture(event) {
	event.preventDefault();
	showPictures(count+=1);
	console.log("count = "+count);	
}

function previusPicture(event) {
	event.preventDefault();
	showPictures(count-=1);
	console.log("Count = "+count);	
}


function showPictures(count) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (count > x.length) {count = 1}    
  if (count < 1) {count = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[count-1].style.display = "block";  
}