const quizData = [
    {
        question: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Jupiter",
        c: "Saturn",
        d: "Mars",
        correct: "b",
    },
    {
        question: "What is the hottest planet in our solar system?",
        a: "Earth",
        b: "Mars",
        c: "Mercury",
        d: "Venus",
        correct: "c",
    },
    {
        question: "Which planet is often called the 'Red Planet'?",
        a: "Mercury",
        b: "Venus",
        c: "Earth",
        d: "Mars",
        correct: "d",
    },
    {
        question: "What is the smallest planet in our solar system?",
        a: "Mercury",
        b: "Venus",
        c: "Earth",
        d: "Mars",
        correct: "a",
    },
    {
        question: "What is the main component of the Sun?",
        a: "Hydrogen",
        b: "Helium",
        c: "Oxygen",
        d: "Carbon",
        correct: "a",
    },
    {
        question: "How long does it take Earth to orbit the Sun?",
        a: "365 days",
        b: "360 days",
        c: "370 days",
        d: "380 days",
        correct: "a",
    },
    {
        question: "Which planet has the most moons in our solar system?",
        a: "Jupiter",
        b: "Saturn",
        c: "Uranus",
        d: "Neptune",
        correct: "b",
    },
    {
        question: "What planet spins the fastest?",
        a: "Jupiter",
        b: "Saturn",
        c: "Uranus",
        d: "Neptune",
        correct: "a",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})