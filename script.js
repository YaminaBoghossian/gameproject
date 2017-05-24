"use strict";

//characters 
let herman = {
    name: "Herman",
    energy: 30,
    score: 0,
    lives: 3

}
let roger = {
    name: "Roger",
    energy: 30,
    score: 0,
    lives: 3
}

//attacks /push/ jump /scores /lives 

function hermanAttack() {
    roger.energy = roger.energy - 3;
    herman.energy = herman.energy - 1;
}

function rogerAttack() {
    herman.energy = herman.energy - 3;
    roger.energy = roger.energy - 1;
}


function hermanScore() {
    herman.score = herman.score + 1;
}

function push(character) {
    character.energy = character.energy - 1;
    displayEnergyHerman();
    displayEnergyRoger();
}

function hermanlives() {
    herman.lives = herman.lives - 1;
}

function rogerlives() {
    roger.lives = roger.lives - 1;
}

function recharge(character) {
    character.energy = character.energy + 5;
    displayEnergyHerman();
    displayEnergyRoger();

}
//affichage 
// TODO: à regrouper

function displayEnergyHerman() {
    let energyherman = document.querySelector(".energyherman");
    energyherman.innerHTML = herman.energy;
}

function displayEnergyRoger() {
    let energyroger = document.querySelector(".energyroger");
    energyroger.innerHTML = roger.energy;
}

function displayScoreHerman() {
    let scoreherman = document.querySelector(".scoreherman");
    scoreherman.innerHTML = herman.score;
}

function displayScoreRoger() {
    let scoreroger = document.querySelector(".scoreroger");
    scoreroger.innerHTML = roger.score;
}

function displayLivesHerman() {
    let livesherman = document.querySelector(".livesherman");
    livesherman.innerHTML = herman.lives;
}

function displayLivesRoger() {
    let livesroger = document.querySelector(".livesroger");
    livesroger.innerHTML = roger.lives;
}


//Next ROund 
function nextRound() {
    if (roger.energy <= 0) {
        herman.score += 1;
        alert("Next Round");
        cont();
        lostLife();
    } else if (herman.energy <= 0) {
        roger.score += 1;
        alert("Next Round");
        cont();
        lostLife();
    }
}
//Loose lives 

function lostLife() {
    if (roger.score === 5 || roger.score === 10 || roger.score === 15) {
        herman.lives -= 1;
        alert('Herman, You just lost a life!');
        cont();
        displayLivesHerman();


    } else if (herman.score === 5 || herman.score === 10 || herman.score === 15) {
        roger.lives -= 1;
        alert('Roger, You just lost a life!');
        cont();
        displayLivesRoger();

    }
}

//game over 
function gameOver() {
    if (roger.lives <= 0) {
        alert("Game Over");
        restartgame();
    } else if (herman.lives <= 0) {
        alert("Game Over");
        restartgame();

    }
}

//continuing 
function cont() {
    roger.energy = 30;
    herman.energy = 30;

}
//restart
function restartgame() {
    roger.energy = 30;
    herman.energy = 30;
    roger.lives = 3;
    herman.lives = 3;
    roger.score = 0;
    herman.score = 0;
}


//events buttons 

let buttonherman1 = document.querySelector(".buttonherman1");
buttonherman1.addEventListener("click", function() {
    hermanAttack();
    displayEnergyRoger();
    displayEnergyHerman();
    nextRound();
    gameOver();
    displayEnergyRoger();
    displayEnergyHerman();
    displayScoreHerman();
    displayScoreRoger();
    displayLivesHerman();
    displayLivesRoger();

});

let buttonroger1 = document.querySelector(".buttonroger1");
buttonroger1.addEventListener("click", function() {
    rogerAttack();
    displayEnergyHerman();
    displayEnergyRoger();
    nextRound();
    gameOver();
    displayEnergyHerman();
    displayEnergyRoger();
    displayScoreRoger();
    displayScoreHerman();
    displayLivesHerman();
    displayLivesRoger();
});

let buttonherman2 = document.querySelector(".buttonherman2");
buttonherman2.addEventListener("click", function() {

    push(herman);
    displayEnergyRoger();
    nextRound();
    gameOver();
    displayEnergyRoger();
    displayScoreHerman();
    displayScoreRoger();


});

let buttonroger2 = document.querySelector(".buttonroger2");
buttonroger2.addEventListener("click", function() {
    push(roger);
    displayEnergyHerman();
    nextRound();
    gameOver();
    displayEnergyHerman();
    displayScoreHerman();
    displayScoreRoger();

});

let buttonherman4 = document.querySelector(".buttonherman4");
buttonherman4.addEventListener("click", function() {
    recharge(roger);
    recharge(herman);
});