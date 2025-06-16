const answerDiv = document.getElementById("answerDiv")
const questionDiv = document.getElementById("questionDiv")
const nextButton = document.getElementById("button")

var question = 0;

function nextQuestion(){

    question ++;
    questionText = chooseQuestion().split("|")
    answerText = chooseQuestion().split("|")[1]
    answerText = answerText.trim();
    questionText = questionText[0].trim();

    alert("Question: " + questionText + " Answer: " + answerText);

    writeQuestion(questionText);
}

function writeQuestion(text){
    const questionItem = document.createElement("h3")
    questionItem.textContent = text
    questionItem.classList.add("question")
    questionDiv.append(questionItem)
}

function chooseQuestion(){

    return "Kolik je 1 + 1? | 2"
}