const quizTopic = document.getElementById("quiz-topic");
const htmlTopic = document.getElementById("html");
const cssTopic = document.getElementById("css");
const jsTopic = document.getElementById("javascript");
const accessTopic = document.getElementById("accessibility");
const questionSection = document.getElementById("question-section");
const answerSection = document.getElementById("answer-section");

//Functions

async function quizData() {
  const response = await fetch("./data.json");
  const data = await response.json();
  let topics = data.quizzes;
  //Getting all the elements of the array
  for (let topic of topics) {
    if (topic.title === "HTML") {
      htmlTopic.addEventListener("click", function () {
        pageUpdate(topic);
      });
    } else if (topic.title === "CSS") {
      cssTopic.addEventListener("click", function () {
        pageUpdate(topic);
      });
    } else if (topic.title === "JavaScript") {
      jsTopic.addEventListener("click", function () {
        pageUpdate(topic);
      });
    } else if (topic.title === "Accessibility") {
      accessTopic.addEventListener("click", function () {
        pageUpdate(topic);
      });
    }
  }
}
quizData();
function pageUpdate(user) {
  quizTopic.innerHTML = `
  <img src=${user.icon} alt="${user.title}" />
  <h3>${user.title}</h3>`;

  const questions = user.questions;
  console.log(questions);

  let currentIndex = 0;
  let score = 0;
  function startQuiz() {
    currentIndex = 0;
    score = 0;
    showQuestion();
  }
  function showQuestion() {
    let currentQuestion = questions[currentIndex];
    let questionNo = currentIndex + 1;
    questionSection.innerHTML = `
  <p>Question ${questionNo} of ${questions.length}</p>
  <h2>${currentQuestion.question}</h2>
  <div class='progress-bar'>
  <div class='progress'></div>
  </div>
  `;
    let currentAnswers = currentQuestion.options;
    console.log(currentAnswers);

    answerSection.innerHTML = `
    <button id="option1" class='options'> <span class="option" >A</span> ${currentAnswers[0]} </button>
    <button id="option2" class='options'> <span class="option" >B</span> ${currentAnswers[1]} </button>
    <button id="option3" class='options'> <span class="option" >C</span> ${currentAnswers[2]} </button>
    <button id="option4" class='options'> <span class="option" >D</span> ${currentAnswers[3]} </button>
    <button class="answer-btn submit-btn disabled" id="submit-btn">
        Submit Answer
    </button>
  `;
    const submitBtn = document.getElementById("submit-btn");
    const optionsArray = document.querySelectorAll(".options");
    const optionBtn = document.querySelectorAll(".option");

    for (let option of optionsArray) {
      let child = option.children[0];
      option.addEventListener("mouseenter", function () {
        child.classList.add("hover");
      });
      option.addEventListener("mouseleave", function () {
        child.classList.remove("hover");
      });
      option.addEventListener("click", () => {
        child.classList.add("focus");
        submitBtn.classList.remove("disabled");
      });
    }

    // submitBtn.addEventListener;
  }

  startQuiz();
}

// for (let item of optionBtn) {
//   option.addEventListener("mouseenter", function () {
//     child.classList.add("hover");
//   });
//   option.addEventListener("mouseleave", function () {
//     child.classList.remove("hover");
//   });
// }
