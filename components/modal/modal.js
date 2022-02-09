var modal = document.querySelector(".modal");
var btn = document.querySelector(".btn");
var close = document.querySelector(".close");

btn.addEventListener("click",()=>modal.style.display="block")
close.addEventListener("click",()=>modal.style.display="none")
window.addEventListener("click",(event)=>{
    if(event.target == modal){
        modal.style.display = "none";
    }
})