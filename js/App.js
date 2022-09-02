const screen =document.querySelector("#screen");
const gridSize =document.querySelectorAll("[data-number]");
let number;

function removeDivs(){
    var child=screen.lastElementChild;
    while(child){
        screen.removeChild(child);
        child=screen.lastElementChild;
    }
}
function setGridSize (e){
    let value =e.target.getAttribute("data-number") ;
    let numberOfDivs=Math.pow(Number(value),2);
   
    if(value ==="8"){
        removeDivs();
        number=8;
     
    }
    else if(value==="16"){
        removeDivs();
        number=16;
       
    }
    else if(value==="32"){
       removeDivs();
        number=32;
       
    }
    else if(value==="64"){
        removeDivs();
        number=64;
        
    }
    console.log(number);
    screen.style.gridTemplateColumns=`repeat(${number},minmax(1px,1fr))`;
    screen.style.gridTemplateRows=`repeat(${number}, minmax(1px,1fr))`;
    for(let i=1; i<=numberOfDivs; i++){
        let div =document.createElement("div");
        div.className="div";
        
        screen.appendChild(div);
    } 
}
gridSize.forEach(elements=>{
    elements.addEventListener('click',setGridSize);
})

console.log(screen.textContent);
