let triggers = document.querySelectorAll(".trigger");
let close_trigger = document.querySelector(".close-trigger");
let menu_trigger = document.querySelector(".menu-trigger");
let menu = document.querySelector(".navbar");

close_trigger.onclick = ()=>{
    menu.classList.remove("active");
}
menu_trigger.onclick = ()=>{
    console.log("clicked")
    menu.classList.add("active");
}

triggers.forEach((e)=>{
    e.addEventListener("click",(e)=>{
        let parent = e.target.parentElement;
        console.log(parent);
        let img = e.target.children[0];
        img.classList.toggle("active");
        let ul  = parent.querySelector("ul");
        if(window.innerWidth >= 768){
            check(ul); 
            ul.classList.toggle("active");
        }else{
            ul.classList.toggle("expanse");
        }
    });
});
function check(ul){
    if(!ul.classList.contains("active")){
        reset();
    }

}
function reset(){
    triggers.forEach((e)=>{
         let ul =e.children[1];
         ul.classList.remove("active");
        
    });
}