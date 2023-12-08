const quizTopic = document.getElementById("quiz-topic");
const questionSection = document.getElementById("question-section");
const answerSection = document.getElementById("answer-section");

//Functions
export default function pageUpdate(user) {
  quizTopic.innerHTML = `
  <img src=${user.icon} alt="${user.title}" />
  <h3>${user.title}</h3>`;

  const questions = user.questions;

  let currentIndex = 0;
  let score = 0;
  function startQuiz() {
    answerSection.innerHTML = "";
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
    // console.log(currentAnswers);

    answerSection.innerHTML = `
      <button id="options" class='options'  value="${currentAnswers[0]}"> <span class="option" >A</span> ${currentAnswers[0]} </button>

      <button id="option2" class='options' value="${currentAnswers[1]}"> <span class="option" >B</span> ${currentAnswers[1]} </button>

      <button id="option3" class='options' value="${currentAnswers[2]}"> <span class="option">C</span> ${currentAnswers[2]} </button>

      <button id="option4" class='options' value="${currentAnswers[3]}"> <span class="option"  >D</span> ${currentAnswers[3]} </button>
      <button class="answer-btn submit-btn disabled" id="submit-btn">
          Submit Answer
      </button>
    `;
    const submitBtn = document.getElementById("submit-btn");
    const optionsArray = document.querySelectorAll(".options");

    for (let option of optionsArray) {
      let child = option.children[0];
      option.addEventListener("mouseenter", function () {
        child.classList.add("hover");
      });
      option.addEventListener("mouseleave", function () {
        child.classList.remove("hover");
      });
      option.addEventListener("focusin", () => {
        child.classList.add("focus");
        submitBtn.classList.remove("disabled");
      });
      option.addEventListener("focusout", () => {
        child.classList.remove("focus");
        submitBtn.classList.add("disabled");
      });

      let currentTarget = "";
      option.addEventListener("click", function (e) {
        currentTarget = e.target;
        return currentTarget;
      });

      submitBtn.addEventListener("click", function () {
        console.log(currentTarget);
      });
    }

    // submitBtn.addEventListener;
  }

  startQuiz();
}

///Other option
//  currentAnswers.forEach((answer) => {
//    console.log(answer);

//    const button = document.createElement("button");
//    button.innerHTML = answer;
//    button.classList.add("options");
//    answerSection.appendChild(button);
//  });
//  const submitBtn = document.getElementById("submit-btn");
//  answerSection.innerHTML += `
//     <button class="answer-btn submit-btn disabled" id="submit-btn">
//       Submit Answer
//     </button>`;
