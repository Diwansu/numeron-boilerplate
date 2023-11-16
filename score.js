// Iteration 5: Store the player score and display it on the game over screen
  
let points = localStorage.getItem("score") 

let scoreBoard = document.getElementById("score-board") 
scoreBoard.innerText = points ;
console.log(points) ;

let playAgain = document.getElementById("play-again-button") 
 playAgain.onclick = prev 
 function prev(){
    location.href = './index.html'
 }  



