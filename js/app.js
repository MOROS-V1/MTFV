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

function News(date, title, image) {
    this.date = date;
    this.title = title;
    this.image = image;
    newsContainer.push(this);
}

let FAQcontainer = [];
const FAQParent = document.getElementById('FAQcontainer');

function FAQ(question, answer) {
    this.question = question;
    this.answer = answer;

    FAQcontainer.push(this);
}

function makeNews() {
    new News('1 day ago', '12 COVID deaths, 601 virus cases recorded Tuesday', 'icon/news/covid19.jpg');
    new News('Jul 12,2021', 'Premier warns against lowering guard on COVID', 'icon/news/bisher.jpg');
    new News('Jul 07,2021', 'New COVID vaccination campaign targets people above 16, vaccine-hesitant segment', 'icon/news/savetheworld.jpg');
    new News('JUNE 23, 2021', 'US$63.75 Million Additional Financing to Support COVID-19 Vaccination in Jordan', 'icon/news/fund.jpg');
}
function renderNews() {

    for (let i = 0; i < newsContainer.length; i++) {
        const div = document.createElement('div');
        div.className = 'news';
        newsParent.appendChild(div);

        const img = document.createElement('img');
        div.appendChild(img);
        img.src = newsContainer[i].image;

        const div2 = document.createElement('div');
        div.appendChild(div2);

        const h1 = document.createElement('h1');
        h1.textContent = newsContainer[i].date;
        div2.appendChild(h1);

        const p = document.createElement('p');
        p.textContent = newsContainer[i].title;
        div2.appendChild(p);

    }
}

function makeFAQ() {

    new FAQ('Who can get vaccinated ?','Nearly everyone can get vaccinated. However, because of some medical conditions, some people should not get certain vaccines, or should wait before getting them.');

    new FAQ('How are vaccines developed and tested ?','The most commonly used vaccines have been around for decades, with millions of people receiving them safely every year. As with all medicines, every vaccine must go through extensive and rigorous testing to ensure it is safe before it can be introduced in a country. An experimental vaccine is first tested in animals to evaluate its safety and potential to prevent disease. It is then tested in human clinical trials, in three phases.');
    
    new FAQ('Are vaccines safe ?','Vaccination is safe and side effects from a vaccine are usually minor and temporary, such as a sore arm or mild fever. More serious side effects are possible, but extremely rare. Any licensed vaccine is rigorously tested across multiple phases of trials before it is approved for use, and regularly reassessed once it is introduced. Scientists are also constantly monitoring information from several sources for any sign that a vaccine may cause health risks.');

    new FAQ('Are there side effects from vaccines ?','Like any medicine, vaccines can cause mild side effects, such as a low-grade fever, or pain or redness at the injection site. Mild reactions go away within a few days on their own.');
}
function renderFAQ() {

    for (let i = 0; i < FAQcontainer.length; i++) {
        const div = document.createElement('div');
        div.className = 'FAQ';
        FAQParent.appendChild(div);

        const h2 = document.createElement('h2');
        h2.textContent = '-'+FAQcontainer[i].question;
        div.appendChild(h2);

        const p = document.createElement('p');
        p.textContent = FAQcontainer[i].answer;
        div.appendChild(p);
    }
}
makeNews();
renderNews();
makeFAQ();
renderFAQ();


initilizeForm();