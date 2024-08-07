
        let userscore=0;
        let compscore=0;

       const choices=document.querySelectorAll(".choice");
       const msg=document.querySelector("#msg");
       const userscorePara=document.querySelector("#user-score");
       const compscorePara=document.querySelector("#comp-score");
       const genCompChoice=()=>{
        const options=["rock","paper","scissor"];
       const ranIdx= Math.floor(Math.random()*3);
       return options[ranIdx];
       }

       const drawGame=()=>{
        console.log("gamme was draw");
        msg.innerText="game was draw";
       }

       const showWinner=(userwin)=>{
        if(userwin){
          console.log("you win");
          msg.innerText="you win";
          userscore++;
          userscorePara.innerText=userscore;
        }
        else{
          console.log("you lose");
          msg.innerText="you lose";
          compscore++;
          compscorePara.innerText=compscore;
        }
       }

       const  playGame=(userchoice)=>{
        console.log("user choice= ",userchoice);
        const CompChoice=genCompChoice();
        console.log("comp choice= ",CompChoice);

        if(userchoice===CompChoice){
          drawGame();
        }
        else{
          let userwin=true;
          if(userchoice==="rock"){
            userwin=CompChoice==="paper"?false:true;
          } else if(userchoice="paper"){
            userwin=CompChoice==="scissors"?false:true;
          } else{
            userwin=CompChoice==="rock"?false:true;
          }
          showWinner(userwin);
        }
       };


       choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
         const userchoice=choice.getAttribute("id");
         playGame(userchoice);
        });
       });
