let moon = document.getElementById("moon");
let mountain_front = document.getElementById("mountains_front");
let mountain_back = document.getElementById("mountains_behind");
let starts = document.getElementById("stars");
let text =  document.getElementById("moonlight");
let header = document.querySelector("header");

let body = document.querySelector("body");
window.addEventListener("scroll",()=>{
	let value=window.scrollY;
	stars.style.left=value*0.5 +'px';
	moon.style.top = value*.6 + 'px';
	moon.style.left = value* .4 + 'px';
	mountain_back.style.top = value *.15 + 'px';
	text.style.marginRight = value * 2 + 'px';
	text.style.marginLeft = -value * 2 + 'px';
	text.style.marginTop = value * .6 + 'px';
	btn.style.marginTop = value * .7+ 'px';
	header.style.marginTop = value * .7 + 'px';
})

let darkBtn = document.getElementById("changer");
darkBtn.addEventListener("click",()=>{
	body.classList.toggle('dark');
	moon.classList.toggle("dark1");
})
