import data from "./../data.json" assert{type:"json"};

window.onload = ()=>{
    let container = document.querySelector(".container");
    console.log(container)
    for(let a of data){
        let parent = document.createElement('div');
        let judul = a.title.replace(" ","");
        parent.classList.add("box");
        parent.classList.add(judul);
        let content = document.createElement('div');
        content.classList.add("content");
        content.innerHTML = `
        <div class="title">
            <h5>${judul}</h5>
            <img src="assets/images/icon-ellipsis.svg">
        </div>`;
        for(let [k,v] of Object.entries(a["timeframes"])){
            content.innerHTML += createElement(k,v);
        }
        parent.appendChild(content);
        container.appendChild(parent);
    }

    let  texts = document.querySelectorAll(".text");
    let menus = document.querySelectorAll(".menus li");
    menus.forEach((e)=>{
        
        e.onclick= ()=>{
            
            reset(texts,menus);
            e.classList.add("active");
            for(let b of texts){
                if(b.classList.contains(e.innerText.toLowerCase())){
                    b.classList.add("active");
                }
            }
        }
    });
     
    
}
function reset(texts , menus){
    texts.forEach((e)=>{
        e.classList.remove("active");
    });
    menus.forEach((e)=>{
        e.classList.remove("active");
    });
}
function createElement(key,val){
    
    return key === "daily" ? `
        
        <div class="text ${key} active">
            <h1>${val.current}hrs</h1>
            <p>Last ${key.slice(0,key.length-2).replace("i","y")} - ${val.previous}hrs</p>
        </div>
       
    `: `
            <div class="text ${key}">
                <h1>${val.current}hrs</h1>
                <p>Last ${key.slice(0,key.length-2).replace("i","y")} - ${val.previous}hrs</p>
            </div>
    `; 
}
