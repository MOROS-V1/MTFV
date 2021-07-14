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
let q1 = new Quiz('Vaccine benefits:', ['A- It prevents you from contracting COVID-19', 'b- transmitting the virus to others', 'C- It causes death by Covid-19 disease', 'D. The virus spreads quickly'], 0);
let q2 = new Quiz('Most common covid vaccines', ['A- Papilloma', 'B- Polio', 'C- Pfizer', 'D-Tdap'], 2);
let q3 = new Quiz('Vaccine side effects:', ['A- Fever', 'b- headache', 'C- A + B + D', 'D- Muscle pain'], 2);
let q4 = new Quiz('Ages allowed to take the vaccine:', ['A-18 years old', 'B - 30 years', 'C-A+B', 'D - 10 years'], 2);
let q5 = new Quiz('There is an important procedure after taking the vaccine:', ['A - remove the mask', 'B - Adhere to the instructions for two weeks after taking the second dose.', 'C - Not adhering to the necessary rules after the first dose', 'D- All of the above are true'], 1);
let q6 = new Quiz('People who should not take the corona vaccine:', ['A - People with severe allergies to vaccinations or some medicines and food.', 'b- Pregnant and lactating women.', 'c- Persons under the age of eighteen.', 'D- All of the above are correct'], 3);
let q7 = new Quiz('You can register to receive the vaccine through:', ['A- Recording platform', 'b- Registration with the Ministry of Health', 'C- Registration by phone', 'D- Register via Facebook'], 0);
let q8 = new Quiz('How to take the vaccine:', ['A- The vaccine is given by injection into the upper arm and into the muscle.', 'B- A + C + D', 'C- It is important that you get all the doses to ensure the effectiveness of the vaccine.', 'D- The second dose 21-28 days after the first dose.'], 1);
let q9 = new Quiz('Among the centers where the vaccine will be available inside Amman:', ['A- Founder King Abdullah University Hospital', 'B- Prince Faisal Governmental Hospital.', 'C- Prince Hamzah Hospital', 'D- Jerash Comprehensive Health Center.'], 2);
let q10 = new Quiz(' If I catch the Corona virus and recover, I must', ['A- Don\'t get vaccinated', 'B- I must register to receive the vaccination', 'C- Just keep taking vitamins', 'D- All of the above'], 1);
let q11 = new Quiz('Which of the following is not a symptom of the corona vaccine?', ['A-Chills', 'B-Nausea', 'C-Vomiting', 'D-hypotension'], 3);
let q12 = new Quiz('A vaccine that is 95% effective a week after the second dose of the vaccine', ['A- AstraZeneca', 'B- Pfizer', 'C- Sinopharm', 'D- None of the above'], 1);
let q13 = new Quiz('COVID-19 vaccines contain', ['A-fetal tissue.', 'B-microchip to track the population.', 'C-weakened version of the virus', 'D-1 and 2'], 2);
let q14 = new Quiz('There is a vaccine that relieves the symptoms of corona besides corona vaccines:', ['A-The annual influenza vaccination', 'B- Polio vaccine', 'C- Tuberculosis vaccine', 'D- A + C'], 0);
let q15 = new Quiz(' People most at risk of developing severe symptoms', ['A - old age', 'b- Those who suffer from lung problems', 'C- Those who suffer from heart disease', 'D- All of the above are correct'], 3);
// console.log(questionsArray);
let chosenQ = [];
let form = document.getElementById('quiz');
function renderQuestions() {
    randomizeQuestion();
    
    let qSection = document.createElement('section');
    for (let j = 0; j < chosenQ.length; j++) {
        let qH = document.createElement('h3'); 
        let qP = document.createElement('p');
        let div = document.createElement('div');
        form.appendChild(qSection);
        qSection.appendChild(div);
        div.appendChild(qH);
        div.appendChild(qP);
        qH.textContent = `Question: ${j+1}`;
        qP.textContent = questionsArray[chosenQ[j]].question;
        // console.log(qP.textContent);
        // console.log(chosenQ[j]);
        const x = ['1', '2', '3', '4'];
        for (let i = 0; i < x.length; i++) {
            let qI = document.createElement('input');
            div.appendChild(qI);
            qI.setAttribute('type', 'radio');
            qI.setAttribute('required', 'required');
            qI.setAttribute('name', `Q${chosenQ[j]}`);
            qI.setAttribute('id', `choice${i}.${chosenQ[j]}`);

            qI.value = questionsArray[chosenQ[j]].answers[i];
            arrayOfIDs.push(qI.id);
            // console.log(qI.id);
            let qL = document.createElement('label');
            div.appendChild(qL);
            qL.textContent = questionsArray[chosenQ[j]].answers[i];
            qL.setAttribute('for', `choice${i}.${chosenQ[j]}`)
        }
    }
    let btn = document.createElement('input');
    btn.setAttribute('type', 'submit');
    btn.id= 'submit';
    qSection.appendChild(btn);
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
    Swal.fire({
        title: `Your score is ${score} out of 10.`,
        confirmButtonColor: 'rgb(34, 103, 165)',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });

    // alert(`your score is ${score}`);


    score = 0;
    // form.textContent= '';
    // let arrayOfIDs = [];
    // renderQuestions();
    // window.location.reload();
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