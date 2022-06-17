
let tfs = document.querySelectorAll(".tf");
let btn = document.querySelector(".submit");
let value;

btn.addEventListener("click",()=>{
    validate();
});



let validate = ()=>{
    tfs.forEach((e,index)=>{
        removeError(e);
        value = e.value;
        if(value ==""){
            addError(e);

        }
        if(index==2){
            if(!value.includes("@")||!value.includes(".com")){
                addError(e);
            }
        }
    });
};

function addError(e){
    let val = e.parentElement;
    // children return all of child , childnodes return all child with specified element
    let child = val.children;
    for(let e of child){
        e.classList.add("error")
    }
};

function removeError(e){
    let val = e.parentElement;
    // children return all of child , childnodes return all child with specified element
    let child = val.children;
    
    for(let e of child){
        e.classList.remove("error")
    }
}

