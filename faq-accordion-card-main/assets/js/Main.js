let  triggers = document.querySelectorAll(".faq .top");
let box = document.querySelector(".img-1");

for(let trigger of triggers){

    trigger.addEventListener('click',(a)=>{
        if(!(trigger.classList.contains('Active'))){
            removeAll();
        }
        trigger.classList.toggle('Active');
    });
    trigger.onmouseenter = ()=>{
        box.classList.add("Hover");
    };
    trigger.onmouseleave = ()=>{
        box.classList.remove("Hover");
    };
}
function removeAll(){
    for(let tr of triggers){
        tr.classList.remove("Active");
    }
}

