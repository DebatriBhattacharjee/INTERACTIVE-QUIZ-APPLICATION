const questions = [
    {
        question: "In which movie did Heath Ledger potray the Joker?" ,
        answers: [
            {text: "The Dark Knight", correct: true},
            {text: "Batman Begins", correct: false},
            {text: "The Dark Knight Rises", correct: false},
            {text: "Joker", correct: false},
        ]
    },
    {
        question: "In what year did the Great October Socialist Revolution take place?" ,
        answers: [
            {text: "1917", correct: true},
            {text: "1923", correct: false},
            {text: "1914", correct: false},
            {text: "1920", correct: false},
        ]
    },
    {
        question: "What is the largest lake in the world?" ,
        answers: [
            {text: "Caspian Sea", correct: false},
            {text: "Baikal", correct: true},
            {text: "Lake Superior", correct: false},
            {text: "Ontario", correct: false},
        ]
    },
    {
        question: " Which planet in the solar system is known as the “Red Planet”?" ,
        answers: [
            {text: "Venus", correct: false},
            {text: "Earth", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
        ]
    },
    {
    question: " Who wrote the novel “War and Peace”?" ,
        answers: [
            {text: "Anton Chekhov", correct: false},
            {text: "Leo Tolstoy", correct: true},
            {text: "Fyodor Dostoevsky", correct: false},
            {text: "Ivan Turgenev", correct: false},
        ]
    },
    {
        question: " What is the capital of Japan?" ,
        answers: [
            {text: "Beijing", correct: false},
            {text: "Seoul", correct: false},
            {text: "Bangkok", correct: false},
            {text: "Tokyo", correct: true},
        ]
    },
    {
        question: "Who created the comic character Spider-Man?" ,
        answers: [
            {text: "Jack Kirby", correct: false},
            {text: "Stan Lee", correct: true},
            {text: "Steve Ditko", correct: false},
            {text: "Ruskin Bond", correct: false},
        ]
    },
    {
        question: "Which artist released the album 'Lover' in 2019?" ,
        answers: [
            {text: "Billie Eilish", correct: false},
            {text: "Ed Sheeran", correct: false},
            {text: "Taylor Swift", correct: true},
            {text: "Ariana Grande", correct: false},
        ]
    },
    {
        question: "Which is the smallest continent in the world?" ,
        answers: [
            {text: "Asia", correct: false},
            {text: "Oceania", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },
    {
        question: "In what year did World War II end?" ,
        answers: [
            {text: "1930", correct: false},
            {text: "1940", correct: false},
            {text: "1945", correct: true},
            {text: "1960", correct: false},
        ]
    },
    {
        question: " Which river is the longest in the world?" ,
        answers: [
            {text: "Amazon", correct: false},
            {text: "Mississippi", correct: false},
            {text: "Yangtze", correct: false},
            {text: "Nile", correct: true},
        ] 
    },
    {
        question: "What gas is used to extinguish fires?" ,
        answers: [
            {text: "Oxygen", correct: false},
            {text: "Nitrogen", correct: true},
            {text: "Carbon dioxide", correct: false},
            {text: "Hydrogen", correct: false},
        ] 
    },
    {
         question: "What animal is the national symbol of Australia?" ,
        answers: [
            {text: "Kangaroo", correct: true},
            {text: "Koala", correct: false},
            {text: "Emu", correct: false},
            {text: "Crocodile", correct: false},
        ] 
    },
    {
        question: "Which city is called the “City of Winds?" ,
        answers: [
            {text: "Chicago", correct: true},
            {text: "Seattle", correct: false},
            {text: "Washington", correct: false},
            {text: "New York", correct: false},
        ] 
    },
    {
        question: "Which organ in the human body is responsible for secreting insulin?" ,
        answers: [
            {text: "Liver", correct: false},
            {text: "Kidneys", correct: false},
            {text: "Pancreas", correct: true},
            {text: "Stomach", correct: false},
        ] 
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();