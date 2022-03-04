console.log("Hello Ajith");
let ding = new Audio("ding.wav");
let victory = new Audio("victory.mp3");

let winner='';

let turn = "X";
const ChangeTurn = () =>{
    return turn==="X"?"0":"X";
}
var s = window.matchMedia("(max-width: 500px)")
    if(s.matches){
        document.getElementById("Welcome").style.display="none";
    }

const Checkwin = () =>{
    let boxtext = document.getElementsByClassName("box");
   let wins =[
        [0, 1, 2, 27, 4, 0],
        [3, 4, 5, 27, 12, 0],
        [6, 7, 8, 27, 20, 0],
        [0, 3, 6, 19, 12, 90],
        [1, 4, 7, 27, 12, 90],
        [2, 5, 8, 35, 12, 90],
        [0, 4, 8, 27, 12, 45],
        [2, 4, 6, 27, 12, 135]
   ]
   wins.forEach(e =>{
if((boxtext[e[0]].innerText ===  boxtext[e[1]].innerText) && (boxtext[e[0]].innerText ===  boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== ''))
{    
    var x = window.matchMedia("(max-width: 1000px)")
    if(x.matches){
        document.querySelector(".line").style.display="none";
    }else{
        document.querySelector(".line").style.display="block";
    }
    winner=boxtext[e[0]].innerText;
    document.getElementById("winner").innerText=winner+" is the winner"
    victory.play();
    document.querySelector(".line").style.left = `${e[3]}vw`;
    document.querySelector(".line").style.top =`${e[4]}vw`;
    document.querySelector(".line").style.transform = `rotate(${e[5]}deg)`;
    setTimeout(() => { Reset() }, 6000);

}
   })
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    // console.log(element.querySelector(".boxtext"));
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            ding.play()
            boxtext.innerText=turn;
            turn = ChangeTurn();
           Checkwin()
           document.getElementById("turnturn").innerText= turn;
        }
    })
})

const Reset=()=>{
     document.querySelector(".line").style.display="none";
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element=>{

        let boxtext = element.querySelector('.boxtext');
        boxtext.innerText = '';
           
        }) 
        document.getElementById("turnturn").innerText= "X";
        turn="X";
}

const myReset=()=>{
    document.querySelector(".line").style.display="none";
    document.getElementById("winner").innerText='';
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element=>{

        let boxtext = element.querySelector('.boxtext');
        boxtext.innerText = '';
           
        }) 
        document.getElementById("turnturn").innerText= "X";
        turn="X";
        
}