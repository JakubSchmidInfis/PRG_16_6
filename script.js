const answerDiv = document.getElementById("answerDiv")
const questionDiv = document.getElementById("questionDiv")
const nextButton = document.getElementById("button")
const nevimDiv = document.getElementById("nevimDiv")

const json = [
    {
        "question": "Jaký typ výstupu vrátí `console.log(5 + 5)`?",
        "answers": "text|boolean|nic|číslo|seznam|undefined",
        "correct": "3"
    },
    {
        "question": "Jak vytvoříš proměnnou, kterou nelze znovu přiřadit?",
        "answers": "let|var|static|const|class|function",
        "correct": "3"
    },
    {
        "question": "Co dělá '===' v JavaScriptu?",
        "answers": "Vymaže proměnnou|Spustí funkci|Změní typ|Porovná jen hodnoty|Porovná hodnoty i typy|Duplicituje objekt",
        "correct": "4"
    },
    {
        "question": "Které z těchto není datový typ v JavaScriptu?",
        "answers": "boolean|element|number|string|undefined|symbol",
        "correct": "1"
    },
    {
        "question": "Co dělá `.length` u textu?",
        "answers": "Změní barvu|Vykreslí okno|Smaže text|Zjistí počet písmen|Zvětší text|Přeloží text",
        "correct": "3"
    },
    {
        "question": "Jak začíná komentář na jeden řádek?",
        "answers": "/*|#|//|<!--|**|//--",
        "correct": "2"
    },
    {
        "question": "Který z těchto symbolů se používá pro sčítání?",
        "answers": "*|=|%|!|+|-",
        "correct": "4"
    },
    {
        "question": "Jak se spustí výpis na konzoli?",
        "answers": "show.print|output.show|console.log|write.log|document.alert|terminal.push",
        "correct": "2"
    },
    {
        "question": "Které slovo použiješ pro vytvoření funkce?",
        "answers": "function|define|method|funct|create|prog",
        "correct": "0"
    },
    {
        "question": "Co vypíše `console.log(\"Hello\" + \" World\")`?",
        "answers": "Hello + World|Hello World|Hello|\"Hello\" \"World\"|HelloWorld|Error",
        "correct": "1"
    },
    {
        "question": "K čemu slouží `if` v JavaScriptu?",
        "answers": "Import|Začátek souboru|Nastavení barev|Podmínka|Konec funkce|Pro vypnutí zvuku",
        "correct": "3"
    },
    {
        "question": "Co udělá `alert(\"Ahoj!\")`?",
        "answers": "Zobrazí okno s textem|Vytiskne dokument|Vymaže proměnnou|Překreslí stránku|Změní jazyk|Nic",
        "correct": "0"
    },
    {
        "question": "Jaká je hodnota `true && false`?",
        "answers": "true|0|chyba|null|false|undefined",
        "correct": "4"
    },
    {
        "question": "Jaký je výstup `typeof \"text\"`?",
        "answers": "boolean|string|object|undefined|null|function",
        "correct": "1"
    },
    {
        "question": "Co znamená `NaN`?",
        "answers": "Null and Null|New as Null|Národní Automatický Nápovědník|Nothing as Name|Not a Number|Next as Number",
        "correct": "4"
    },
    {
        "question": "Jaký je výstup `3 * 2 + 1`?",
        "answers": "9|7|6|5|1|8",
        "correct": "1"
    },
    {
        "question": "Jaký je výstup `10 % 3`?",
        "answers": "0|NaN|10|3|7|1",
        "correct": "5"
    },
    {
        "question": "Který z těchto zápisů je pole?",
        "answers": "(1, 2, 3)|{1, 2, 3}|<1, 2, 3>|[1, 2, 3]|1|Array(1,2,3)",
        "correct": "3"
    },
    {
        "question": "Co udělá `let x = 5; x++;`?",
        "answers": "Změní x na string|Sníží x na 4|Zvýší x na 6|Vymaže x|Nic|Nastaví x na 0",
        "correct": "2"
    },
    {
        "question": "Jaký je výstup `Boolean(0)`?",
        "answers": "undefined|true|error|null|0|false",
        "correct": "5"
    }
]





var garbage = []
var radios = []
var questionNum = 0;
var body = 0;
var maxQuestions = (json.length/2);



function nextQuestion(){
    //Zhodnocení
    if (questionNum > 0){
        if(checkQuestion(correct) == true){
        body ++;
        }
    }

    //Clear
    Clear()
    changeButton()
    questionNum ++;

    //Assign
    jsonQuestion = chooseQuestion() //Vybere jednu z otázek
    questionText = jsonQuestion.question
    answerText = jsonQuestion.answers
    correct = jsonQuestion.correct

    correct = Number(correct)
    
    
    if(questionNum <= (maxQuestions))
    {
        //Přidat nové elementy do dokumentu
        writeQuestion(questionText);
        writeAnswer(answerText);
    }
    else{
        End()
    }
    
    

}
function writeQuestion(text){
    const questionItem = document.createElement("h3")
    questionItem.textContent = text
    questionItem.classList.add("question")
    questionDiv.append(questionItem)

    garbage.push(questionItem)
}
function writeAnswer(text){

    let Answers = text.split("|")

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
        answerItem.value = "off"
        radios.push(answerItem)

        //appending
        answerDiv.append(answerDivDiv)
        answerDivDiv.append(answerItem)
        answerDivDiv.append(answerLabel)
        

        garbage.push(answerDivDiv)
        garbage.push(answerItem)
        garbage.push(answerLabel)
       
    }
        
        const questionNumText = document.createElement("h4")
        questionNumText.textContent = (questionNum + "/" + maxQuestions)
        questionNumText.classList.add("question")
        nevimDiv.append(questionNumText)
        garbage.push(questionNumText)
}
function changeButton(){
    if(questionNum < maxQuestions -1)
    {
       button.textContent = "Next" 
    }
    else if(questionNum == maxQuestions -1){
        button.textContent = "Finish"
    }
    else{
        button.remove()
    }
}
function Clear(){
    for (i=0;i<garbage.length;i++){
        garbage[i].remove()
        
    }
    radios = []
    garbage = []
}
function chooseQuestion(){
    

    return(json[Math.round(Math.random() * (json.length-1))]);
    //Credit Motlíkovi za pomoc!!
}
function checkQuestion(correct)
{
    if(radios[correct].checked == true)
    {
        return true;
    }
    else{
        return false;
    }
}

function End()
{
    mainText = document.createElement("h1")
    mainText.textContent = ("Skóroval jsi " + body + " bodů ze " + maxQuestions)
    mainText.classList.add("results")
    answerDiv.append(mainText)
}


