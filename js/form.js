'use strict'
let visitors = [];
function Visitor(gender, age, typeVaccine, symptoms) {
    this.gender = gender;
    this.age = age;
    this.typeVaccine = typeVaccine;
    this.symptoms =symptoms;
    visitors.push(this);
}

const visitorskey ='visitorskey';

let subbutton = document.getElementById('formFill');
subbutton.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    let age_group = event.target.Old.value;
    if (age_group == "18-39") {
        new Visitor(event.target.gender.value, "18-39", event.target.vaccine.value,
            [
                [event.target.temperatureRise.id,event.target.temperatureRise.checked],
                [event.target.musclePain.id,event.target.musclePain.checked],
                [event.target.sensitivityOrShortnessOfBreath.id,event.target.sensitivityOrShortnessOfBreath.checked],
                [event.target.fatigue.id,event.target.fatigue.checked],
                [event.target.headache.id,event.target.headache.checked],
                [event.target.shudder.id,event.target.shudder.checked],
                [event.target.jointPain.id,event.target.jointPain.checked]
            ]
          
        )
     

    }
    else if (age_group == "40-59") {

        new Visitor(event.target.gender.value, "40-59", event.target.vaccine.value,
        [
            [event.target.temperatureRise.id,event.target.temperatureRise.checked],
            [event.target.musclePain.id,event.target.musclePain.checked],
            [event.target.sensitivityOrShortnessOfBreath.id,event.target.sensitivityOrShortnessOfBreath.checked],
            [event.target.fatigue.id,event.target.fatigue.checked],
            [event.target.headache.id,event.target.headache.checked],
            [event.target.shudder.id,event.target.shudder.checked],
            [event.target.jointPain.id,event.target.jointPain.checked]
        ]
      
    )
    }
    else if (age_group == "60-90") {
        new Visitor(event.target.gender.value, "60-90", event.target.vaccine.value,
        [
            [event.target.temperatureRise.id,event.target.temperatureRise.checked],
            [event.target.musclePain.id,event.target.musclePain.checked],
            [event.target.sensitivityOrShortnessOfBreath.id,event.target.sensitivityOrShortnessOfBreath.checked],
            [event.target.fatigue.id,event.target.fatigue.checked],
            [event.target.headache.id,event.target.headache.checked],
            [event.target.shudder.id,event.target.shudder.checked],
            [event.target.jointPain.id,event.target.jointPain.checked]
        ]
      
    )
    }

    const convertedArr = JSON.stringify(visitors);
    localStorage.setItem(visitorskey,convertedArr);
console.log(convertedArr);


}
