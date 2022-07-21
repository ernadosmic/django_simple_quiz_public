console.log(jsQuestionList.size);

// Global vars
const nextQ = nextQuestion();

let correct_answers_counter = 0;
let incorrect_answers_counter = 0;
let counter = 0;
let currentQuestionNumber = 0;
let currentQuestionText = 0;
let currentQuestionChoices = null;

let wrongAnswersMap = new Map();

function* nextQuestion() {
    // console.log(counter);
    for (const i of jsQuestionList.keys()) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        // Golabl vars assignments
        currentQuestionNumber = i;
        currentQuestionText = jsQuestionList.get(i).question;
        currentQuestionChoices = jsQuestionList.get(i).choices;

        counter++;

        // Try to remove current question box if it exists
        try {
            const elem = document.getElementById("current_question_box");
            elem.parentNode.removeChild(elem);
        } catch (error) { }

        // For every question create a div
        const current_question_box = document.createElement("div");
        current_question_box.setAttribute("id", "current_question_box");
        current_question_box.setAttribute("class", "current_question_box");
        document.getElementById("question_box").appendChild(current_question_box);

        // Create question text inside a created div
        const current_question_text = document.createElement("div");
        current_question_text.setAttribute("id", "current_question_text");
        current_question_text.setAttribute("class", "current_question_text");
        current_question_text.innerHTML = `${counter}. ${currentQuestionText}`;
        document
            .getElementById("current_question_box")
            .appendChild(current_question_text);

        // Create current_choices_box
        const current_choices_box = document.createElement("div");
        current_choices_box.setAttribute("id", "current_choices_box");
        current_choices_box.setAttribute("class", "current_choices_box");
        document
            .getElementById("current_question_box")
            .appendChild(current_choices_box);

        // Create choices buttons
        for (const x in currentQuestionChoices) {
            // console.log(Object.values(currentQuestionChoices[x])[0])
            try {
                const btn = document.createElement("button");
                btn.setAttribute("id", `${i}${x}`);
                btn.setAttribute("class", `choice_button`);
                btn.setAttribute(
                    "onclick",
                    `nextQuestionClick(${Object.values(currentQuestionChoices[x])[0]
                    }, ${i}${x})`
                );
                btn.setAttribute("value", Object.values(currentQuestionChoices[x])[0]);
                btn.textContent = `${x}) ${Object.keys(currentQuestionChoices[x])[0]}`;
                document.getElementById("current_choices_box").appendChild(btn);
            } catch (error) { }
        }

        yield;
    }
}

function nextQuestionClick(value, id) {
    // Grab the pressed button as "el"
    let el = document.getElementById(id);

    // Grab the element where the choices are
    let current_choices_box = document.getElementById("current_choices_box");

    // Grab and loop through the children of that element
    let children = current_choices_box.childNodes;
    children.forEach((button) => {
        // and setAttribute to disable
        // so they cannot be clicked
        button.setAttribute("disabled", "true");
        // grab the child with value = true and color it green with css
        if (button.getAttribute("value") === "true") {
            button.setAttribute("class", "correct-answer");
        }
    });

    // If the answer is correct, do this
    if (value) {
        window.navigator.vibrate([50]);
        correct_answers_counter++;
        // If the answer is not correct, do this
    } else {
        el.setAttribute("class", "incorrect-answer");
        window.navigator.vibrate([200]);
        incorrect_answers_counter++;

        document.getElementById("results_box").setAttribute("class", "res_shown");

        // Grab the question text
        console.log(currentQuestionNumber);
        console.log(currentQuestionText);
        console.log(currentQuestionChoices);
        console.log(el.innerHTML);

        wrongAnswersMap.set(currentQuestionNumber, currentQuestionText);

        console.log(currentQuestionChoices);

        const wrong_answer_container = document.createElement("div");
        wrong_answer_container.setAttribute("id", `wrong_${currentQuestionNumber}`);
        wrong_answer_container.setAttribute("class", `wrong_answer_container`);
        document
            .getElementById("results_box_content")
            .insertBefore(
                wrong_answer_container,
                document.getElementById("results_box_content").firstChild
            );

        const wrong_answer = document.createElement("p");
        wrong_answer.textContent = `${currentQuestionNumber}. ${currentQuestionText}`;
        wrong_answer.setAttribute("style", "font-weight: bold");
        wrong_answer_container.appendChild(wrong_answer);

        const wrong_answer_choices_list = document.createElement("ol");
        wrong_answer_choices_list.setAttribute(
            "id",
            `wrong_list_${currentQuestionNumber}`
        );
        wrong_answer_choices_list.setAttribute("class", `wrong_list`);
        wrong_answer_container.appendChild(wrong_answer_choices_list);

        const wrong_answer_sep = document.createElement("hr");
        wrong_answer_sep.setAttribute("id", `wrong_list_${currentQuestionNumber}`);
        results_box_content.insertBefore(
            wrong_answer_sep,
            results_box_content.childNodes[1]
        );

        for (const i in currentQuestionChoices) {
            console.log(currentQuestionChoices[i]);
            console.log("Object values", Object.values(currentQuestionChoices[i])[0]);
            console.log("el.innerHTML: ", el.innerHTML);
            console.log(
                "Object.keys(currentQuestionChoices[i]): ",
                Object.keys(currentQuestionChoices[i])
            );

            const wrongChoices = document.createElement("li");
            wrongChoices.setAttribute("class", `wrong_list_item`);
            wrongChoices.textContent = Object.keys(currentQuestionChoices[i]);
            wrong_answer_choices_list.appendChild(wrongChoices);

            if (Object.values(currentQuestionChoices[i])[0]) {
                wrongChoices.setAttribute(
                    "style",
                    `color: var(--correct); font-weight: 900`
                );
            }

            console.log("wrongChoices.innerHTML", wrongChoices.innerHTML);

            if (wrongChoices.innerHTML === el.innerHTML.slice(3)) {
                wrongChoices.setAttribute(
                    "style",
                    `color: var(--incorrect); font-weight: 900`
                );
            }
        }
    }

    // wait a second
    setTimeout(() => {
        if (counter === jsQuestionList.size) {
            // console.log("IDEMO DALJE");
            viewResults();
        } else {
            nextQ.next();
        }
    }, "1000");
    // console.log("Odmah");
}

function viewResults() {
    try {
        const elem = document.getElementById("current_question_box");
        elem.parentNode.removeChild(elem);
    } catch (error) { }

    const question_box = document.getElementById("question_box");

    const results = document.createElement("div");
    results.setAttribute("id", "results");
    question_box.appendChild(results);

    const correct_answers_result = document.createElement("div");
    correct_answers_result.setAttribute("id", "correct_answers_result");
    results.appendChild(correct_answers_result);
    correct_answers_result.textContent = `✓ ${correct_answers_counter}`;

    // INCORRECT

    const incorrect_answers_result = document.createElement("div");
    incorrect_answers_result.setAttribute("id", "incorrect_answers_result");
    results.appendChild(incorrect_answers_result);
    incorrect_answers_result.textContent = `✗ ${incorrect_answers_counter}`;

    // const quizContent = document.getElementById("quiz_content");
    // quizContent.setAttribute("style", "flex-direction: column");

    const questionBox = document.getElementById("question_box");
    questionBox.setAttribute("style", "flex: 15%");

    const resultBoxContent = document.getElementById("results_box_content");
    resultBoxContent.setAttribute(
        "style",
        "max-height: unset; overflow-y: unset"
    );
    // resultBoxContent.setAttribute("style", "overflow-y: unset");

    const resultBox = document.getElementById("results_box");
    resultBox.setAttribute("style", "flex: 85%");
    // console.log(wrong_answers_list)
}

// Warning message if the user wants to leave the quiz
window.onbeforeunload = function () {
    return "Data will be lost if you leave the page, are you sure?";
};


