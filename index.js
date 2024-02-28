const questions = [
  {
    question: "What is the correct syntax to declare a variable in JavaScript?",
    answers: ["variable x;", "v x;", "var x;"],
    correct: 2,
  },
  {
    question: "Which of these methods converts a string into an integer?",
    answers: ["parseInt()", "stringToInt()", "toInteger()"],
    correct: 0,
  },
  {
    question: "What does the 'push()' method do in JavaScript?",
    answers: [
      "Remove the last element from an array.",
      "Add an element to the end of an array.",
      "Invert the order of elements in an array.",
    ],
    correct: 1,
  },
  {
    question: "Which of these is an assignment operator in JavaScript?",
    answers: ["=", "==", "==="],
    correct: 0,
  },
  {
    question:
      "Which of these methods is used to select an HTML element by its id in JavaScript?",
    answers: [
      "document.selectById()",
      "document.queryId()",
      "document.getElementById()",
    ],
    correct: 2,
  },
  {
    question: "What does the '===' operator do in JavaScript?",
    answers: [
      "Compares if two values are equal, without considering the type.",
      "Compares if two values are equal, including the type.",
      "Compares if two values are equal, but only in strings.",
    ],
    correct: 1,
  },
  {
    question:
      "Which of these methods is used to add an event to an HTML element in JavaScript?",
    answers: ["addEventListener()", "attachEvent()", "eventListener()"],
    correct: 0,
  },
  {
    question: "What does the 'pop()' method do in JavaScript?",
    answers: [
      "Add an element to the end of an array.",
      "Remove the first element from an array.",
      "Remove the last element from an array.",
    ],
    correct: 2,
  },
  {
    question: "What is the operator used to concatenate strings in JavaScript?",
    answers: ["+", "&", "|"],
    correct: 0,
  },
  {
    question: "Which of these is a primitive data type in JavaScript?",
    answers: ["Array", "Object", "String"],
    correct: 2,
  },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const correctAnswers = new Set();
const totalQuestions = questions.length;
const showTotal = document.querySelector("#correct_answers span");
showTotal.textContent = correctAnswers.size + " of " + totalQuestions;

for (const item of questions) {
  const { answers, correct } = item;
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.question;

  for (let response of answers) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = response;
    dt.querySelector("input").setAttribute(
      "name",
      "question-" + questions.indexOf(item)
    );
    dt.querySelector("input").value = answers.indexOf(response);
    dt.querySelector("input").onchange = (event) => {
      const isCorrect = event.target.value == correct;

      correctAnswers.delete(item);
      if (isCorrect) {
        correctAnswers.add(item);
      }

      showTotal.textContent = correctAnswers.size + " of " + totalQuestions;
    };
    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();
  quiz.appendChild(quizItem);
}
