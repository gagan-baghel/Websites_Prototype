let btn1= document.getElementById('button-1');
let btn2= document.getElementById('button-2');
let btn3= document.getElementsByClassName('buttons')

window.addEventListener('scroll',()=>{
	value=window.scrollY;
	btn1.style.left=value+'px';
	btn1.style.top=value+'px';
	btn2.style.right=value+'px';
	btn2.style.top=value+'px';
})

let demo=document.getElementById('demo');
var i = 0;
var txt = 'A recipe is a set of instructions that describes how to prepare or make something, especially a dish of prepared  food.                                                                                                                                                                                                                                                                                                                                    ';
var speed = 50;

setInterval(()=>{
	if (i < txt.length) {
		demo.innerHTML += txt.charAt(i);
		i++;
	}
	if(i>=txt.length-1){
		// sleep(2000);
		demo.innerHTML ='';
		i=0;}
},10)