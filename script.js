import pageUpdate from "./quiz.js";

const htmlTopic = document.getElementById("html");
const cssTopic = document.getElementById("css");
const jsTopic = document.getElementById("javascript");
const accessTopic = document.getElementById("accessibility");

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
