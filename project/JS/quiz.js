const questions = [];

const obj1 = {
    category: "add",
    question: "2+2=?",
    choices: ["0", "4", "8"],
    answer: "4"
}
const obj2 = {
    category: "sub",
    question: "2-2=?",
    choices: ["0", "4", "8"],
    answer: "0"
}
const obj3 = {
    category: "multi",
    question: "2*2=?",
    choices: ["0", "4", "8"],
    answer: "8"
}
const obj4 = {
    category: "div",
    question: "8/2=?",
    choices: ["0", "4", "8"],
    answer: "4"
}
const obj5 = {
    category: "pow",
    question: "2^2=?",
    choices: ["0", "4", "8"],
    answer: "4"
}

questions.push(obj1, obj2, obj3, obj4, obj5);

function getRandomQuestion(questions) {
    let randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

let questionObject = getRandomQuestion(questions);

function getRandomComputerChoice(choices) {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let computerChoice = getRandomComputerChoice(obj1.choices);

function getResults(questionObject, computerChoice) {
    if (computerChoice == questionObject.answer) {
        return ("The computer's choice is correct!");
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
    }
}

console.log(getResults(questionObject, computerChoice));