let btn = document.querySelector('#btn1');
let val = document.querySelector('.validate');
let tf = document.querySelector('#tf1');
let email = ['gmail.com','email.com','yahoo.com','yahoo.co.id'];
let isTrue;
let value;

btn.onclick = ()=>{
    validate();
}
tf.onkeyup= ()=>{
    if(tf.value == ""){
        removeError();
    }
}

function validate(){
    value = tf.value;
    isTrue = false;
    if(value==""){
        alert("email can't be empty");
    }else{
        if(value.includes("@")){
            email.forEach((e)=>{
                if(value.includes(e)){
                    isTrue = true;
                }
            });
        }
    }

    if(!isTrue){
        addError();
    }
}

function addError(){
    tf.classList.add('error');
    val.style.display="block";
}
function removeError(){
    tf.classList.remove('error');
    val.style.display="none";
}