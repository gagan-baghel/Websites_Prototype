var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}








const dots = document.querySelectorAll(".dot");
const carousal_box = document.querySelector(".carousal_box");
const dot1 = document.querySelector("#dot1");
const dot2 = document.querySelector("#dot2");
const dot3 = document.querySelector("#dot3");
const dot4 = document.querySelector("#dot4");
dot1.onclick=()=>{
    carousal_box.style.right = "0vw";
    dots.forEach((dot)=>{
        dot.classList.remove("active");
    })
    dot1.classList.add("active");
}
dot2.onclick=()=>{
    carousal_box.style.right = "90vw";
    dots.forEach((dot)=>{
        dot.classList.remove("active");
    })
    dot2.classList.add("active");
}
dot3.onclick=()=>{
    carousal_box.style.right = "180vw";
    dots.forEach((dot)=>{
        dot.classList.remove("active");
    })
    dot3.classList.add("active");
}
dot4.onclick=()=>{
    carousal_box.style.right = "270vw";
    dots.forEach((dot)=>{
        dot.classList.remove("active");
    })
    dot4.classList.add("active");
}


