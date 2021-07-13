'use strict'
const statisticsArray = JSON.parse(localStorage.getItem('visitorskey'));
let profileArray = [];
// function Profile (male, female){
//     this.male = [],
//     this.female= []
//     profileArray.push(this);
// }

// new Profile ( m)
let section = document.getElementById('profile');
console.log(statisticsArray);
for (let i = 0; i < statisticsArray.length; i++) {
    let div = document.createElement('div');
    section.insertBefore(div, section.firstChild);
    let m = document.createElement('img');
    div.appendChild(m);
    let userName = document.createElement('h3');
    div.appendChild(userName);
    let type = document.createElement('h4');
    div.appendChild(type);
    let date = document.createElement('p');
    div.appendChild(date);
    //eElement.insertBefore(newFirstElement, eElement.firstChild);
    
    if (statisticsArray[i].gender == 'male') {
        profileArray.push(statisticsArray[i]);
        m.setAttribute('src', '../icon/male.png');
        type.textContent =statisticsArray[i].typeVaccine;
        userName.textContent = statisticsArray[i].fullname;
        date.textContent = statisticsArray[i].date;

    } else if (statisticsArray[i].gender == 'female') {
        profileArray.push(statisticsArray[i]);
        m.setAttribute('src', '../icon/female.png');
        type.textContent =statisticsArray[i].typeVaccine;
        userName.textContent = statisticsArray[i].fullname;
        date.textContent = statisticsArray[i].date;
    }
}


console.log(profileArray);


