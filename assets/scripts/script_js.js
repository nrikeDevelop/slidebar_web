window.onload = function(event) {	
	init(event);	
}	

var count = 1;

var limit = document.getElementsByClassName("mySlides").length;

function init(event) {
	event.preventDefault();	
	document.getElementById("arrowleft").addEventListener("click",previusPicture);	
	document.getElementById("arrowright").addEventListener("click",nextPicture);	
	showPictures(count);
}

function nextPicture(event) {
	event.preventDefault();
	if(count >= limit) {
		count = 1;
	}else {
		count +=1;
	}
	showPictures(count);		
}

function previusPicture(event) {
	event.preventDefault();
	count-=1;
	if (count == 0) {  		
  		count = limit;
  	}else {
  		count = Math.abs(count);  		
  	}
	showPictures(count);	
}


function showPictures(count) { 
  var x = document.getElementsByClassName("mySlides");  
  for (var i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[count-1].style.display = "block";
}