
//select all elements
const start=document.getElementById("start");
const quiz=document.getElementById("quiz");
const question=document.getElementById("question");
const qImg=document.getElementById("qImg");
const choiceA=document.getElementById("A");
const choiceB=document.getElementById("B");
const choiceC=document.getElementById("C");
const counter=document.getElementById("counter");
const timeGauge=document.getElementById("timeGauge");
const progress=document.getElementById("progress");
const scoreDiv=document.getElementById("score");

//create our questions
let questions=[
    {
        question:"what does HTML stand for?",
        imgSrc:"img/html.png",
        choiceA:"Correct",
        choiceB:"Wrong",
        choiceC:"Wrong",
        correct:"A"
    },
    {
        question:"what does CSS stand for?",
        imgSrc:"img/css.png",
        choiceA:"Wrong",
        choiceB:"Correct",
        choiceC:"Wrong",
        correct:"B"
    }, {
        question:"what does JS stand for?",
        imgSrc:"img/js.png",
        choiceA:"Wrong",
        choiceB:"Wrong",
        choiceC:"Correct",
        correct:"C"
    }
]

//create some variables
const lastQuestion=questions.length-1;
let runningQuestion=0;
let count=0;
const questionTime=10; //10s
const gaugeWidth=150; //150px
const gaugeUnit=gaugeWidth/questionTime;
let TIMER;

//render a question
function renderQuestion(){
    let q=questions[runningQuestion];

    question.innerHTML="<p>"+q.question+"</p>";
    qImg.innerHTML="<img src=" +q.imgSrc+">";
    choiceA.innerHTML=q.choiceA;
    choiceB.innerHTML=q.choiceB;
    choiceC.innerHTML=q.choiceC;
}

start.addEventListener("click",startQuiz)

// start quiz
function startQuiz(){
    start.style.display="none";
    renderQuestion();
    quiz.style.display="block";
    renderProgress();
    renderCounter();
    TIMER=setInterval(renderCounter,1000); //1000ms=1s
}

//render progress
function renderProgress(){
    for(let qIndex=0; qIndex <=lastQuestion;qIndex++){
        progress.innerHTML+="<div class='prog' id="+qIndex+"></div>"
    }
}

//counter render


function renderCounter(){
    if (count<=questionTime){
        counter.innerHTML=count;
        timeGauge.style.width = count * gaugeUnit+"px";
        count++;
    }else{
        count=0;
    }
}