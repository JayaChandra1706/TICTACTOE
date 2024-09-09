let btns=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let winnerText=document.querySelector(".winnerText");
let newGame=document.querySelector(".newGame");
let container=document.querySelector(".container");
let showWinner=document.querySelector(".showWinner");


let turnX=true;

const winningSets = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(turnX){
            btn.innerHTML="X";
            turnX =false;
        }else{
            btn.innerHTML="O";
            turnX=true;
        }
        btn.disabled=true;
        checkWinner();
    })
})

const checkWinner=()=>{
      let winnerFound=false;
      for(set of winningSets){
        let firstPos=btns[set[0]].innerText;
        let secondPos=btns[set[1]].innerText; 
        let thirdPos=btns[set[2]].innerText;
        
        if(firstPos != "" && secondPos !="" && thirdPos != ""){
            if(firstPos===secondPos && secondPos===thirdPos){
                console.log(`Winner is ${firstPos}`);
                winnerFound=true;
                printWinner(firstPos);
            }
        }
     }
     if(!winnerFound){
        checkDraw();
     }
}



const checkDraw=()=>{
    let check=true;
    for(btn of btns){
        if(btn.innerHTML==""){
            check=false;
        }
    }
    if(check){
      disableBtns();
      winnerText.innerHTML="Match was Drawn";
      showWinner.classList.remove("hide");
      container.classList.add("hide");
    }
}

const printWinner=(winner)=>{
      disableBtns();
      winnerText.innerHTML=`Congratulations Player ${winner} has Won`;
      showWinner.classList.remove("hide");
      container.classList.add("hide");
}

const disableBtns=()=>{
    for(btn of btns){
        btn.disabled=true;
    }
}

const enableBtns=()=>{
    for(btn of btns){
        btn.disabled=false;
        btn.innerHTML="";
    }
}

let reseting=()=>{
    enableBtns();
    turnX=true;
};

let game=()=>{
    enableBtns();
    turnX=true;
    showWinner.classList.add("hide");
    container.classList.remove("hide");
}

resetBtn.addEventListener("click",reseting);
newGame.addEventListener("click",game);


