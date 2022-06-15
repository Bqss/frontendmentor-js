let tf = document.querySelector('#tf1');
let iconError = document.querySelector(".error");
let warning = document.querySelector(".warning");
let value ;
let email = ["gmail.com","yahoo.com","email.com"];
let isTrue;
tf1.onchange = ()=>{
    get();
}
tf1.onkeyup = ()=>{
    get();
    
}

let check = ()=>{
    if(value.includes("@")){
        for(let a of email){
            if(value.includes(a)){
                return true;
            }
        }
        return false;
    }else{
        return false;
    }
    
}

let validate = ()=>{
   
    if(isTrue){
        add();
        
    }else{
        remove();
    }
}

function add(){
    iconError.classList.add("hide");
    warning.classList.add("hide");
}
function remove(){
    iconError.classList.remove("hide");
    warning.classList.remove("hide");
}
function get(){
    value = tf1.value;
    if(value === ""){
        add();
    }else{
        isTrue = check();
        validate();
    }
}