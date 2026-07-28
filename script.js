const weddingDate = new Date("April 27, 2027 15:00:00").getTime();

const timer = document.getElementById("timer");

function countdown(){

const now = new Date().getTime();

const distance = weddingDate-now;

if(distance<0){
timer.innerHTML="💍 Today is our Wedding Day!";
return;
}

const days=Math.floor(distance/(1000*60*60*24));
const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
const seconds=Math.floor((distance%(1000*60))/1000);

timer.innerHTML=
days+" Days<br>"+
hours+" Hours<br>"+
minutes+" Minutes<br>"+
seconds+" Seconds";

}

countdown();

setInterval(countdown,1000);


// Fade animation

const sections=document.querySelectorAll("section");

function reveal(){

sections.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-120){

section.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();
