
fetch('https://fakestoreapi.com/products').then((data)=>{
	return data.json();
}).then((completedata)=>{
let data1='';
completedata.map((value)=>{
	data1+=`<div class="card">
		<h1 class="title">${value.title}</h1>
		<img src=${value.image} height="70px" class="images"  alt="img">
		<p>${value.description}</p>
		<p class="category">${value.category}</p>
		<p class="price">${value.price}</p>
	</div> `
});
document.getElementById('cards').innerHTML=data1;
}).catch((error)=>{
	console.log(error);
});

