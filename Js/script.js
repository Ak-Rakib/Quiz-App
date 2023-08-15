
// -------- Array of object
const quizData = [
    {
        question: "What does JSX stand for in React?",

        a: "JavaScript XML",
        b: "Java Serialized XML",
        c: "JSON XML",
        d: "JavaScript XSL",
        correctAnswer: "a"
    },
    {
        question: "Which method is used to change the state of a component in React?",

        a: "setState()",
        b: "changeState()",
        c: "updateState()",
        d: "modifyState()",
        correctAnswer: "a"
    },
    {
        question: "What is the virtual DOM in React?",

        a: " A representation of the actual DOM in memory",
        b: " An alternative to HTML",
        c: " A way to style components",
        d: " A type of conditional statement",
        correctAnswer: "a"
    },
    {
        question: "Which lifecycle method is called after a component's render method?",

        a: "componentDidUpdate",
        b: "componentWillUpdate",
        c: "componentWillRender",
        d: "componentRendered",
        correctAnswer: "a"
    },
    {
        question: "In React, props are...",

        a: "immutable",
        b: "mutable",
        c: "local variables",
        d: "global variables",
        correctAnswer: "a"
    },
    {
        question: "What is the purpose of useRef hook in React?",
        a: "a) To create a reference to a DOM element",
        b: "b) To fetch data from an API",
        c: "c) To update the component's state",
        d: "d) To handle asynchronous operations",
        correctAnswer: "a"
    },
    {
        question: "Which hook is used for performing side effects in functional components?",
        a: "useEffect",
        b: "useSideEffect",
        c: "useLifecycle",
        d: "useAction",
        correctAnswer: "a"
    },
    {
        question: "What is the main purpose of the key prop in React when rendering lists?",

        a: "To uniquely identify elements and improve performance",
        b: "To add styling to list items",
        c: "To provide additional data to child components",
        d: "To reorder the list items",

        correctAnswer: "a"
    },
    {
        question: "Which component lifecycle method is invoked right before a component is removed from the DOM?",

        a: "componentWillUnmount",
        b: "componentDidUnmount",
        c: "componentRemoved",
        d: "componentWillRemove",


        correctAnswer: "a"
    },
    {
        question: "What does React Router do?",

        a: "Enables navigation and routing in a single-page React application",
        b: "Optimizes the performance of React components",
        c: "Manages global state in a React application",
        d: "Handles authentication and user authorization",

        correctAnswer: "a"
    }
];



// -------- Get Id and class from Html elements
const resultText = document.getElementById("quiz");
const answersEl = document.querySelectorAll(".answer");
const quizQuestion = document.getElementById("question");
const a_option = document.getElementById("a_option");
const b_option = document.getElementById("b_option");
const c_option = document.getElementById("c_option");
const d_option = document.getElementById("d_option");
const quizSubmit = document.getElementById("submit");


// -------- Get random variable and set value 0
let currentQuiz = 0;
let score = 0;


loadQuiz();


function loadQuiz() {
    deSelected();
    const currentQuizData = quizData[currentQuiz]
    quizQuestion.innerText = currentQuizData.question;
    a_option.innerText = currentQuizData.a;
    b_option.innerText = currentQuizData.b;
    c_option.innerText = currentQuizData.c;
    d_option.innerText = currentQuizData.d;
}



function optionSelected() {
    let answerCk = undefined;
    answersEl.forEach((answer) => {
        // console.log(answer.value)
        // console.log(answer.checked);
        if (answer.checked) {
            answerCk = answer.id
        }
    })
    return answerCk;
}


function deSelected(){
    answersEl.forEach((answer) => {
        answer.checked = false;
    })
}



quizSubmit.addEventListener("click", () => {
    // ------- Check see the answer
    const answer = optionSelected();
    console.log(answer);

    if (answer) {
        if(answer === quizData[currentQuiz].correctAnswer){
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            // TO:DO -> SHOWING RESULT
            resultText.innerHTML = `<h2>Your Score is ${score}/${quizData.length}</h2>`
        }
    }
});

loadQuiz();


