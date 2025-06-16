const answerDiv = document.getElementById("answerDiv")
const questionDiv = document.getElementById("questionDiv")
const nextButton = document.getElementById("button")

var question = 0;

function nextQuestion(){

    question ++;

    //Assign
    text = chooseQuestion().split(";")
    questionText = text[0]
    answerText = text[1]

    //Cleanup
    answerText = answerText.trim();
    questionText = questionText.trim();

    alert("Question: " + questionText + " Answer: " + answerText);

    //Přidat elementy do dokumentu
    writeQuestion(questionText);
    writeAnswer(answerText);
}

function writeQuestion(text){
    const questionItem = document.createElement("h3")
    questionItem.textContent = text
    questionItem.classList.add("question")
    questionDiv.append(questionItem)
}
function writeAnswer(text){

    let Answers = text.split(",")

    for (i = 0;i<Answers.length;i++)
    {
        const answerItem = document.createElement("input")
        const answerLabel = document.createElement("label")
        
        answerItem.id = ("answer" + String(i))
        answerLabel.htmlFor = ("answer" + String(i))

        answerItem.setAttribute("type", "radio")
        answerItem.setAttribute("name", "answer")
        answerLabel.textContent = Answers[i]
        answerItem.classList.add("answer")
        answerDiv.append(answerItem)
        answerDiv.append(answerLabel)
    }
    



    const answerItem = document.createElement("h3")
    answerItem.textContent = text
    answerItem.classList.add("answer")
    answerDiv.append(answerItem)
}

function chooseQuestion(){
    
    return "Kolik je 1 + 1? ; 2,5,4,3,5,6 "
}