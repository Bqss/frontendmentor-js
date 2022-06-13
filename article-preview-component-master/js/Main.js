let trigger = document.querySelector(".trigger");
let response = document.querySelector(".response");

trigger.onmouseover = ()=>{
    response.classList.add('show');
};
trigger.onmouseout = ()=>{
    response.classList.remove('show');
    response.onmouseover =()=>{
        response.classList.add('show');
    };
    response.onmouseout = ()=>{
        response.classList.remove('show');
    }
}

