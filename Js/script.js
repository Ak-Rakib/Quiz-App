
// -------- Array of object
const quizData = [
    {
        question: "What does JSX stand for in React?",

        a: "JavaScript XML",
        b: "Java Serialized XML",
        c: "JSON XML",
        d: "JavaScript XSL",
        correctAnswer: "a) JavaScript XML"
    },
    {
        question: "Which method is used to change the state of a component in React?",

        a: "setState()",
        b: "changeState()",
        c: "updateState()",
        d: "modifyState()",
        correctAnswer: "a) setState()"
    },
    {
        question: "What is the virtual DOM in React?",

        a: " A representation of the actual DOM in memory",
        b: " An alternative to HTML",
        c: " A way to style components",
        d: " A type of conditional statement",
        correctAnswer: "a) A representation of the actual DOM in memory"
    },
    {
        question: "Which lifecycle method is called after a component's render method?",

        a: "componentDidUpdate",
        b: "componentWillUpdate",
        c: "componentWillRender",
        d: "componentRendered",
        correctAnswer: "a) componentDidUpdate"
    },
    {
        question: "In React, props are...",

        a: "immutable",
        b: "mutable",
        c: "local variables",
        d: "global variables",
        correctAnswer: "a) immutable"
    },
    {
        question: "What is the purpose of useRef hook in React?",
        a: "a) To create a reference to a DOM element",
        b: "b) To fetch data from an API",
        c: "c) To update the component's state",
        d: "d) To handle asynchronous operations",
        correctAnswer: "a) To create a reference to a DOM element"
    },
    {
        question: "Which hook is used for performing side effects in functional components?",
        a: "useEffect",
        b: "useSideEffect",
        c: "useLifecycle",
        d: "useAction",
        correctAnswer: "a) useEffect"
    },
    {
        question: "What is the main purpose of the key prop in React when rendering lists?",

        a: "To uniquely identify elements and improve performance",
        b: "To add styling to list items",
        c: "To provide additional data to child components",
        d: "To reorder the list items",

        correctAnswer: "a) To uniquely identify elements and improve performance"
    },
    {
        question: "Which component lifecycle method is invoked right before a component is removed from the DOM?",

        a: "componentWillUnmount",
        b: "componentDidUnmount",
        c: "componentRemoved",
        d: "componentWillRemove",


        correctAnswer: "a) componentWillUnmount"
    },
    {
        question: "What does React Router do?",

        a: "Enables navigation and routing in a single-page React application",
        b: "Optimizes the performance of React components",
        c: "Manages global state in a React application",
        d: "Handles authentication and user authorization",

        correctAnswer: "a) Enables navigation and routing in a single-page React application"
    }
];

// -------- Operation
const quizQuestion = document.getElementById("question");

const a_option = document.getElementById("a_option");
const b_option = document.getElementById("b_option");
const c_option = document.getElementById("c_option");
const d_option = document.getElementById("d_option");
const quizSubmit = document.getElementById("submit");

let currentQuiz = 0;



function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]

    quizQuestion.innerText = currentQuizData.question;
    a_option.innerText = currentQuizData.a;
    b_option.innerText = currentQuizData.b;
    c_option.innerText = currentQuizData.c;
    d_option.innerText = currentQuizData.d;
    // currentQuiz++;
   

}


quizSubmit.addEventListener("click", () => {
    currentQuiz++;
    loadQuiz();
});

loadQuiz();


