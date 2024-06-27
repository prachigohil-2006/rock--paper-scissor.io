let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateComputerChoice = () => {
    let options = ["rock","paper","scissor"];
    //rock,paper,scissor
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
    

};

const drawGame = () => {
    
    msg.innerText = "The Game Was Draw!";
    msg.style.backgroundColor = "grey";
    
};

const showWinner = (userWin,userChoice,computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You Win!Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
         
        msg.innerText = `You Lost!${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}

const playGame = (userChoice) => {
    console.log("your choice is =",userChoice);
    //generate computer choice
    const computerChoice = generateComputerChoice();
    console.log("computer's choice =",computerChoice);

    if(userChoice === computerChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //in this case computer's choice should be either paper or scissor
            userWin = computerChoice === "paper" ? false : true;

        }else if(userChoice === "paper"){
            
            //in this case computer's choice should be either rock or scissor
            userWin = computerChoice === "scissor" ? false:true;

        }else{
            //in this case computer's choice should be either rock or paper
            userWin = computerChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }

}

choices.forEach((choice) => {
    
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked!",userChoice);
        playGame(userChoice);
    });

});

