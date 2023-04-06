const headerNav= document.querySelector(".nav_navegacion");
const hamburger= document.querySelector(".hamburger_icon");
const menuIcon= document.querySelector(".menuIcon");
const closeIcon= document.querySelector(".closeIc");

hamburger.addEventListener("click",()=>{
    if(hamburger.classList.contains("active")){
        hamburger.classList.toggle("active")
        headerNavegacion.style.display="none"
        menuIcon.style.display="block"
        closeIc.style.display="none"
    }else{
        hamburger.classList.toggle("active")
        headerNavegacion.style.display="block"
        menuIcon.style.display="none"
        closeIc.style.display="block"
    }
})