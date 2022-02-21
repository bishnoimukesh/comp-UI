const openMenu = document.querySelector(".menuIcon")
const closeMenu = document.querySelector(".closeIcon")
const mainMenu = document.querySelector(".navigation")

openMenu.addEventListener("click",()=>{
    openMenu.style.display = "none"
    closeMenu.style.display = "inline-block"
    mainMenu.style.left = "0px"
})

closeMenu.addEventListener("click",()=>{
    closeMenu.style.display = "none"
    openMenu.style.display = "inline-block"
    mainMenu.style.left = '-50%';
    mainMenu.style.display = "inline-block";
})