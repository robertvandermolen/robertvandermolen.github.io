var w=window.innerWidth;

var h=window.innerHeight;


var offset;





function resizer(){
	w=window.innerWidth;
	h=window.innerHeight;
	console.log(w);

		
	
	bruceBanner.parentNode.removeChild(bruceBanner);
	

		
	DrawBanner();
	
	DrawWindow();
	
	
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}
