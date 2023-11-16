// Iteration 2: Generate 2 random number and display it on the screen
 const box1 = document.getElementById("number1")
 let number1 = Math.round (Math.random()*100);
 

 const box2= document.getElementById("number2")
 let number2= Math.round(Math.random()*100);
  
 box1.innerText= number1 
 box2.innerText = number2 
// Iteration 3: Make the options button functional
 const greaterthan = document.getElementById("greater-than") 
 const equalto = document.getElementById("equal-to")
 const lesserthan = document.getElementById("lesser-than")
var score = 0;
 greaterthan.onclick = suj ;
 function suj(){
    if (number1>number2){
        score++ 
        reset (timerId)}else{
            localStorage.setItem("score",score);
            location.href ='./gameover.html'
        }
        number1 = Math.round (Math.random()*100);
        number2 = Math.round (Math.random()*100);

        box1.innerText= number1 
        box2.innerText= number2 
    }
  
    equalto.onclick = function(){
        if(number1===number2){
            score++
            reset (timerId)
        }else{
            localStorage.setItem("score",score);
            location.href='./gameover.html'
        }
        number1 = Math.round (Math.random()*100);
        number2 = Math.round (Math.random()*100);

        box1.innerText= number1 
        box2.innerText= number2  
       
    }

    lesserthan.onclick = function() {
        if(number1<number2){
            score++ 
            reset (timerId)
        }else{
            localStorage.setItem("score",score);
            location.href = './gameover.html'
        }
        number1 = Math.round (Math.random()*100);
        number2 = Math.round (Math.random()*100);

        box1.innerText= number1 
        box2.innerText= number2 
    }

// Iteration 4: Build a timer for the game
  var time=5 ;
  var timer=document.getElementById("timer") 
  var timerId ; 

   function showTimer (){
    time=5 
    timer.innerText=time 
    timerId =setInterval(()=>{
      time-- ;

    if(time==0){
        localStorage.setItem("score",score);
        location.href='./gameover.html';
    }
    timer.innerText=time ;
    },1000)
    }

    function reset (timerId){
        clearInterval(timerId) 
        showTimer()
    }

    showTimer() 


