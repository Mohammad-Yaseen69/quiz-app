let questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "C. Hyper Text Markup Language",
        options: [
            "A. Hyper Type Multi Language",
            "B. Hyper Text Multiple Language",
            "C. Hyper Text Markup Language",
            "D. Home Text Multi Language"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "A. Cascading Style Sheet",
        options: [
            "A. Cascading Style Sheet",
            "B. Cute Style Sheet",
            "C. Computer Style Sheet",
            "D. Codehal Style Sheet"
        ]
    },
    {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "A. Hypertext Preprocessor",
        options: [
            "A. Hypertext Preprocessor",
            "B. Hometext Programming",
            "C. Hypertext Preprogramming",
            "D. Programming Hypertext Preprocessor"
        ]
    },
    {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "D. Structured Query Language",
        options: [
            "A. Strength Query Language",
            "B. Stylesheet Query Language",
            "C. Science Question Language",
            "D. Structured Query Language"
        ]
    },
    {
        numb: 5,
        question: "What does XML stand for?",
        answer: "D. Extensible Markup Language",
        options: [
            "A. Excellent Multiple Language",
            "B. Explore Multiple Language",
            "C. Extra Markup Language",
            "D. Extensible Markup Language"
        ]
    },
    {
        numb: 6,
        question: 'Which planet is known as the "Red Planet"?',
        answer: "B. Mars",
        options: [
            "A. Venus",
            "B. Mars",
            "C. Jupiter",
            "D. Earth"
        ]
    },
    {
        numb: 7,
        question: ' Which river is the longest in Pakistan?',
        answer: "C. Indus",
        options: [
            "A. Ganges",
            "B. Yamuna",
            "C. Indus",
            "D. Brahmaputra"
        ]
    },

    {
        numb: 8,
        question: 'What is the capital of France?',
        answer: "A. Paris",
        options: [
            "A. Paris",
            "B. London",
            "C. Rome",
            "D. Berlin"
        ]
    },
    {
        numb: 9,
        question: "What is the largest ocean in the world?",
        answer: "C. Pacific Ocean",
        options: [
            "A. Atlantic Ocean",
            "B. Indian Ocean",
            "C. Pacific Ocean",
            "D. Arctic Ocean"
        ]
    },
    {
        numb: 10,
        question: "Which company is known for Windows operating system?",
        answer: "B. Microsoft",
        options: [
            "A. Apple",
            "B. Microsoft",
            "C. Google",
            "D. Amazon"
        ]
    },



];


// main div variables 
var startTextdiv = document.querySelector(".start");
var rulesDiv = document.querySelector(".rules-main");
var quizBox = document.querySelector("#quiz-box");
var resultBox = document.querySelector("#result-box");


var questionHtml = document.querySelector(".question");
var optionsParent = document.querySelectorAll(".option");
var optionGrandparent = document.querySelector(".options")
var timeValue = document.querySelector(".time-left");


var questionNumber = document.querySelector(".question-number");
var score = document.querySelector(".score");
var scoreCounter = 0;
var questionNumbercount = 0
let count = 10;


function startQuiz() {
    startTextdiv.style.display = "none"
    rulesDiv.style.display = "flex"
}

function exitBtn() {
    startTextdiv.style.display = "flex"
    rulesDiv.style.display = "none"
}
function startingQuizbtn() {
    quizBox.style.display = "flex"
    rulesDiv.style.display = "none"
    questionNumbercount = 0
    countdown();
    count = 10
    showQuestion()
}

function quitBtn() {
    scoreCounter = 0
    startTextdiv.style.display = "flex"
    resultBox.style.display = "none"
}

function replayBtn() {
    scoreCounter = 0;
    resultBox.style.display = "none"
    quizBox.style.display = "flex"

    questionNumbercount = 0
    showQuestion()
}
function nextBtn() {


    if (questionNumbercount < questions.length - 1) {
        questionNumbercount++;
        showQuestion()
    }
    else {
        resultBox.style.display = "flex"
        quizBox.style.display = "none"
        score.innerHTML = scoreCounter
    }
}
function showQuestion() {
    questionHtml.innerHTML = ` ${questionNumbercount + 1}. ${questions[questionNumbercount].question}`;


    var optionTag = `<div onclick="scoreIncrease(this)" class="option"><h3>${questions[questionNumbercount].options[0]} </h3></div>
    <div onclick="scoreIncrease(this)" class="option"><h3>${questions[questionNumbercount].options[1]} </h3></div>
    <div onclick="scoreIncrease(this)" class="option"><h3>${questions[questionNumbercount].options[2]} </h3></div>
    <div onclick="scoreIncrease(this)" class="option"><h3>${questions[questionNumbercount].options[3]} </h3></div>
    `


    optionGrandparent.innerHTML = optionTag

    questionNumber.innerHTML = questionNumbercount + 1


    countdown()
}

function scoreIncrease(val) {

    var userAns = val.textContent;
    var correctAns = questions[questionNumbercount].answer;

    var allOptions = optionGrandparent.children.length;
    if (userAns.trim() === correctAns.trim()) {
        scoreCounter += 10;
        val.classList.add("true");
        console.log("Correct");
    }
    else {
        val.classList.add("wrong")
        console.log("Wrong")

        for (var i = 0; i < allOptions; i++) {
            if (optionGrandparent.children[i].textContent.trim() == correctAns.trim()) {
                optionGrandparent.children[i].setAttribute("class", "option true")
            }
        }
    }
    for (var i = 0; i < allOptions; i++) {
        optionGrandparent.children[i].classList.add("disable")
    }
}

let intervalId = null;
function countdown() {
    let count = 10;

    if (intervalId !== null) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(function () {
        timeValue.textContent = count;
        count--;

        if (count < 0) {
            clearInterval(intervalId);
            questionNumbercount++
            showQuestion()
        }
    }, 1000);
}

showQuestion()