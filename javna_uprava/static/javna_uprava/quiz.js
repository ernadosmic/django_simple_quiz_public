console.log(jsQuestionList);
console.log(Object.keys(jsQuestionList).length);
let correct_answers_counter = 0;
let incorrect_answers_counter = 0;
let counter = 0;

function* nextQuestion() {


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
        current_question_text.textContent =
            `${counter}. ${jsQuestionList[i].question}`;
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
                btn.setAttribute("id", `${i}${x}`);
                btn.setAttribute("onclick", `nextQuestionClick(${Object.values(jsQuestionList[i].choices[x])}, ${i}${x})`);
                btn.setAttribute("value", Object.values(jsQuestionList[i].choices[x]));
                btn.textContent = Object.keys(jsQuestionList[i].choices[x]);
                document.getElementById("current_choices_box").appendChild(btn);
            } catch (error) { }
        }

        yield;
    }
}

const nextQ = nextQuestion();
nextQ.next();

function nextQuestionClick(value, id) {
    // Grab the pressed button as "el"
    let el = document.getElementById(id);

    // Grab the element where the choices are
    let current_choices_box = document.getElementById("current_choices_box");

    // Grab and loop through the children of that element
    let children = current_choices_box.childNodes;
    children.forEach(button => {
        // and setAttribute to disable
        // so they cannot be clicked
        button.setAttribute("disabled", "true");
        // grab the child with value = true and color it green
        if (button.getAttribute("value") === "true") {
            button.setAttribute("class", "correct-answer");
        }
    })

    // If the answer is correct, do this
    if (value) {
        correct_answers_counter++;
        // If the answer is not correct, do this
    } else {
        el.setAttribute('class', 'incorrect-answer');
        incorrect_answers_counter++
    }

    // wait a second
    setTimeout(() => {
        if (counter === Object.keys(jsQuestionList).length) {
            console.log("IDEMO DALJE");
            viewResults();
        } else {
            nextQ.next();
        }

    }, "2000");
    console.log("Odmah");
}

function viewResults() {
    try {
        const elem = document.getElementById("current_question_box");
        elem.parentNode.removeChild(elem);
    } catch (error) { }

    question_box = document.getElementById("question_box")

    const correct_answers_result = document.createElement("div")
    correct_answers_result.setAttribute("id", "correct_answers_result");
    question_box.appendChild(correct_answers_result);
    correct_answers_result.textContent = `Tačnih: ${correct_answers_counter}`;

    const incorrect_answers_result = document.createElement("div")
    incorrect_answers_result.setAttribute("id", "incorrect_answers_result");
    question_box.appendChild(incorrect_answers_result);
    incorrect_answers_result.textContent = `Netačnih: ${incorrect_answers_counter}`;

}


// Warning message if the user wants to leave the quiz
window.onbeforeunload = function () {
    return "Data will be lost if you leave the page, are you sure?";
};

