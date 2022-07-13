console.log(jsQuestionList);

function* nextQuestion() {
    let counter = 0;
    console.log(counter);
    for (i in jsQuestionList) {
        counter++;
        console.log(counter);
        console.log(jsQuestionList[i].question);

        // Try to remove current question box if it exists
        try {
            const elem = document.getElementById("current_question_box");
            elem.parentNode.removeChild(elem);
        } catch (error) { }

        // For every question create a div
        const current_question_box = document.createElement("div");
        current_question_box.setAttribute("id", "current_question_box");
        document.getElementById("question_box").appendChild(current_question_box);

        // Create question text inside a created div
        const current_question_text = document.createElement("div");
        current_question_text.setAttribute("id", "current_question_text");
        current_question_text.textContent = jsQuestionList[i].question;
        document
            .getElementById("current_question_box")
            .appendChild(current_question_text);

        // Create current_choices_box
        const current_choices_box = document.createElement("div");
        current_choices_box.setAttribute("id", "current_choices_box");
        document
            .getElementById("current_question_box")
            .appendChild(current_choices_box);

        // Create choices buttons
        for (x in jsQuestionList[i].choices) {
            try {
                const btn = document.createElement("button");
                btn.setAttribute("id", `${i}_${x}`);
                btn.setAttribute("onclick", "nextQuestionClick()");
                btn.setAttribute("value", Object.values(jsQuestionList[i].choices[x]))
                btn.textContent = Object.keys(jsQuestionList[i].choices[x]);
                document.getElementById("current_choices_box").appendChild(btn);
            } catch (error) { }
        }

        yield;
    }
}

const nextQ = nextQuestion();
nextQ.next();

async function nextQuestionClick() {

    await
        nextQ.next();
}