// snake water and gun

let box1=document.querySelector("#box");
let box2=document.querySelector("#boxx");
let but=document.querySelectorAll("button");

let ar=Array.from(but);
ar.forEach(but => {
but.addEventListener('click',(err)=>{
    console.log("clicked");
    let string=err.target.innerHTML;
    console.log(string);
    box1.value=string;
computer();
winnerr();
})
})
function computer() {
let arr=["Snake","Gun","Water"];
let b=Number.parseInt(Math.random()*arr.length);
let c=arr[b];
console.log(c);
box2.value=c;
}
let win=document.querySelector(".win");
function winnerr(){
if(box2.value=="Snake" && box1.value== "Water"){
    win.value="computer win ";

}
else if(box2.value=="Water" && box1.value=="Snake"){
    win.value="you win";
}
 else if(box2.value=="Gun" && box1.value=="Water"){
   win.value="you win";
}

else if(box2.value=="Gun" && box1.value=="Gun"){
win.value="Draw";

}
else if(box2.value=="Snake" && box1.value=="Snake"){
    win.value="Draw";
    
    }
    else if(box2.value=="Water" && box1.value=="Water"){
        win.value="Draw";
        
        }
        else if(box2.value=="Gun" && box1.value=="Snake"){
           win.value="computer win";
            
            }
            else if(box2.value=="Snake" && box1.value=="Gun"){
                win.value="You win";
                 
                 }
            else if(box2.value=="Snake" && box1.value=="Water"){
                win.value="computer win";
                
                }else if(box2.value=="Water" && box1.value=="Gun"){
                    win.value="computer win";
                }
                
        else {
           win.value="badh dao";
        }
    }