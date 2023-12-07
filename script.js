const quizTopic = document.getElementById("quiz-topic");
const htmlTopic = document.getElementById("html");
const cssTopic = document.getElementById("css");
const jsTopic = document.getElementById("javascript");
const accessTopic = document.getElementById("accessibility");
const questionSection = document.getElementById("question-section");
const answerSection = document.getElementById("answer-section");
const submitBtn = document.getElementById("submit-btn");

//Functions
async function quizData() {
  const response = await fetch("./data.json");
  const data = await response.json();
  console.log(data);
}
let quiz = quizData();

function pageUpdate(user) {
  quizTopic.innerHTML = `
  <img src="assets/images/icon-${user}.svg" alt="${user}" />
  <h3>HTML</h3>
  `;

  questionSection.innerHTML = `
  <p>Question number</p>
  <h2>Blah blaldl ahahahgduia ahsdhsdsidf</h2>
  <div class='progress-bar'>
  <div class='progress'></div>
  </div>
  `;
  answerSection.innerHTML = `
    <button id="option1"> <span class="option" >A</span> Answer 1 </button>
    <button id="option2"> <span class="option" >B</span> Answer 2 </button>
    <button id="option3"> <span class="option" >C</span> Answer 3 </button>
    <button id="option4"> <span class="option" >D</span> Answer 4 </button>
    <button class="answer-btn submit-btn" id="submit-btn">
        Submit Answer
    </button>
  `;
}
// htmlTopic.addEventListener("click");
