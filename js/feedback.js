'use strict'

let feedbackarray = [];
let namesarray = [];
let textarray = [];






// construction function
function feedback(name, text) {

    this.name = name;
    this.text = text;
    feedbackarray.push(this);

}




// Form:


let theform = document.getElementById('form');
theform.addEventListener('submit', handlesumbit);

function handlesumbit(event) {

    event.preventDefault();
    let newname = event.target.name.value;
    let newtext = event.target.feedbacktext.value;
    //console.log(newname);
    //console.log(newtext);

    let info = new feedback(newname, newtext);
    //console.log(namesarray);



    // console.log(info);

    savedinfo();
    renderdata(newname, newtext);

}




function renderdata(name1, paragraph) {

    let d = new Date();
    let section1 = document.getElementById("results");
    let div = document.createElement('div');
   
    section1.appendChild(div);
   
    div.className ="list";
    let header = document.createElement('h3');
    
    div.appendChild(header);
    header.textContent = name1;
    let header2 =document.createElement('h5');
    div.appendChild(header2);
    header2.textContent =  d.toDateString();
   
    let para = document.createElement('p');
    div.appendChild(para);
    para.textContent = paragraph;
   
  //  section1.insertBefore(div ,section1[1]) ;
  insertAfter(section1.firstChild, div);

}



// saved data into local 

function savedinfo() {

    const convertedArr = JSON.stringify(feedbackarray);
    localStorage.setItem('feedbackarray', convertedArr);
    //console.log(convertedArr);

}


// get data from local 
function getinfo() {
    const data = localStorage.getItem('feedbackarray');
    //console.log(data);
    const parsedata = JSON.parse(data);

    //console.log(parsedata);
    if (parsedata) {

        feedbackarray = parsedata;
        

    }

}

getinfo();
renderloadedinfo();

console.log(feedbackarray);


function renderloadedinfo() {
    // if (feedbackarray.length <= 8){
    //     console.log(feedbackarray.length)
    //     localStorage.clear();
    // }

    let d = new Date();
    for (let i = 0; i < feedbackarray.length; i++) {
        console.log(feedbackarray.length);
        let section1 = document.getElementById("results");

        let div = document.createElement('div')
        div.className ="list";
        section1.appendChild(div);
        let header = document.createElement('h3');
         div.appendChild(header);
        header.textContent = feedbackarray[i].name;
        let header2 =document.createElement('h5');
        div.appendChild(header2);
        div.className ="list"
        header2.textContent =  d.toDateString();
        let para = document.createElement('p');
       div.appendChild(para);
        para.textContent = feedbackarray[i].text;
        //section1.insertBefore(div ,section1[1]) ;
        insertAfter(section1.firstChild, div);


}

}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

//getinfo();


//header.insertBefore(div , header);