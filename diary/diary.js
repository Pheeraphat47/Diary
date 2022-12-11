let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-nav-toggle");

navBarToggle.addEventListener("click" , function(){
   mainNav.classList.toggle("active");
}); 

const accordion = document.getElementsByClassName("contentBx");

for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click",function(){
        this.classList.toggle("active")
    })
}