// Initialization
let activePlayer,gaming;                   // gaming is to stop game after completion
let playerScore,moves,finalscore; 
// To start the game
Initialization();

document.querySelector('.btn-roll').addEventListener('click',function(){  // Roll dice button
  if(gaming){
    dice=Math.floor(Math.random()*6)+1;                             // random no for dice
 document.querySelector('.dice').style.display='block';
 document.querySelector('.dice').src= `dice-${dice}.png`;

 if(moves[0]>0){                              // run the game until moves is finished
     Run();
     
}
 else{  
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('#update').innerText=finalscore[activePlayer];     // to update the target
     activePlayer=1;
     
     if(moves[1]>0){                          // run until moves=0 
     Run();
     if(moves[1]>=0 && finalscore[0]<finalscore[1]){              // if player 2 wins
        document.querySelector('#winner').style.display='block';
        document.querySelector('#winner').innerText= `Player 2 won by ${moves[1]} moves left with score ${finalscore[1]}`;
        document.querySelector('.player-1-panel').classList.remove('active');
        gaming=false;                                                               // to stop the game after finishing

     }
     if(moves[1]==0 && finalscore[0]==finalscore[1]){              // if game draws
        document.querySelector('#winner').style.display='block';
        document.querySelector('#winner').innerText= `Match is draw.`;
        document.querySelector('.player-1-panel').classList.remove('active');
        gaming=false;                                                                        // to stop the game after finishing
     }
     if(moves[1]<=0 && finalscore[0]>finalscore[1]){                                      // if player 1 wins
        document.querySelector('#winner').style.display='block';
        document.querySelector('#winner').innerText= `Player 1 won by ${finalscore[0]-finalscore[1]} runs left.`;
        document.querySelector('.player-1-panel').classList.remove('active');
        gaming=false;                                                                       // to stop the game after finishing
     }
    }
     }
    }
    });
    document.querySelector('.btn-new').addEventListener('click',Initialization);  // new game button
       
    // Run the Game
    function Run(){
    playerScore[activePlayer]+=dice;
    document.querySelector('#score-'+activePlayer).innerText=playerScore[activePlayer];
    moves[activePlayer]--;
    document.querySelector('#move-'+activePlayer).innerText=moves[activePlayer];
    finalscore[activePlayer]=playerScore[activePlayer];
    document.querySelector('#final-'+activePlayer).innerText=finalscore[activePlayer]; 
}
// Start from first
function Initialization(){
    gaming=true;                                                      // at start gaming is true
    // All scores are 0 at first and player 1 is active
    activePlayer=0;
    playerScore=[0,0];
    moves=[5,5];                          // moves initiliazation
    finalscore=[0,0];                     // final scores are zero
   document.querySelector('.dice').style.display='none';
   document.querySelector('#score-0').innerText='0';
   document.querySelector('#score-1').innerText='0';
   document.querySelector('#move-0').innerText='5';
   document.querySelector('#move-1').innerText='5';
   document.querySelector('#final-0').innerText='0';
   document.querySelector('#final-1').innerText='0';
   document.querySelector('#winner').style.display='none';
   document.querySelector('.player-0-panel').classList.add('active');
   }
   
   // The End . HAPPY CODING
   // BY Saral Karki