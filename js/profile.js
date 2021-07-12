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
    section.appendChild(div);
    let m = document.createElement('img');
    div.appendChild(m);
    let userName = document.createElement('h3');
    div.appendChild(userName);
    let date = document.createElement('p');
    div.appendChild(date);

    
    if (statisticsArray[i].gender == 'male') {
        profileArray.push(statisticsArray[i]);
        m.setAttribute('src', '../icon/male.png');
        userName.textContent = 'statisticsArray[i].fullname';
        date.textContent = new Date();

    } else if (statisticsArray[i].gender == 'female') {
        profileArray.push(statisticsArray[i]);
        m.setAttribute('src', '../icon/female.png');
        userName.textContent = 'statisticsArray[i].fullname';
        date.textContent = new Date();
    }
}


console.log(profileArray);


