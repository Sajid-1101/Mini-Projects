let boxes = document.querySelectorAll(".btn");
let reset =document.querySelector("#reset");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#para");
let newbutton = document.querySelector("#new-game");
turnO = true;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box has clicked");
        if(turnO){
            box.innerText = "O";
            box.classList.add("red");
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const disableboxes = ()=>{
    for( let b of boxes){
        b.disabled =true;
    }
}
const enableboxes = ()=>{
    for( let b of boxes){
        b.disabled =false;
        b.classList.remove("red");
        b.innerText ="";
    }
}
const resetgame = ()=>{
    turnO=true;
    enableboxes();   
    msgContainer.classList.add("hide");
}
let pattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
]
const show = (w)=>{
    msg.innerText = `Congratulations !!,Winner is ${w}`;
    msgContainer.classList.remove("hide");
}
checkWinner = ()=>{
    for(p of pattern){
        let p1 = boxes[p[0]].innerText;
        let p2 = boxes[p[1]].innerText;
        let p3 = boxes[p[2]].innerText;
        if(p1 != "" && p2 != "" && p3 != ""){
            if((p1==p2)&&(p2==p3)){
                disableboxes() ;              
                show(p1);
            }
        }
    }
}
newbutton.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);