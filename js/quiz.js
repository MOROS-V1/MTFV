'use strict'
const questionsArray = [];
let score = 0;
function Quiz(question, answers) {
    this.question = question,
        this.answers = answers,

        questionsArray.push(this)
};
let q1 = new Quiz('Question 1: ....', ['a', 'b', 'c', 'd']);
let q2 = new Quiz('Question 2: ....', ['a2', 'b2', 'c2', 'd2']);
let q3 = new Quiz('Question 3: ....', ['a3', 'b3', 'c3', 'd3']);
console.log(questionsArray);
let form = document.getElementById('quiz');
for (let j = 0; j < questionsArray.length; j++) {
    let qDiv = document.createElement('div');
    let qP = document.createElement('p');
    form.appendChild(qDiv);
    qDiv.appendChild(qP);
    qP.textContent = questionsArray[j].question;
    const x = ['1', '2', '3', '4'];
    for (let i = 0; i < x.length; i++) {
        let qI = document.createElement('input');
        qDiv.appendChild(qI);
        qI.setAttribute('type', 'radio');
        qI.setAttribute('required', 'required');
        qI.setAttribute('name', `Q${j}`);
        qI.setAttribute('id', `choice${i}.${j}`);
        // qI.setAttribute('value', `v${i}${j}`)
        let qL = document.createElement('label');
        qDiv.appendChild(qL);
        qL.textContent = questionsArray[j].answers[i];
        qL.setAttribute('for', `choice${i}${j}`)

    }

}

let x = document.getElementById('choice10').checked;
    if (x) {
        score++
    }
    else {
        alert('nobe!')
    };
    
form = document.getElementById('quiz');
let submit = document.createElement('input');
submit.setAttribute('type', 'submit');
form.appendChild(submit);
console.log(score);
submit.addEventListener('click', saveScore);

function saveScore(event) {
    event.preventDefault();
    
}
// console.log(document.getElementById('choice10').checked);
console.log(score);