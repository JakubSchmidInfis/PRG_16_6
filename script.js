const answerDiv = document.getElementById("answerDiv")
const questionDiv = document.getElementById("questionDiv")
const nextButton = document.getElementById("button")

const json = [
{
    "question": "Kolik je 1 + 1? ; 2,5,4,3,5,6"
},
{
    "question": "Jaký je smysl života? ; Skibidi toilet, TikTok, Rainbow Siege (se)X, Helldivers II, I hate the Juice, Adolf Heatler"
},
{
    "question": "Gedagedigedagedageooooo? ; Ajv Bín meríd lonk tajm agou,Pneumonoultramicroscopicislilcovolcanoconiosis",
},
{
    "question": "Meatball! ; Who's ball?, Hi ball!",
}
]

var garbage = []

var question = 0;
var maxQuestions = json.length;

function nextQuestion(){
    Clear()
    changeButton()
    question ++;

    //Assign
    text = chooseQuestion().split(";")
    questionText = text[0]
    answerText = text[1]

    //Cleanup
    answerText = answerText.trim();
    questionText = questionText.trim();

    //Clear
    

    //Přidat elementy do dokumentu
    writeQuestion(questionText);
    writeAnswer(answerText);

}

function writeQuestion(text){
    const questionItem = document.createElement("h3")
    questionItem.textContent = text
    questionItem.classList.add("question")
    questionDiv.append(questionItem)

    garbage.push(questionItem)
}


function writeAnswer(text){

    let Answers = text.split(",")

    for (i = 0;i<Answers.length;i++)
    {
        const answerItem = document.createElement("input")
        const answerDivDiv = document.createElement("div")
        const answerLabel = document.createElement("label")
        
        

        answerDivDiv.id = "answerDivDiv"

        //inputs and labels
        answerItem.id = ("answer" + String(i))
        answerLabel.htmlFor = ("answer" + String(i))
        answerItem.setAttribute("type", "radio")
        answerItem.setAttribute("name", "answer")
        answerLabel.textContent = Answers[i]
        answerItem.classList.add("answer")

        //appending
        answerDiv.append(answerDivDiv)
        answerDivDiv.append(answerItem)
        answerDivDiv.append(answerLabel)

        garbage.push(answerDivDiv)
        garbage.push(answerItem)
        garbage.push(answerLabel)
    }
}

function changeButton(){
    if(question < maxQuestions)
    {
       button.textContent = "Next" 
    }
    else{
        button.textContent = "Finish"
    }
}

function Clear(){
    for (i=0;i<garbage.length;i++){
        garbage[i].remove()
        
    }
    garbage = []
}

    const quests = ["Kolik je 1 + 1? ; 2,5,4,3,5,6", "Kolik je 5 + 4? ; 9,5,4,3,5,6"]

function chooseQuestion(){
    

    //let random = (ceil(Math.random() *10)-9 * quests.length)
    return(json[Math.round(Math.random() * (json.length-1))]).question;
    //Credit Motlíkovi za pomoc!!
}

