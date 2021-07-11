'use strict'

const statisticsArray = JSON.parse(localStorage.getItem('visitorskey'));

let ageGroup1 = [];
let ageGroup1MalesNumber = 0;
let ageGroup1FemalesNumber = 0;

let ageGroup2 = [];
let ageGroup2MalesNumber = 0;
let ageGroup2FemalesNumber = 0;

let ageGroup3 = [];
let ageGroup3MalesNumber = 0;
let ageGroup3FemalesNumber = 0;

const vaccineTypes = ['visor','estraZeneca','sinopharm','biontech'];
let g1_vaccineVals = [0,0,0,0];

let g2_vaccineVals = [0,0,0,0];

let g3_vaccineVals = [0,0,0,0];

const _symptoms = ['temperatureRise','musclePain','sensitivityOrShortnessOfBreath','fatigue','headache','shudder','jointPain'];
let g1_symptomsVals = [0,0,0,0,0,0,0];

let g2_symptomsVals = [0,0,0,0,0,0,0];

let g3_symptomsVals = [0,0,0,0,0,0,0];

function distributeAgeGroups(){

    for (let i = 0; i < statisticsArray.length; i++) {

        if(statisticsArray[i].age == '18-39')
        {
            ageGroup1.push(statisticsArray[i]);
        }
        else if(statisticsArray[i].age == '40-59')
        {
            ageGroup2.push(statisticsArray[i]);
        }
        else if(statisticsArray[i].age == '60-90')
        {
            ageGroup3.push(statisticsArray[i]);
        }
        
    }
}


function renderAgeGroup(ageGroup,malesNum,femalesNum,groupVaccineVals,groupSymptomVals){

    for (let i = 0; i < ageGroup.length; i++) {

        const gender = ageGroup[i].gender;
        const takenVaccine = ageGroup[i].typeVaccine;
        const symptomsArr = ageGroup[i].symptoms;

        
        //add to gender arrays
        if(gender == 'male'){
            malesNum++;
        }
        else if(gender == 'female'){
            femalesNum++;
        }
        

        //adding to vaccine type values
        for (let j = 0; j < vaccineTypes.length; j++) {

            if(vaccineTypes[j] == takenVaccine)
            {
                groupVaccineVals[j]++;
            }
        }

        // loop through each symptom and get
        for (let h = 0; h < _symptoms.length; h++) {

            if(symptomsArr[h][1] == true)
            {
                groupSymptomVals[h]++;
            }
            
        }
    }
    viewCharts(vaccineTypes,_symptoms,groupVaccineVals,groupSymptomVals);
    makeDoughnutChart(malesNum,femalesNum);

}
distributeAgeGroups();
renderAgeGroup(ageGroup1,ageGroup1MalesNumber,ageGroup1FemalesNumber,g1_vaccineVals,g1_symptomsVals);
renderAgeGroup(ageGroup2,ageGroup2MalesNumber,ageGroup2FemalesNumber,g2_vaccineVals,g2_symptomsVals);
renderAgeGroup(ageGroup3,ageGroup3MalesNumber,ageGroup3FemalesNumber,g3_vaccineVals,g3_symptomsVals);

function viewCharts(label1,label2,vals1,vals2) {
    // Chart.defaults.global.defaultFontColor = "#fff";
    Chart.defaults.borderColor = '#8D4AF6';
    Chart.defaults.color = '#0054c2';
    Chart.defaults.font.size = 17;
    // <canvas id="ageGroup1Chart" width="200" height="200"></canvas>
    const div = document.createElement('div');
    const parent = document.getElementById('dataresult');
    parent.appendChild(div);
    const ctx = document.createElement('canvas');
    div.appendChild(ctx);
    ctx.width = 200;
    ctx.height = 200;
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: label1.concat(label2),
            datasets: [{
                label: 'data',
                data: vals1.concat(vals2),//vaccines taken at this age
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
                scaleFontColor: "#FFFFFF",
                lineWidth: 25
            }
            ]
        },
    });
}
function makeDoughnutChart(males,females) {
    // Chart.defaults.global.defaultFontColor = "#fff";
    Chart.defaults.borderColor = '#8D4AF6';
    Chart.defaults.color = '#0054c2';
    Chart.defaults.font.size = 17;
    const div = document.createElement('div');
    const parent = document.getElementById('dataresult');
    parent.appendChild(div);
    const ctx = document.createElement('canvas');
    div.appendChild(ctx);
    ctx.width = 200;
    ctx.height = 200;
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Males','Females'],
            datasets: [{
                label: 'data',
                data: [males,females],//vaccines taken at this age
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
                scaleFontColor: "#FFFFFF",
                lineWidth: 25
            }
            ]
        },
    });
}