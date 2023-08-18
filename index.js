let ranNum = parseInt(Math.random()* 100 + 1)
console.log(ranNum);

let btn=document.getElementById("btn")

let userInput = document.getElementById("userInput")

let questionMark =document.getElementById("questionMark")

let body = document.getElementsByTagName("body")

let stratguesstext =document.getElementById("scor")

let reloadgame =document.getElementById('reloadgame')

let initialscore=100
let highscore=null;

btn.addEventListener("click",function(){

    userInput= document.getElementById("userInput").value

    if(userInput == ranNum){
        questionMark.innerText=`${ranNum}`;
        scor.innerText="🤩 Hurray You Won !!! 🤩";
        document.body.style.backgroundColor="green";
        initialscore--
        document.querySelector('#score').textContent= "💯 Chances: " + initialscore*0
        highscore=initialscore
        document.querySelector('#highscore').textContent= "🥇 Highscore: " + highscore
    }
    else if(userInput < ranNum){
        scor.innerText="Your Guess Is Low";
        initialscore--
        document.querySelector('#score').textContent= "💯 Chances: " + initialscore
    }
    else if (userInput>ranNum){
        scor.innerText="Your Guess Is High";
        initialscore--
        document.querySelector('#score').textContent= "💯 Chances: " + initialscore

    }
})
