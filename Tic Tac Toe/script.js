let boxes = document.querySelectorAll(".box");
let msgcontainer = document.querySelector(".msg-container");
let NewGame = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let resetGame = document.querySelector("#reset-btn");

let turn0 = true;

let  winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const resetgame = ()=>{
    turn0 = true;
    enablebox();
    msgcontainer.classList.add("hide");
  }

  boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("button was clicked");
        if(turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
  })

  const enablebox = ()=> {
    for(box of boxes ) {
        box.disabled = false;
        box.innerText = ""; 
    }
  }


  const disablebox = ()=> {
    for(box of boxes ) {
        box.disabled = true;
    }
  }

  const showWinner = (winner)=>{
    msg.innerText = `congrululations, winner is ${winner}`
    msgcontainer.classList.remove("hide");
    disablebox();
  }

  const checkWinner = ()=>{
    for(pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
    
  }
}

NewGame.addEventListener("click", resetgame);
resetGame.addEventListener("click", resetgame);