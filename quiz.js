const quizData = {
    questions: [
        {
            question: "Which of the following is considered the brain of the computer? ",
            options: ["RAM", "CPU", " Hard Drive", "Motherboard "],
            answer: "CPU"
        },
        {
            question: " What does RAM stand for?",
            options: ["Readily Accessible Memory", "Random Access Memory", "Read-Only Memory", " Remote Access Memory "],
            answer: "Random Access Memory"
        },
        {
            question: "Which of these is a programming language?",
            options: [" Windows", "HTML", "Java", "Microsoft Word"],
            answer: "Java"
        },
        {
            question: " What is the purpose of an operating system?",
            options: ["To store files","To manage hardware and software resources","To run applications"," To connect to the internet "],
            answer: "To manage hardware and software resources"
        },
        {
            question: " Which of the following is a web browser? ",
            options: [" Microsoft Word", " Google Chrome", " Microsoft Excel", " PowerPoint "],
            answer: "Google Chrome"
        },
        {
            question: "What does CPU stand for?",
            options: ["Central Process Unit","Computer Processing Unit"," Central Processing Unit"," Control Processing Unit "],
            answer: " Central Processing Unit"
        },
        {
            question: "Which of these is a secondary storage device?",
            options: ["RAM", " Cache Memory", "Hard Drive", " Motherboard"],
            answer: "Hard Drive"
        }
    ]
};

let currentQuestion = 0;
let score = 0;
let selectedOption = null;
const questionElement = document.querySelector('.question');
const optionsElement = document.querySelector('.options');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const restartButton = document.getElementById('restart-btn');
const resultContainer = document.querySelector('.result-container');
const resultScore = document.getElementById('result-score');
const resultMessage = document.getElementById('result-message');
const progressElement = document.querySelector('.progress');
const quizContainer = document.querySelector('.quiz-container');

function loadQuestion() {
    const question = quizData.questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('div');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(button, option));
        optionsElement.appendChild(button);
    });       
    progressElement.textContent = `Question ${currentQuestion + 1} of ${quizData.questions.length}`;
    if (currentQuestion === quizData.questions.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
    } else {
        nextButton.style.display = 'block';
        submitButton.style.display = 'none';
    }
    selectedOption = null;
}
function selectOption(element, option) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    selectedOption = option;
}
function checkAnswer() {
    if (!selectedOption) return false;
    const question = quizData.questions[currentQuestion];
    const options = document.querySelectorAll('.option'); 
    options.forEach(option => {
        option.classList.remove('correct', 'incorrect');
        if (option.textContent === question.answer) {
            option.classList.add('correct');
        }
        if (option.textContent === selectedOption && selectedOption !== question.answer) {
            option.classList.add('incorrect');
        }
    });    
    if (selectedOption === question.answer) {
        score++;
    }   
    return true;
}
function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    restartButton.style.display = 'block';
    resultScore.textContent = `Your score: ${score} out of ${quizData.questions.length}`;
    const percentage = (score / quizData.questions.length) * 100;
    if (percentage>=80) {
        resultMessage.textContent = "Excellent! You're a quiz master!";
    } else if (percentage>=60) {
        resultMessage.textContent = "Good job! You know your stuff!";
    } else if (percentage >= 40) {
        resultMessage.textContent = "Not bad! Keep learning!";
    } else {
        resultMessage.textContent = "Keep practicing! You'll get better!";
    }
}
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedOption = null;
    quizContainer.style.display = 'block';
    loadQuestion();
}
nextButton.addEventListener('click', () => {
    if (!checkAnswer()) return;
    currentQuestion++;
    loadQuestion();
});
submitButton.addEventListener('click', () => {
    if (!checkAnswer()) return;
    showResult();
    restartButton.style.display = 'block';
});
restartButton.addEventListener('click', restartQuiz);
loadQuestion();