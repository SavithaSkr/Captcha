var landingpage = document.querySelector(".landingpage");
var instructionPage = document.querySelector(".instructionPage");
var userform = document.getElementById("userform");
var readyforQuiz = document.querySelector(".readyforQuiz");
var quiz_container = document.querySelector(".quiz_container");
var instructionPageClick = document.querySelector(".instructionPageClick");

instructionPageClick.addEventListener("click", function (event) {
  event.preventDefault();
  landingpage.style.display = "none";
  instructionPage.style.display = "block";
});
readyforQuiz.addEventListener("click", (event) => {
  event.preventDefault();
  instructionPage.style.display = "none";
  quiz_container.style.display = "block";
});
