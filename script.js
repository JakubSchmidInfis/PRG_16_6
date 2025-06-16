const answerDiv = document.getElementById("answerDiv")
const questionDiv = document.getElementById("questionDiv")
const nextButton = document.getElementById("button")

var question = 0;

function nextQuestion()
{
    question ++;
    questionText = chooseQuestion().split("|")
    answerText = chooseQuestion().split("|")[1]
    answerText = answerText.trim();
    questionText = questionText[0].trim();

    alert("Question: " + questionText + " Answer: " + answerText);


}

function chooseQuestion()
{
    return "Kolik je 1 + 1? | 2"
}