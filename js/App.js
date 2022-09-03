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
function createStartingGrid(){
    removeDivs();
    screen.style.gridTemplateColumns=`repeat(4,minmax(1px,1fr))`;
    screen.style.gridTemplateRows=`repeat(4, minmax(1px,1fr))`;
    for(let i=1; i<=16; i++){
        let div =document.createElement("div");
        div.className="div";
        screen.appendChild(div);
    } 
}
createStartingGrid();

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
    screen.style.gridTemplateColumns=`repeat(${number},minmax(1px,1fr))`;
    screen.style.gridTemplateRows=`repeat(${number}, minmax(1px,1fr))`;
    for(let i=1; i<=numberOfDivs; i++){
        let div =document.createElement("div");
        div.className="div";
       
        
        screen.appendChild(div);
    } 
    const divs=document.querySelectorAll(".div");

divs.forEach(element=>{
    element.addEventListener("mouseover",drawSketch);
});
   
}


const divs=document.querySelectorAll(".div");

divs.forEach(element=>{
    element.addEventListener("mouseover",drawSketch);
})

function drawSketch(e){
    e.target.classList.add("color");
}
console.log(divs);
gridSize.forEach(elements=>{
    elements.addEventListener('click',setGridSize);
});
console.log(this);

console.log(screen.textContent);
