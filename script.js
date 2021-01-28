let video = document.getElementById("vid");
let pausebtn = document.getElementById("pausebtn");
pausebtn.addEventListener("click", function(e){
	if(video.paused){
		video.play();
		pausebtn.src='pause.svg';
	}
	else{
		video.pause();
		pausebtn.src='play.svg';
	}
});


/*video.pause();*//*
let loader = document.querySelector(".loader-wrapper");
window.addEventListener('load', function(){
	loader.style.transform='translateY(-100vh)'
	video.play();
})

*/


window.addEventListener("scroll", function(){
	let header = document.querySelector(".navbar")
	header.classList.toggle("sticky", window.scrollY > 0);
});







let tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let iframe = document.querySelectorAll(".video");

let player;
function onYouTubePlayerAPIReady() {
	for(let i=0; i<iframe.length; i++){
		player = new YT.Player(iframe[i],  {
			events: {
				'onReady': onPlayerReady
			}
		});
	}
}


/*
function onPlayerReady(event) {
    window.addEventListener("click", function(e){
			player.pauseVideo();        
	});
}*/



function onPlayerReady(event) {
    window.addEventListener("click", function(e){
		for(let i=0; i<iframe.length; i++){
			player.pauseVideo();
		}  
	});
}
















let modalBtn = document.querySelectorAll(".modal-btn");
let modals = document.querySelectorAll(".modal");
let closebtn = document.querySelectorAll(".closebtn");


// Pour chaque élément de la classe .modal-btn
for (let i=0; i<modalBtn.length; i++) {

		// On écoute le click
	modalBtn[i].addEventListener("click", function(e){
		// On stock la valeur du data attribute (data-modal) modal
		let modalNumber = e.target.dataset.modal;
		
		// On parcourt tous les éléments de la classe .modal
		for (let j=0; j < modals.length; j++){
			// Si un élément de cette classe a un id qui contient la valeur du data-modal d'un bouton 
			if (modals[j].id.indexOf(modalNumber) > 0) {
				// On l'affiche 
				modals[j].style.display='flex';
				
				document.body.style.overflow='hidden';


				// On la ferme par le bouton 
				for (let i=0; i<closebtn.length; i++) {
					closebtn[i].addEventListener("click", function(e){
						modals[j].style.display='none';
						
						for (let x=0; x < modals.length; x++){
						if(modals[x].style.display=='none'){
							document.body.style.overflow='auto';
						}
					}
					});

				// On la ferme par le background 
					window.addEventListener("click", function(e){
						if(e.target == modals[j])
						modals[j].style.display='none';
						



						
						for (let x=0; x < modals.length; x++){
						if(modals[x].style.display=='none'){
							document.body.style.overflow='auto';
							console.log("cc");

						}
					}
					});
			}
		}
	}
	});
}




let projets1 = document.querySelectorAll(".projets1");
let projets2 = document.querySelectorAll(".projets2");
let projets3 = document.querySelectorAll(".projets3");

let btn1 = document.querySelectorAll(".bouton1");
let btn2 = document.querySelectorAll(".bouton2");
let btn3 = document.querySelectorAll(".bouton3");



for (let i=0; i<btn1.length; i++) {
	btn1[i].addEventListener("click", function(e){

			projets1[i].style.display = 'grid';
			projets2[i].style.display = 'none';
			projets3[i].style.display = 'none';
	});
}


for (let i=0; i<btn2.length; i++) {
	btn2[i].addEventListener("click", function(e){
			projets2[i].style.display = 'grid';
			projets1[i].style.display = 'none';
			projets3[i].style.display = 'none';
	});
}


for (let i=0; i<btn3.length; i++) {
	btn3[i].addEventListener("click", function(e){
			projets1[i].style.display = 'none';
			projets2[i].style.display = 'none';
			projets3[i].style.display = 'grid';
	});
}





let btns = document.querySelectorAll(".projetbtns");

for (let i=0; i<btns.length; i++) {
	btns[i].addEventListener("click", function(e){
		let current = document.querySelectorAll(".active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
		});
}






				//------------CAROUSEL------------//

let carousel = document.querySelector(".carousel_comment");
let slides = document.querySelectorAll(".avis_comment");
let buttonL = document.querySelector(".carousel_button_left");
let buttonR = document.querySelector(".carousel_button_right");
let nav = document.querySelector(".carousel_nav");
let dots =  document.querySelectorAll(".nav_dot");



let slideWidth = slides[0].getBoundingClientRect().width;
let slidepos = (slide, index)=>{
	slide.style.left = slideWidth * index + 'px';
}
slides.forEach(slidepos);


let movetoslide = (carousel, active, targetslide) => {
	carousel.style.transform = 'translateX(-' + targetslide.style.left + ')';
	active.classList.remove('active');
	targetslide.classList.add('active');
}




let updatedot = (currentDot, targetDot) => {
	currentDot.classList.remove('active');
	targetDot.classList.add('active');
}

buttonL.addEventListener('click', e =>{
	let active = carousel.querySelector('.active')
	let prevslide = active.previousElementSibling;
	movetoslide(carousel, active, prevslide);

	let currentDot = nav.querySelector('.active');
	let nextdot = currentDot.previousElementSibling;
	updatedot(currentDot, nextdot);
});

buttonR.addEventListener('click', e =>{
	let active = carousel.querySelector('.active')
	let nextslide = active.nextElementSibling;
	movetoslide(carousel, active, nextslide);
	
	let currentDot = nav.querySelector('.active');
	let nextdot = currentDot.nextElementSibling;
	updatedot(currentDot, nextdot);

});





let slider = document.querySelector(".slider");
let innerSlider = document.querySelector(".slides");

let pressed = false;
let startx;
let x;

slider.addEventListener('mousedown', (e)=>{
	pressed = true;
	startx = e.offsetX - innerSlider.offsetLeft;
	slider.style.cursor='grabbing';
	innerSlider.style.animation = "none";

});

slider.addEventListener('mouseenter', ()=>{
	console.log("cc")
	innerSlider.style.animation = "none";
});

slider.addEventListener('mouseenter', ()=>{
	slider.style.cursor='grab';	
	innerSlider.style.animation = "none";

});

slider.addEventListener('mouseout', ()=>{
	innerSlider.style.animation="anim 10s infinite";	
});

slider.addEventListener('mouseup', ()=>{
	slider.style.cursor='grab';
	innerSlider.style.animation = "none";

});
window.addEventListener('mouseup', ()=>{
	pressed = false;
});

window.addEventListener('mousemove', (e)=>{
	if(!pressed) return;
	e.preventDefault();

	x = e.offsetX

	innerSlider.style.left = `${x - startx}px`;
	checkboundary()
})


function checkboundary(){
	let outer = slider.getBoundingClientRect();
	let inner = innerSlider.getBoundingClientRect();

	if(parseInt(innerSlider.style.left) > 0){
		innerSlider.style.left = '0px';
	}else if(inner.right < outer.right){	
		innerSlider.style.left = `-${inner.width - outer.width}px`
	}
}	
