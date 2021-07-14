'use strict'
function creatDate() {
    let d = new Date();
    let mth = d.getMonth();
    let dt = d.getFullYear();
    let day = d.getDay();
    let h = d.getHours();
    let mins = d.getMinutes();
    return`${dt}/${mth}/${day}. ${h}:${mins}`
}

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

const visitorskey = 'visitorskey';

let subbutton = document.getElementById('formFill');
subbutton.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    // event.preventDefault();
    let age_group = event.target.Old.value;
    if (age_group == "18-39") {
        new Visitor(event.target.fullname.value, event.target.gender.value, "18-39", event.target.vaccine.value,
            [
                [event.target.temperatureRise.id, event.target.temperatureRise.checked],
                [event.target.musclePain.id, event.target.musclePain.checked],
                [event.target.Dyspnea.id, event.target.Dyspnea.checked],
                [event.target.fatigue.id, event.target.fatigue.checked],
                [event.target.headache.id, event.target.headache.checked],
                [event.target.shudder.id, event.target.shudder.checked],
                [event.target.jointPain.id, event.target.jointPain.checked]
            ],
            creatDate()
        )


    }
    else if (age_group == "40-59") {

        new Visitor(event.target.fullname.value, event.target.gender.value, "40-59", event.target.vaccine.value,
            [
                [event.target.temperatureRise.id, event.target.temperatureRise.checked],
                [event.target.musclePain.id, event.target.musclePain.checked],
                [event.target.Dyspnea.id, event.target.Dyspnea.checked],
                [event.target.fatigue.id, event.target.fatigue.checked],
                [event.target.headache.id, event.target.headache.checked],
                [event.target.shudder.id, event.target.shudder.checked],
                [event.target.jointPain.id, event.target.jointPain.checked]
            ],
            creatDate()
        )
    }
    else if (age_group == "60-90") {
        new Visitor(event.target.fullname.value, event.target.gender.value, "60-90", event.target.vaccine.value,
            [
                [event.target.temperatureRise.id, event.target.temperatureRise.checked],
                [event.target.musclePain.id, event.target.musclePain.checked],
                [event.target.Dyspnea.id, event.target.Dyspnea.checked],
                [event.target.fatigue.id, event.target.fatigue.checked],
                [event.target.headache.id, event.target.headache.checked],
                [event.target.shudder.id, event.target.shudder.checked],
                [event.target.jointPain.id, event.target.jointPain.checked]
            ],
            creatDate()
        )
    }

    save();
} function save() {
    const convertedArr = JSON.stringify(visitors);
    localStorage.setItem(visitorskey, convertedArr);
    console.log(convertedArr);
}
// by musa'b
function initilizeForm() {

    if (localStorage.getItem(visitorskey) != null) {
        const loadedStatistics = JSON.parse(localStorage.getItem(visitorskey));
        visitors = loadedStatistics;
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
        new Visitor('Dorgham Basel', 'male', '40-59', 'sinopharm', [
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
initilizeForm();