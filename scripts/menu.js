	


var bigBar='<p></p><button type="button" class="btn btn-outline-secondary btn-lg" id="aboutBtn">About</button><button type="button" class="btn btn-outline-secondary btn-lg" id="rsbtn">Early Childhood Software + Books</button><button type="button" class="btn btn-outline-secondary btn-lg" id="teachbtn">Teaching</button><button type="button" class="btn btn-outline-secondary btn-lg" id="rsrchbtn">Research</button><button type="button" class="btn btn-outline-secondary btn-lg" id="talkbtn">Talks/Presentations</button><button type="button" class="btn btn-outline-secondary btn-lg" id="cvbtn">CV</button>';
	
var medBar='<p></p><button type="button" class="btn btn-outline-secondary btn-sm" id="aboutBtn">About</button><button type="button" class="btn btn-outline-secondary btn-sm" id="rsbtn">Early Childhood Software + Books</button><button type="button" class="btn btn-outline-secondary btn-sm" id="teachbtn">Teaching</button><button type="button" class="btn btn-outline-secondary btn-sm" id="rsrchbtn">Research</button><button type="button" class="btn btn-outline-secondary btn-sm" id="talkbtn">Talks/Presentations</button><button type="button" class="btn btn-outline-secondary btn-sm" id="cvbtn">CV</button>';

	
var smBar='<p></p><div class="btn-group  btn-block" role="group" aria-label="Basic example"><button type="button" class="btn btn-secondary" id="aboutBtn">About</button><button type="button" class="btn btn-secondary" id="cvbtn">CV</button><button type="button" class="btn btn-secondary" id="grantsbtn">Books etc.</button><button type="button" class="btn btn-secondary" id="morebtn">More...</button></div>';
	





var bigSelect="btn btn-primary btn-lg";


var medSelect="btn btn-primary btn-sm";







	
	
//BUTTONS
var toolBar=document.getElementById('tool bar');

var bannerHolder=document.getElementById('holder');





var abtBtn;
var cvBtn;
var grBtn;
var srcBtn;
var teachBtn;
var semBtn;
var rsBtn;
var moreBtn;
var talkBtn;




var bannerLoaded=0;



var image=new Image();
image.src='img/Banner2.png';
image.onload=function(){
	bannerLoaded=1;
};
var bruceBanner;
var ctx;
var width;
var height;
var theta="<canvas Id='banner'></canvas>";



var where // make this change for the different websites index will be zero!






function DrawBanner(){



	bannerHolder.innerHTML=theta;
	bruceBanner=document.getElementById('banner')
	width = bruceBanner.width=w-15;
	height = bruceBanner.height=(167/1299)*(w-5);
	ctx = bruceBanner.getContext('2d');

	var activeClass=document.createAttribute('class');
			
	if (bannerLoaded==1){
		ctx.drawImage(image,0,0,w-5,(167/1299)*(w-5));
	};
	
	
	if (bannerLoaded==0){
		image.onload=function(){
			ctx.drawImage(image,0,0,w,(167/1299)*w);
			bannerLoaded=1
		}

	};


	var theSize='';
		
	//FULL SCREEN ON DESKTOP
	if (w>=1058 && phoneNo()){

		toolBar.innerHTML=bigBar;
		theSize='big';
		
		
	}
	
	//NOT FULL SCREEN ON DESKTOP OR TABLETS
	if (w<1058 && w>=684 && phoneNo()){
		
		toolBar.innerHTML=medBar;
		theSize='med';
		
	}
	
	
	//CELL PHONES
	if (w<684 || phoneYes()){
	
		toolBar.innerHTML=smBar;
		theSize='sm';
		
	}
	
	
	
	
	
	//BUTTONS
	abtBtn=document.getElementById('aboutBtn');
	cvBtn=document.getElementById('cvbtn');
	//grBtn=document.getElementById('grantsbtn');
	srcBtn=document.getElementById('rsrchbtn');
	teachBtn=document.getElementById('teachbtn');
	//semBtn=document.getElementById('sembtn');
	rsBtn=document.getElementById('rsbtn');
	semBtn=document.getElementById('sembtn');
	talkBtn=document.getElementById('talkbtn');



	//LISTEN FOR BUTTONS
	
	abtBtn.addEventListener('click',function(){
		window.open("index.html", "_self");
		console.log('worked')
	});
	cvBtn.addEventListener('click',function(){
		window.open("vitae.html", "_self");
		//console.log('worked')
	});
	
	
	if(theSize!='sm'){
		srcBtn.addEventListener('click',function(){
			window.open("research.html", "_self");
			//console.log('worked')
		});
		teachBtn.addEventListener('click',function(){
			window.open("teach.html", "_self");
			//console.log('worked')
		});


		rsBtn.addEventListener('click',function(){
			window.open("books.html", "_self");
			//console.log('worked')
		});
		talkBtn.addEventListener('click',function(){
			window.open("talks.html", "_self");
			//console.log('worked');
		});


	
		activeClass.value=eval(theSize+'Select');

		console.log(where+'Btn');

		eval(where+'Btn.setAttributeNode(activeClass)');
	}
				
			
			
		

	bruceBanner.addEventListener('click',clickSocial);
	
	
}
	
	
	
	
	
	
function phoneNo(){
if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	return false;
}
else{return true;}}
function phoneYes(){
	if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	return true;
}}






function clickSocial(e){
	
	var elemLeft= bruceBanner.offsetLeft;
	var elemTop=bruceBanner.offsetTop;
	
	
	
	var x=e.clientX-elemLeft;
	var y=e.clientY-elemTop;
	var help=(167/1299)*(w-5);
	
	var peepx=w*.9;
	var peepx2=w*.87;
	
	var peepy=(167/1299)*(w-5)*.5;
	var peepy2=(167/1299)*(w-5)*.75;
	
	var pressx=w*.91;
	var pressx2=w*.9508;
	var pressy=help*.66;
	var pressy2=help;
	
	
	if (x<=peepx && peepx2<=x && y<=peepy2 && peepy<=y){
		window.open('https://twitter.com/algebrasnotwar');
	};
	
	if (x<=pressx2 && pressx<=x && help*.66<=y){
		window.open('https://algebraiccafe.wordpress.com/');
	};
	

	
}





	
