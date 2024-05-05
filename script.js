function addNewAchievement(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("acField");
    newNode.classList.add("mt-1");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder","Enter here");

    let acOb=document.getElementById("ac");
    let achievementsAddButtonOb=document.getElementById('acAddButton');

    acOb.insertBefore(newNode,achievementsAddButtonOb);
}

function addNewHobbie(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("hbField");
    newNode.classList.add("mt-1");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder","Enter here");

    let hbOb=document.getElementById("hb");
    let hobbieAddButtonOb=document.getElementById('hbAddButton');

    hbOb.insertBefore(newNode,hobbieAddButtonOb);
}

function addNewWe(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-1");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById('weAddButton');

    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewProject(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pjField");
    newNode.classList.add("mt-1");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder","Enter here");

    let pjOb=document.getElementById("pj");
    let pjAddButtonOb=document.getElementById('pjAddButton');

    pjOb.insertBefore(newNode,pjAddButtonOb);
}

//generating resume
function generateCV(){

    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;

    document.getElementById('nameT2').innerHTML=nameField;;

    document.getElementById('contactT').innerHTML=document.getElementById("contactField").value;

    document.getElementById('addressT').innerHTML=document.getElementById("addressField").value;

    document.getElementById('liT').innerHTML=document.getElementById("linkedField").value;

    document.getElementById('gitT').innerHTML=document.getElementById("gitField").value;

    document.getElementById('leetT').innerHTML=document.getElementById("leetField").value;

    document.getElementById('objectiveT').innerHTML=document.getElementById("objectiveField").value;

    document.getElementById('interT').innerHTML=document.getElementById("Intermediate").value;

    document.getElementById('GradT').innerHTML=document.getElementById("Graduation").value;

    //work experience
    let wes=document.getElementsByClassName('weField');
    let str='';

    for(let e of wes){
        str=str + `<li> ${e.value} </li>`
    }

    document.getElementById('weT').innerHTML=str;

    //projects
    let pjs=document.getElementsByClassName('pjField');
    let str1='';

    for(let e of pjs){
        str1=str1 + `<li> ${e.value} </li>`
    }

    document.getElementById('pjT').innerHTML=str1;

    //Hobbies
    let hbs=document.getElementsByClassName('hbField');
    let str2='';

    for(let e of hbs){
        str2=str2 + `<li> ${e.value} </li>`
    }

    document.getElementById('hbT').innerHTML=str2;

    //Achievements
    let acs=document.getElementsByClassName('acField');
    let str3='';

    for(let e of acs){
        str3=str3 + `<li> ${e.value} </li>`
    }

    document.getElementById('acT').innerHTML=str3;

    //code for setting image

    let file=document.getElementById('imgField').files[0];

    let reader=new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    //set the image to template

    reader.onloadend=function(){
        document.getElementById('imgT').src=reader.result;
    }


    document.getElementById('cv-form').style.display='none';
    document.getElementById("cv-template").style.display='block';
}

function printCV(){
    window.print();
}