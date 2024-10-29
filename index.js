const menuIcon=document.getElementById("nav-menu__icon");

const menu=document.getElementById("nav-menu");

menuIcon.addEventListener("click",()=>{
    if(menu.className ==="hidden"){
        menu.classList.remove("hidden")
    }
    else{
        menu.classList.add("hidden")
    }
})