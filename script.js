let userScore = 0 ;
let compScore = 0 ;
const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
const playGame =(userChoice)=>{
    const compChoice  = generateComp();
    if(userChoice === compChoice){
        drawgame();
    }
    else{
        let userWin = true ;
        if(userChoice === "rock"){
            userWin = compChoice==="scissor"?true:false;
        }
        else if(userChoice === "paper"){
            userWin = compChoice==="rock"?true:false;
        }
        else{
            userWin = compChoice==="paper"?true:false;
        }
        showWinner(userWin ,userChoice,compChoice);
    }
}
const generateComp = ()=>{
    const option = ["rock" ,"paper","scissor"];
    const r = Math.floor(Math.random()*3) ;
    return option[r];
}
const drawgame = ()=>{
    msg.innerText = "Game was Draw, Play again!!";
    msg.style.backgroundColor = "rgb(30, 59, 59)";
}
const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText = `You Win !! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorepara.innerText = userScore;
    }
    else{
        msg.innerText = `You lose !! Your ${userChoice} beated by ${compChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorepara.innerText = compScore;
    }
}