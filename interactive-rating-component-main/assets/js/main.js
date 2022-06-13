let options = document.querySelectorAll('.number');
let submitbBtn = document.querySelector('.btn button');
let feedback = document.querySelector('.feedback');
let rating = document.querySelector('#selected-opt');
let ir = document.querySelector('.interactive-rating');
let select = -1;





function getindeks(){
    
    options.forEach((opt,index)=>{
        if(opt.classList.contains('selected')){
            select = index + 1;
            
        }
    });
}

options.forEach((opt)=>{
    
    
    opt.addEventListener('click',(e)=>{
       
        
        if(!(e.target.classList.contains('selected'))){
            clear();
        }
        opt.classList.toggle('selected');
        getindeks();

        
    });
   
    
});
function clear(){
    options.forEach((opt)=>{
        opt.classList.remove('selected');
    });
}

// if indeks equals to -1 display alert , if else show the feedback and hidden the rating section
submitbBtn.addEventListener('click',()=>{
    if(select == -1){
        alert('please input your rating');
    }else{
        rating.innerHTML = select;
        feedback.classList.add('show');
        ir.style.display= 'none';
    }
    
});