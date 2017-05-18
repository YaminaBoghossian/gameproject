//definir les objets personnages
let herman = {
    name: "Herman",
    energy: 4
}
let roger = {
    name: "Roger",
    energy: 4
}


//creation fonction  attack et changement energie   
function hermanAttack() {
    roger.energy = roger.energy - 1;
}

function affichEnergyRoger() {
    let energieroger = document.querySelector(".energieroger");
    energieroger.innerHTML = roger.energy;
}

function rogerAttack() {
    herman.energy = herman.energy - 1;
}

function affichEnergyHerman() {
    let energieherman = document.querySelector(".energieherman");
    energieherman.innerHTML = herman.energy;
}



let buttonherman1 = document.querySelector(".buttonherman1");
buttonherman1.addEventListener("click", function() {
    hermanAttack();
    affichEnergyRoger();

});

let buttonroger1 = document.querySelector(".buttonroger1");
buttonroger1.addEventListener("click", function() {
    rogerAttack();
    affichEnergyHerman();



});