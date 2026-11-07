
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which HTML tag creates a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "Which CSS property changes text color?",
        options: ["background-color", "font-size", "color", "text-style"],
        answer: "color"
    },
    {
        question: "Which tag inserts a line break?",
        options: ["<p>", "<br>", "<hr>", "<div>"],
        answer: "<br>"
    },
    {
        question: "Which selector is used for an ID in CSS?",
        options: [".header", "#header", "header", "*header"],
        answer: "#header"
    },
    {
        question: "Which tag displays an image?",
        options: ["<picture>", "<image>", "<img>", "<src>"],
        answer: "<img>"
    },
    {
        question: "Which CSS property changes background color?",
        options: ["color", "background-color", "border-color", "font-color"],
        answer: "background-color"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which HTML tag is used for the largest heading?",
        options: ["<h6>", "<head>", "<h1>", "<heading>"],
        answer: "<h1>"
    },
    {
        question: "Which CSS property controls outside spacing?",
        options: ["padding", "margin", "border", "spacing"],
        answer: "margin"
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");

function loadQuestion() {
    selectedAnswer = "";

    const q = quizQuestions[currentQuestion];

    questionElement.textContent =
        `Q${currentQuestion + 1}. ${q.question}`;

    optionsElement.innerHTML = "";

    q.options.forEach(option => {
        const button = document.createElement("button");

        button.textContent = option;
        button.classList.add("option");

        button.addEventListener("click", () => {
            document.querySelectorAll(".option").forEach(btn => {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");
            selectedAnswer = option;
        });

        optionsElement.appendChild(button);
    });

    nextButton.textContent =
        currentQuestion === quizQuestions.length - 1
            ? "Finish Quiz"
            : "Next Question";
}

nextButton.addEventListener("click", () => {

    if (selectedAnswer === "") {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer === quizQuestions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        quizElement.style.display = "none";
        resultElement.style.display = "block";

        document.getElementById("score").textContent =
            `Your Score: ${score} / ${quizQuestions.length}`;
    }
});

loadQuestion();
