'use strict'

const visitorskey = 'visitorskey';
let visitors = [];

function Visitor(fullname, gender, age, typeVaccine, symptoms, date) {
    this.fullname = fullname;
    this.gender = gender;
    this.age = age;
    this.typeVaccine = typeVaccine;
    this.symptoms = symptoms;
    this.date = date;
    visitors.push(this);
}

function initilizeForm() {

    if (localStorage.getItem(visitorskey) != null) {
        return;
    }
    else {
        //the storage isn't created yet so proceed normally
        new Visitor('Ahmed Saieed', 'male', '18-39', 'visor', [
            ['temperatureRise', false],
            ['musclePain', true],
            ['Dyspnea', false],
            ['fatigue', false],
            ['headache', true],
            ['shudder', false],
            ['jointPain', false]
        ], '2021/4/19. 10:31');
        new Visitor('Tamara Mohammad', 'female', '18-39', 'estraZeneca', [
            ['temperatureRise', true],
            ['musclePain', true],
            ['Dyspnea', false],
            ['fatigue', true],
            ['headache', true],
            ['shudder', false],
            ['jointPain', false]
        ], '2021/4/20. 09:41');
        new Visitor('Noor Bashar', 'female', '40-59', 'sinopharm', [
            ['temperatureRise', false],
            ['musclePain', true],
            ['Dyspnea', true],
            ['fatigue', false],
            ['headache', true],
            ['shudder', false],
            ['jointPain', true]
        ], '2021/4/25. 08:11');
        new Visitor('Dorgham Basel', 'female', '40-59', 'sinopharm', [
            ['temperatureRise', true],
            ['musclePain', false],
            ['Dyspnea', false],
            ['fatigue', false],
            ['headache', true],
            ['shudder', false],
            ['jointPain', true]
        ], '2021/4/29. 09:51');
        new Visitor('Mohannad Jaber', 'male', '60-90', 'biontech', [
            ['temperatureRise', true],
            ['musclePain', true],
            ['Dyspnea', false],
            ['fatigue', false],
            ['headache', false],
            ['shudder', false],
            ['jointPain', true]
        ], '2021/5/1. 11:48');
        new Visitor('Haitham Samara', 'male', '60-90', 'visor', [
            ['temperatureRise', true],
            ['musclePain', true],
            ['Dyspnea', false],
            ['fatigue', false],
            ['headache', false],
            ['shudder', false],
            ['jointPain', true]
        ], '2021/6/2. 09:45');
        save();
    }
}
function save() {
    const convertedArr = JSON.stringify(visitors);
    localStorage.setItem(visitorskey, convertedArr);
    console.log(convertedArr);
}

let newsContainer = [];
const newsParent = document.getElementById('m_four_news');

function News(date,title,image){
    this.date = date;
    this.title = title;
    this.image = image;
    newsContainer.push(this);
}

let FAQcontainer = [];
const FAQParent = document.getElementById('FAQcontainer');

function FAQ(question,answer){
    this.question = question;
    this.answer = answer;

    FAQcontainer.push(this);
}


function renderNews(){

    for (let i = 0; i < newsContainer.length; i++) {
        const div = document.createElement('div');
        newsParent.appendChild(div);

        const img = document.createElement('img');
        div.appendChild(img);
        img.src = newsContainer[i].image;
        
        const div2 = document.createElement('div');
        div.appendChild(div);

        const h1 = document.createElement('h1');
        h1.textContent = newsContainer[i].date;
        div2.appendChild(h1);

        const p = document.createElement('p');
        p.textContent = newsContainer[i].title;
        div2.appendChild(p);

    }
}


initilizeForm();