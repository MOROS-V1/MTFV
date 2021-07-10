'use strict'
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// const lowScoreKey= "lowscorekey";
// const midScoreKey= "midscorekey";
// const highScoreKey= "highscorekey"; 
let questionsArray = [];
let arrayOfIDs = [];
let score = 0;
function Quiz(question, answers, correctAnswerV) {
    this.question = question,
        this.answers = answers,
        this.correctAnswer = answers[correctAnswerV],
        questionsArray.push(this)
};
let q1 = new Quiz('Question 1: ....', ['a', 'b', 'c', 'd'], 1);
let q2 = new Quiz('Question 2: ....', ['a2', 'b2', 'c2', 'd2'], 1);
let q3 = new Quiz('Question 3: ....', ['a3', 'b3', 'c3', 'd3'], 3);
let q4 = new Quiz('Question 4: ....', ['a4', 'b4', 'c4', 'd4'], 1);
let q5 = new Quiz('Question 5: ....', ['a5', 'b5', 'c5', 'd5'], 1);
let q6 = new Quiz('Question 6: ....', ['a6', 'b6', 'c6', 'd6'], 3);
let q7 = new Quiz('Question 7: ....', ['a7', 'b7', 'c7', 'd7'], 0);
let q8 = new Quiz('Question 8: ....', ['a8', 'b8', 'c8', 'd8'], 2);
let q9 = new Quiz('Question 9: ....', ['a9', 'b9', 'c9', 'd9'], 2);
let q10 = new Quiz('Question 10: ....', ['a10', 'b10', 'c10', 'd10'], 0);
let q11 = new Quiz('Question 11: ....', ['a11', 'b11', 'c11', 'd11'], 1);
let q12 = new Quiz('Question 12: ....', ['a12', 'b12', 'c12', 'd12'], 2);
let q13 = new Quiz('Question 13: ....', ['a13', 'b13', 'c13', 'd13'], 3);
let q14 = new Quiz('Question 14: ....', ['a14', 'b14', 'c14', 'd14'], 1);
let q15 = new Quiz('Question 15: ....', ['a15', 'b15', 'c15', 'd15'], 2);
// console.log(questionsArray);
let chosenQ = [];
let form = document.getElementById('quiz');
function renderQuestions() {
    randomizeQuestion();
    
    let qDiv = document.createElement('div');
    for (let j = 0; j < chosenQ.length; j++) {
        let qP = document.createElement('p');
        form.appendChild(qDiv);
        qDiv.appendChild(qP);
        qP.textContent = questionsArray[chosenQ[j]].question;
        // console.log(qP.textContent);
        // console.log(chosenQ[j]);
        const x = ['1', '2', '3', '4'];
        for (let i = 0; i < x.length; i++) {
            let qI = document.createElement('input');
            qDiv.appendChild(qI);
            qI.setAttribute('type', 'radio');
            qI.setAttribute('required', 'required');
            qI.setAttribute('name', `Q${chosenQ[j]}`);
            qI.setAttribute('id', `choice${i}.${chosenQ[j]}`);

            qI.value = questionsArray[chosenQ[j]].answers[i];
            arrayOfIDs.push(qI.id);
            // console.log(qI.id);
            let qL = document.createElement('label');
            qDiv.appendChild(qL);
            qL.textContent = questionsArray[chosenQ[j]].answers[i];
            qL.setAttribute('for', `choice${i}.${chosenQ[j]}`)
        }
    }
    let btn = document.createElement('input');
    btn.setAttribute('type', 'submit')
    qDiv.appendChild(btn);
    form.addEventListener('submit', handleSubmit);

}
function handleSubmit(event) {
    event.preventDefault();
    let arrayOfAnswers = [];
    for (let i = 0; i < arrayOfIDs.length; i++) {
        if (document.getElementById(arrayOfIDs[i]).checked) {
            arrayOfAnswers.push(arrayOfIDs[i])


        }


    } console.log(score);

    for (let i = 0; i < chosenQ.length; i++) {
        if (questionsArray[chosenQ[i]].correctAnswer == document.getElementById(arrayOfAnswers[i]).value) {
            score++
        }

    }


    alert(`your score is ${score}`);


    score = 0;
    // form.textContent= '';
    // let arrayOfIDs = [];
    // renderQuestions();
    window.location.reload();
}
renderQuestions();




function randomizeQuestion() {
    chosenQ = [];
    for (let i = 0; i < 10; i++) {
        let number = randomNum(0, questionsArray.length - 1);
        while (chosenQ.includes(number)) {
            number = randomNum(0, questionsArray.length - 1)
        }
        chosenQ.push(number)
    }
    // console.log(chosenQ);
}




