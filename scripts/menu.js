var bannerLoaded=0;

	
console.log('hello world');

console.log('hey buddy');
	
var toolBar=document.getElementById('tool bar');
var content=document.getElementById('content')
var mainPic=document.getElementById('mainpic');
var main=document.getElementById('main');
var poop=document.getElementById('poop');
var MainPic=document.getElementById('mainmainPic');
var Filler=document.getElementById('filler');



var poopClass=document.createAttribute('class');
var poopClass2=document.createAttribute('class');
var poopClass3=document.createAttribute('class');
var picClass=document.createAttribute('class');
var contentClass=document.createAttribute('class');
var mainStyle=document.createAttribute('style');
var styler=document.createAttribute('style');
var picStyle=document.createAttribute('style');
var picStyle2=document.createAttribute('style');
var picStyle3=document.createAttribute('style');

picStyle2.value='width:100%';


var picClass2=document.createAttribute('class');
var contentClass2=document.createAttribute('class');
var mainStyle2=document.createAttribute('style');
var styler2=document.createAttribute('style');

var picClass3=document.createAttribute('class');
var contentClass3=document.createAttribute('class');
var mainStyle3=document.createAttribute('style');
var styler3=document.createAttribute('style');






var bigBar='<p></p><button type="button" class="btn btn-primary btn-lg" id="aboutBtn">About</button><button type="button" class="btn btn-outline-secondary btn-lg" id="cvbtn">CV</button><button type="button" class="btn btn-outline-secondary btn-lg" id="grantsbtn">Awards/Grants</button><button type="button" class="btn btn-outline-secondary btn-lg" id="teachbtn">Teaching</button><button type="button" class="btn btn-outline-secondary btn-lg" id="rsrchbtn">Research</button><button type="button" class="btn btn-outline-secondary btn-lg" id="talkbtn">Talks/Presentations</button><button type="button" class="btn btn-outline-secondary btn-lg" id="rsbtn">Programs/Games</button>';
	
var medBar='<p></p><button type="button" class="btn btn-primary btn-sm" id="aboutBtn">About</button><button type="button" class="btn btn-outline-secondary btn-sm" id="cvbtn">CV</button><button type="button" class="btn btn-outline-secondary btn-sm" id="grantsbtn">Awards/Grants</button><button type="button" class="btn btn-outline-secondary btn-sm" id="teachbtn">Teaching</button><button type="button" class="btn btn-outline-secondary btn-sm" id="rsrchbtn">Research</button><button type="button" class="btn btn-outline-secondary btn-sm" id="talkbtn">Talks/Presentations</button><button type="button" class="btn btn-outline-secondary btn-sm" id="rsbtn">Programs/Games</button>';

	
var smBar='<p></p><div class="btn-group  btn-block" role="group" aria-label="Basic example"><button type="button" class="btn btn-secondary" id="abtbtn">About</button><button type="button" class="btn btn-secondary" id="cvbtn">CV</button><button type="button" class="btn btn-secondary" id="grantsbtn">Awards</button><button type="button" class="btn btn-secondary" id="morebtn">More...</button></div>';
	

	
	
	
//BUTTONS
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








var image=new Image();
image.src='img/Banner.png';
image.onload=function(){
	bannerLoaded=1;
};
var bruceBanner;
var ctx;
var width;
var height;
var theta="<canvas Id='banner'></canvas>";

var where=0; // make this change for the different websites index will be zero!






function DrawBanner(){
		bannerHolder.innerHTML=theta;
		bruceBanner=document.getElementById('banner')
		width = bruceBanner.width=w-15;
		height = bruceBanner.height=(167/1299)*(w-5);
		ctx = bruceBanner.getContext('2d');
				
		if (bannerLoaded==1){
		ctx.drawImage(image,0,0,w-5,(167/1299)*(w-5));
		};
		if (bannerLoaded==0){
			image.onload=function(){
				ctx.drawImage(image,0,0,w,(167/1299)*w);
				bannerLoaded=1
			}
		
		};
		offset=main.offsetTop;
		var p=h-offset;
		
		//FULL SCREEN ON DESKTOP
		if (w>=1058 && phoneNo()){
			
			picClass.value='columnb';
			contentClass.value='column';
			poopClass.value='row';
			poop.setAttributeNode(poopClass);
			mainpic.setAttributeNode(picClass);
			content.setAttributeNode(contentClass);
			mainStyle.value='';
			main.setAttributeNode(mainStyle);
			
			toolBar.innerHTML=bigBar;
			//BUTTONS
			abtBtn=document.getElementById('aboutBtn');
			cvBtn=document.getElementById('cvbtn');
			grBtn=document.getElementById('grantsbtn');
			srcBtn=document.getElementById('rsrchbtn');
			teachBtn=document.getElementById('teachbtn');
			//semBtn=document.getElementById('sembtn');
			rsBtn=document.getElementById('rsbtn');
			semBtn=document.getElementById('sembtn');
			talkBtn=document.getElementById('talkbtn');
			
			offset=Filler.offsetTop;
			Left=content.offsetLeft;
			p=h-offset;
			
			styler.value='height:'+p+'px; overflow-y:auto;';
			content.setAttributeNode(styler);
			
			smaller=Math.min(p,Left);
			
			/*
			if (h>w){
				console.log('poop')
				MainPic.setAttributeNode(picStyle2);
				
				
			}
			if(w>=h){
				console.log('pooper')
				picStyle.value='height:'+p+'px';
				MainPic.setAttributeNode(picStyle);
				
			}
			*/
			
			picStyle.value='height:'+.96*smaller+'px';
			MainPic.setAttributeNode(picStyle);
			
			/*
			document.addEventListener('click',function(e){
				var x=e.clientX;
				var y=e.clientY;
				
				console.log('x: '+x);
				console.log('y: '+y);
			});
			*/
		
			
			//LISTEN FOR BUTTONS
			talkBtn.addEventListener('click',function(){
				window.open("talks.html", "_self");
				//console.log('worked');
			});
			abtBtn.addEventListener('click',function(){
				window.open("index.html", "_self");
				//console.log('worked')
			});
			cvBtn.addEventListener('click',function(){
				window.open("http://people.math.sc.edu/robertv/vitae.html", "_self");
				//console.log('worked')
			});
			srcBtn.addEventListener('click',function(){
				window.open("http://people.math.sc.edu/robertv/papers.html", "_self");
				//console.log('worked')
			});
			teachBtn.addEventListener('click',function(){
				window.open("http://people.math.sc.edu/robertv/teaching.html", "_self");
				//console.log('worked')
			});
			
			/*
			semBtn.addEventListener('click',function(){
				window.open("http://people.math.sc.edu/robertv/seminars.html", "_self");
				//console.log('worked')
			});
			*/
			grBtn.addEventListener('click',function(){
				window.open("http://people.math.sc.edu/robertv/awards.html", "_self");
				//console.log('worked')
			});
			rsBtn.addEventListener('click',function(){
				window.open("http://people.math.sc.edu/robertv/resources.html", "_self");
				//console.log('worked')
			});
			
			
			
		}
		
		
		//NOT FULL SCREEN ON DESKTOP OR TABLETS
		if (w<1058 && w>=684 && phoneNo()){
			
			toolBar.innerHTML=medBar;
			//BUTTONS
			abtBtn=document.getElementById('aboutBtn');
			cvBtn=document.getElementById('cvbtn');
			grBtn=document.getElementById('grantsbtn');
			srcBtn=document.getElementById('rsrchbtn');
			teachBtn=document.getElementById('teachbtn');
			semBtn=document.getElementById('sembtn');
			rsBtn=document.getElementById('rsbtn');
			semBtn=document.getElementById('sembtn');
			talkBtn=document.getElementById('talkbtn');
			
			poopClass2.value='';
			poop.setAttributeNode(poopClass2);
			picClass2.value='';
			styler2.value='';
			content.setAttributeNode(styler2);
			contentClass2.value='';
			mainpic.setAttributeNode(picClass2);
			content.setAttributeNode(contentClass2);
			MainPic.setAttributeNode(picStyle2);
			
			offset=main.offsetTop;
			p=h-offset;
			
			
			mainStyle2.value='height:'+p+'px; overflow-y:auto; ';
			main.setAttributeNode(mainStyle2);
			
			//LISTEN FOR BUTTONS
			talkBtn.addEventListener('click',function(){
				window.open("talks.html", "_self");
				//console.log('worked');
			});
			abtBtn.addEventListener('click',function(){
				window.open("index.html", "_self");
				//console.log('worked');
			});
			cvBtn.addEventListener('click',function(){
				window.open("http://people.math.sc.edu/robertv/vitae.html", "_self");
				//console.log('worked')
			});
			srcBtn.addEventListener('click',function(){
				window.open("http://people.math.sc.edu/robertv/papers.html", "_self");
				//console.log('worked')
			});
			teachBtn.addEventListener('click',function(){
				window.open("http://people.math.sc.edu/robertv/teaching.html", "_self");
				//console.log('worked')
			});
			semBtn.addEventListener('click',function(){
				window.open("http://people.math.sc.edu/robertv/seminars.html", "_self");
				//console.log('worked')
			});
			grBtn.addEventListener('click',function(){
				window.open("http://people.math.sc.edu/robertv/awards.html", "_self");
				//console.log('worked')
			});
			rsBtn.addEventListener('click',function(){
				window.open("http://people.math.sc.edu/robertv/resources.html", "_self");
				//console.log('worked')
			});
		
		}
		
		//CELL PHONES
		if (w<684 || phoneYes()){
			toolBar.innerHTML=smBar;
			
			//BUTTONS
			abtBtn=document.getElementById('abtbtn');
			cvBtn=document.getElementById('cvbtn');
			grBtn=document.getElementById('grantsbtn');
		
			moreBtn=document.getElementById('morebtn');
			
			poopClass3.value='';
			poop.setAttributeNode(poopClass3);
			picClass3.value='';
			styler3.value='';
			content.setAttributeNode(styler3);
			contentClass3.value='';
			mainpic.setAttributeNode(picClass3);
			content.setAttributeNode(contentClass3);
			MainPic.setAttributeNode(picStyle2);
			
			offset=main.offsetTop;
			p=h-offset;
			
			
			mainStyle3.value='height:'+p+'px; overflow-y:auto; ';
			main.setAttributeNode(mainStyle3);
			
			//LISTEN FOR BUTTONS
			abtBtn.addEventListener('click',function(){
				window.open("index.html", "_self");
				//console.log('worked')
			});
			cvBtn.addEventListener('click',function(){
				window.open("http://people.math.sc.edu/robertv/vitae.html", "_self");
				//console.log('worked')
			});
			
			grBtn.addEventListener('click',function(){
				window.open("http://people.math.sc.edu/robertv/awards.html", "_self");
				//console.log('worked')
			});
			moreBtn.addEventListener('click',function(){
				window.open("http://people.math.sc.edu/robertv/more.html", "_self");
				//console.log('worked')
			});
			
		}
		
	
			
		
		
		bruceBanner.addEventListener('click',clickSocial);
	}
	





	
