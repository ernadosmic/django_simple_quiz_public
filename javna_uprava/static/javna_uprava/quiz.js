console.log(jsQuestionList)
function* nextQuestion() {
    let counter = 0
    for (i in jsQuestionList) {
        document.getElementById("question_text_box").innerHTML =
            jsQuestionList[i].question;

        document.getElementById(`choice_1`).innerHTML =
            Object.keys(jsQuestionList[i].choices[1]);
        document.getElementById(`choice_2`).innerHTML =
            Object.keys(jsQuestionList[i].choices[2]);
        document.getElementById(`choice_3`).innerHTML =
            Object.keys(jsQuestionList[i].choices[3]);
        document.getElementById(`choice_4`).innerHTML =
            Object.keys(jsQuestionList[i].choices[4]);
        document.getElementById(`choice_5`).innerHTML =
            Object.keys(jsQuestionList[i].choices[5]);
        document.getElementById(`choice_6`).innerHTML =
            Object.keys(jsQuestionList[i].choices[6]);

        yield
    }

}

const nextQ = nextQuestion()
nextQ.next()

