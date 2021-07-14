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

const vaccineTypes = ['visor', 'estraZeneca', 'sinopharm', 'biontech'];
let g1_vaccineVals = [0, 0, 0, 0];

let g2_vaccineVals = [0, 0, 0, 0];

let g3_vaccineVals = [0, 0, 0, 0];

const _symptoms = ['temperatureRise', 'musclePain', 'Dyspnea', 'fatigue', 'headache', 'shudder', 'jointPain'];
let g1_symptomsVals = [0, 0, 0, 0, 0, 0, 0];

let g2_symptomsVals = [0, 0, 0, 0, 0, 0, 0];

let g3_symptomsVals = [0, 0, 0, 0, 0, 0, 0];


let inumber = 0;
let divnumber = 0;

function distributeAgeGroups() {

    for (let i = 0; i < statisticsArray.length; i++) {

        if (statisticsArray[i].age == '18-39') {
            ageGroup1.push(statisticsArray[i]);
        }
        else if (statisticsArray[i].age == '40-59') {
            ageGroup2.push(statisticsArray[i]);
        }
        else if (statisticsArray[i].age == '60-90') {
            ageGroup3.push(statisticsArray[i]);
        }

    }
}


function renderAgeGroup(ageGroup, malesNum, femalesNum, groupVaccineVals, groupSymptomVals) {

    for (let i = 0; i < ageGroup.length; i++) {

        const gender = ageGroup[i].gender;
        const takenVaccine = ageGroup[i].typeVaccine;
        const symptomsArr = ageGroup[i].symptoms;


        //add to gender arrays
        if (gender == 'male') {
            malesNum++;
        }
        else if (gender == 'female') {
            femalesNum++;
        }


        //adding to vaccine type values
        for (let j = 0; j < vaccineTypes.length; j++) {

            if (vaccineTypes[j] == takenVaccine) {
                groupVaccineVals[j]++;
            }
        }

        // loop through each symptom and get
        for (let h = 0; h < _symptoms.length; h++) {

            if (symptomsArr[h][1] == true) {
                groupSymptomVals[h]++;
            }

        }
    }
    viewCharts(vaccineTypes, _symptoms, groupVaccineVals, groupSymptomVals);
    makeDoughnutChart(malesNum, femalesNum);

}
distributeAgeGroups();
renderAgeGroup(ageGroup1, ageGroup1MalesNumber, ageGroup1FemalesNumber, g1_vaccineVals, g1_symptomsVals);
renderAgeGroup(ageGroup2, ageGroup2MalesNumber, ageGroup2FemalesNumber, g2_vaccineVals, g2_symptomsVals);
renderAgeGroup(ageGroup3, ageGroup3MalesNumber, ageGroup3FemalesNumber, g3_vaccineVals, g3_symptomsVals);

function viewCharts(label1, label2, vals1, vals2) {
    // Chart.defaults.global.defaultFontColor = "#fff";
    Chart.defaults.borderColor = '#8c8c8c';
    Chart.defaults.color = '#3C3C3C';

    Chart.defaults.font.size = 17;
    Chart.defaults.font.style ='normal'	;
    // <canvas id="ageGroup1Chart" width="200" height="200"></canvas>
    const div = document.createElement('div');
    div.id = 'chart' + inumber;
    var barColors = ['#37C8EC','#37C8EC','#37C8EC','#37C8EC','pink','pink','pink','pink','pink','pink','pink'];

    const parent = document.getElementById('dataresult');
    parent.appendChild(div);
    const ctx = document.createElement('canvas');
    div.appendChild(ctx);
    ctx.width = 200;
    ctx.height = 200;
    ctx.font = "semibold 20px 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {

            labels: label1.concat(label2),
            datasets: [{
                label: 'Type of vaccine  ',
                data: vals1.concat(vals2),//vaccines taken at this age
                backgroundColor: barColors,
                borderColor: barColors,
                borderWidth: 1,
                scaleFontColor: "#FFFFFF",
                lineWidth: 25,
            },
            {
               // labels: label2,
               type: 'bar',
               label: 'The Sympos ',
              // data:vals2,
               backgroundColor: 'pink',

            },
       

            ]
        

        },
        options: {


            indexAxis: 'y',// horizintal chart 
            plugins: {  // 'legend' now within object 'plugins {}'
                legend: {
                    labels: {
                        color: "black",  // not 'fontColor:' anymore
                        // fontSize: 18  // not 'fontSize:' anymore
                        font: {
                            size: 18, // 'size' now within object 'font {}'
                        }
                    }
                    
                }

            }, 
          
            data: {
                color: "black",  // not 'fontColor:' anymore
                // fontSize: 18  // not 'fontSize:' anymore
                font: {
                    size: 18, // 'size' now within object 'font {}'
                    style:'normal',
                }
            }


        },


    });
}
function makeDoughnutChart(males, females) {

    // Chart.defaults.global.defaultFontColor = "#fff";
    Chart.defaults.borderColor = '#8D4AF6';
    Chart.defaults.color = '#0054c2';
    Chart.defaults.font.size = 17;
    
    const parent = document.getElementById('dataresult');
    const parentdiv = document.createElement('div');
    const h2 = document.createElement('h2');
    parentdiv.appendChild(h2);
  

    if (divnumber == 0) {

        h2.textContent = 'Age group : 18-39';
        // p.textContent = 'This chart provides the side effect of the vaccines for variety of types based on the data which filled by the user in the form page for age grope 18-39. ';

    }
    else if (divnumber == 1) {

        h2.textContent = ' Age group : 40-59';
        // p.textContent = 'This chart provides the side effect of the vaccines for variety of types based on the data which filled by the user in the form page for age grope 40-59. ';
    }
    else if (divnumber == 2) {

        h2.textContent = ' Age group : 60-90';
        // p.textContent = 'This chart provides the side effect of the vaccines for variety of types based on the data which filled by the user in the form page for age grope 60-90. ';
    }

    parent.appendChild(parentdiv);
    parentdiv.id = 'parentdiv' + divnumber;
    divnumber++;
    parentdiv.appendChild(document.getElementById('chart' + inumber));
    console.log(document.getElementById('chart' + inumber));
    inumber++;

    const div = document.createElement('div');
    div.id = 'chart' + inumber;
    inumber++;
    parentdiv.appendChild(div);
    const ctx = document.createElement('canvas');
    div.appendChild(ctx);
    const p = document.createElement('p');
    div.appendChild(p)
    if (divnumber == 1) {

         p.textContent = 'This chart provides the side effect of the vaccines for variety of types based on the data which filled by the user in the form page for age grope 18-39. ';

    }
    else if (divnumber == 2) {

        
         p.textContent = 'This chart provides the side effect of the vaccines for variety of types based on the data which filled by the user in the form page for age grope 40-59. ';
    }
    else if (divnumber == 3) {

         p.textContent = 'This chart provides the side effect of the vaccines for variety of types based on the data which filled by the user in the form page for age grope 60-90. ';
    }


    ctx.width = 200;
    ctx.height = 200;
 // var gend = males / (females + males) * 100;
    let gend = (males * 100/(females+males)).toFixed(2);
    // var gend2 = females / (females + males) * 100;
    let gend2 = (females * 100/(females+males)).toFixed(2);
    //let percentage = (value*100 / sum).toFixed(2)+"%";
    
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {

            show: true,

            labels: ['Males', 'Females'],
            datasets: [{
                label: 'data',
               




                data: [gend, gend2],//vaccines taken at this age
                backgroundColor: [
                    '#37C8EC',
                    'rgb(255, 204, 204)'

                    ,
                ],
                hoverOffset: 10,

                Fontcolor: [
                    'black'
                ],


                borderColor: [
                    '#37C8EC',
                    'rgb(255, 204, 204)',
                ],

                borderWidth: 1,
                scaleFontColor: "#FFFFFF",
                lineWidth: 25

            }
            ]
        },

        options: {



            
           tooltips: {
                enabled: false
            },
            plugins: {

                // 'legend' now within object 'plugins {}'
                legend: {
                    labels: {
                        color: "black",  // not 'fontColor:' anymore
                        // fontSize: 18  // not 'fontSize:' anymore
                        font: {
                            size: 18 // 'size' now within object 'font {}'
                        }
                    }
                },
                datalabels: {
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        // let percentage = (value * 100 / sum).toFixed(2) + "%";
                        return percentage;
                    },
                    color: '#fff',
                }
            }
        }

    });
    
}