"use strict";

let flag=0;
function skills() {
    console.log("appuie sur bouton  connard !!!!!");
    if(flag==0) { 
        console.log("1");
        document.getElementById("cardSkills").style.display="flex";
        document.getElementById("cardSkills").style.justifyContent="space-around";
        document.getElementById("cardSkills").style.alignItems="center";
        document.getElementById("containerskills").style.height="600px";
        document.getElementById("containerskills").style.backgroundColor="blue";
        document.getElementById("decrease").value="Fermer les Experiences";
        flag=1;
    }
    else {
        document.getElementById("cardSkills").style.display="none";
        document.getElementById("decrease").value="Ouvrir les Experiences";
        flag=0;
    }
}


function change() {
    let color1=Math.floor(Math.random()*256);
    let color2=Math.floor(Math.random()*256);
    let color3=Math.floor(Math.random()*256);
    let textNb=Math.floor(Math.random()*10);
    let decrease = document.getElementById("decrease");
    let idButton = document.getElementById('button');
    let idText = document.getElementById('text');
    idText.innerHTML=text[textNb];
    decrease.style.backgroundColor=`rgb(${color1}, ${color2}, ${color3})`; 
    idButton.style.backgroundColor=`rgb(${color1}, ${color2}, ${color3})`; 
    idText.style.color=`rgb(${color1}, ${color2}, ${color3})`; 

}

let button = document.querySelector("button");
button.addEventListener("click",change);