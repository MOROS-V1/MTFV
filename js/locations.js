'use strict'


let locationsArr = [];

function VaccineLocation(locationName, link) {

    this.locationName = locationName;
    this.link = link;
    locationsArr.push(this);
}

let jordanMap = new VaccineLocation('Jordan','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916941.6954968707!2d35.12383742921876!3d31.218118545350734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15006f476664de99%3A0x8d285b0751264e99!2sJordan!5e0!3m2!1sen!2sjo!4v1626198036413!5m2!1sen!2sjo');

function makeLocations() {

    // Amman
    new VaccineLocation('Amman', 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d142572.59582337656!2d35.87631782706271!3d31.924995053541895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2KfZhNmF2LfYudmI2YU!5e0!3m2!1sen!2sjo!4v1625911358345!5m2!1sen!2sjo');

    // Irbid
    new VaccineLocation('Irbid', 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d169659.81120773312!2d35.816489172606!3d32.52158441331574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2KfZhNmF2LfYudmI2YUg2KfYsdio2K8!5e0!3m2!1sen!2sjo!4v1625911564860!5m2!1sen!2sjo');

    // Alsalt
    new VaccineLocation('Alsalt', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36643.38554938678!2d35.70733940284759!3d32.03556887437418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cbd1654d5c8e5%3A0x61f22c89710c16af!2sAlBalqa%20Applied%20University!5e0!3m2!1sen!2sjo!4v1625911668158!5m2!1sen!2sjo');

    // Jerash
    new VaccineLocation('Jerash', 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d41315.8734160246!2d35.87890482198448!3d32.28444487293396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2KfZhNmF2LfYudmI2YUg2KzYsdi0!5e0!3m2!1sen!2sjo!4v1625911763821!5m2!1sen!2sjo');

    // Zarqa
    new VaccineLocation('Zarqa', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34082.33361028626!2d36.143789902177!3d32.05853404748942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b6e180ca7b299%3A0xbe2b1f51ef76f510!2sZarqa%20University!5e0!3m2!1sen!2sjo!4v1625911926820!5m2!1sen!2sjo');

    // Tafila
    new VaccineLocation('Tafila', 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d32829.5651489753!2d35.60203930394787!3d30.831868681311146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2KfZhNmF2LfYudmI2YUg2KfZhNi32YHZitmE2Kk!5e0!3m2!1sen!2sjo!4v1625912013795!5m2!1sen!2sjo');

    // Ajloun
    new VaccineLocation('Ajloun', 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62771.81502510219!2d35.73035660868857!3d32.331283857163314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2KfZhNmF2LfYudmI2YUg2LnYrNmE2YjZhg!5e0!3m2!1sen!2sjo!4v1625914651693!5m2!1sen!2sjo');

    // Aqaba
    new VaccineLocation('Aqaba', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52037.69721354942!2d35.01274254461515!3d29.55362054045645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15006f97c84fec79%3A0x1c8d57a78f76b1eb!2sPrince%20Hashem%20bin%20Abdullah%20Military%20Hospital!5e0!3m2!1sen!2sjo!4v1625914838668!5m2!1sen!2sjo');

    //Karak
    new VaccineLocation('Karak', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8417.407100593473!2d35.73015966839885!3d31.176465358553685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150370abfc2a7537%3A0x9eabaf808673222d!2sPrince%20Ali%20Military%20Hospital!5e0!3m2!1sen!2sjo!4v1625915001500!5m2!1sen!2sjo');

    //Madaba
    new VaccineLocation('Madaba', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.619616964815!2d35.79358152642184!3d31.72628420181851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cacdcd3a6ab51%3A0xcaf969c5a21f6d63!2z2YXYr9mK2LHZitipINi12K3YqSDZhdit2KfZgdi42Kkg2YXYp9iv2KjYpw!5e0!3m2!1sen!2sjo!4v1625915124873!5m2!1sen!2sjo');

    // Maan
    new VaccineLocation('Maan', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36034.930511058075!2d35.71103128713028!3d30.198460405303805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15014619e24077fd%3A0x44f070ad45e6ca85!2z2YXYsdmD2LIg2LXYrdmKINmF2LnYp9mGINin2YTYtNin2YXZhA!5e0!3m2!1sen!2sjo!4v1625916219727!5m2!1sen!2sjo');

    // Mafraq
    new VaccineLocation('Mafraq', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d908063.8799756999!2d36.6466942963578!3d32.30374674081376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1516e8fe655bff37%3A0xff3800f2fe629276!2sRuwaished%20Hospital!5e0!3m2!1sen!2sjo!4v1625916140204!5m2!1sen!2sjo');
}

function renderDesiredLocation(event) {
    event.preventDefault();

    //clear previous elements if they exist
    const container = document.getElementById("locationsContainer");
    container.textContent = '';

    //create the selected location

    for (let i = 0; i < locationsArr.length; i++) {

        if (event.target.vaccineLocs.value == locationsArr[i].locationName) {
            const div = document.createElement('div');
            div.className = 'gmap_canvas';
            container.appendChild(div);

            const h2 = document.createElement('h2');
            div.appendChild(h2);
            h2.textContent = locationsArr[i].locationName;

            const iframe = document.createElement('iframe');
            div.appendChild(iframe);
            iframe.width = '600';
            iframe.height = '500';
            iframe.id = 'gmap_canvas' + i;
            iframe.src = locationsArr[i].link;
            iframe.frameborder = "0";
            iframe.marginheight = "0"
            iframe.marginwidth = "0";

            break;
        }
    }
}

function renderIndivisualLocation(location){

    const container = document.getElementById("locationsContainer");
    container.textContent = '';

    const div = document.createElement('div');
    div.className = 'gmap_canvas';
    container.appendChild(div);

    const h2 = document.createElement('h2');
    div.appendChild(h2);
    h2.textContent = location.locationName;

    const iframe = document.createElement('iframe');
    div.appendChild(iframe);
    iframe.width = '600';
    iframe.height = '500';
    iframe.id = 'gmap_canvas_jordan';
    iframe.src = location.link;
    iframe.frameborder = "0";
    iframe.marginheight = "0"
    iframe.marginwidth = "0";
}


function initilize() {
    makeLocations();

    renderIndivisualLocation(jordanMap);

    const vaccineLocationsForm = document.getElementById('locationForm');
    vaccineLocationsForm.addEventListener('submit', renderDesiredLocation);
}

initilize();