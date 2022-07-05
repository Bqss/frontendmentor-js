// importing json file as data 
import data from "./data.json" assert{type:"json"};
// getting the chart container 
let chart = document.querySelector(".charts");
// getting all data ammount and convert it into a array 
let total = data.map((e)=> parseInt(e.amount));
// sort 
total.sort();

// adding chart with amount and day name in each iteration
window.onload= ()=>{
    data.forEach((e,i)=>{
        let child = createChart(e.amount , e.day);
        // creating a chart and add into parent 
        chart.innerHTML += child;
        // check it's max or not , if max add "max "class into fill class inside the element
        checkIsMax(e.amount ,i);
    });
    
}


function createChart(data,dayName){

    return `
    <div class="chart">
        <div class="diagram">
            <div class="fill" style="height : ${data/70*100}%">
                <p class="ammount">$${data}</p>
            </div>
        </div>
        <p class="day-name">${dayName}</p> 
    </div>
    `;
}

function checkIsMax(data , index){
    if(parseInt(data) ==  total[total.length-1]){
        console.log("true")
        // get the fill class at nth chart based on the index of data 
        document.querySelector(`.chart:nth-of-type(${index+1}) .fill`).classList.add("max");
    }
}





