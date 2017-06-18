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

//attacks /push/ jump /SCORES SCORES  /lives 

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
    displayEnergyHerman();
    displayEnergyRoger();
    jauge1.value = 30;
    jauge2.value = 30;
    character.energy = 30;


}

/* animation attack */

function animattackherman() {
    let attack = document.querySelector('.explosionherm');
    attack.style.display = 'block';
    setTimeout(function() {
        attack.style.display = "none";
    }, 2000);

}

function animattackroger() {
    let attack = document.querySelector('.explosionro');
    attack.style.display = 'block';
    setTimeout(function() {
        attack.style.display = "none";
    }, 2000);
}


/* animation push */

function hermanMove() {
    let herman = document.querySelector('.herman');
    let hermanclass = herman.className;
    herman.classList.add('hermanmove');
    herman.addEventListener('animationend', function() {
        herman.className = hermanclass;
    })
}

function rogerpushed() {
    let roger = document.querySelector('.roger');
    let rogerclass = roger.className;
    roger.classList.add('rogerpushed');
    roger.addEventListener('animationend', function() {
        roger.className = rogerclass;
    })
}

function rogerMove() {
    let roger = document.querySelector('.roger');
    let rogerclass = roger.className;
    roger.classList.add('rogermove');
    roger.addEventListener('animationend', function() {
        roger.className = rogerclass;
    })
}

function hermanpushed() {
    let herman = document.querySelector('.herman');
    let hermanclass = herman.className;
    herman.classList.add('hermanpushed');
    herman.addEventListener('animationend', function() {
        herman.className = hermanclass;
    })
}

/* animation jump */

function hermanjumps() {
    let herman = document.querySelector('.herman');
    let hermanclass = herman.className;
    herman.classList.add('hermanjumps');
    herman.addEventListener('animationend', function() {
        herman.className = hermanclass;
    })
}

function rogerjumps() {
    let roger = document.querySelector('.roger');
    let rogerclass = roger.className;
    roger.classList.add('rogerjumps');
    roger.addEventListener('animationend', function() {
        roger.className = rogerclass;
    })
}

/*jauge */

function jauge(elem, val) {
    elem.value = elem.value - val;

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
    jauge1.value = 30;
    jauge2.value = 30;

}
//restart
function restartgame() {
    roger.energy = 30;
    herman.energy = 30;
    roger.lives = 3;
    herman.lives = 3;
    roger.score = 0;
    herman.score = 0;
    jauge1.value = 30;
    jauge2.value = 30;
}


//events buttons 

let buttonherman1 = document.querySelector(".buttonherman1");
buttonherman1.addEventListener("click", function() {
    hermanAttack();
    animattackherman();
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
    jauge(jauge1, 1);
    jauge(jauge2, 3);

});

let buttonroger1 = document.querySelector(".buttonroger1");
buttonroger1.addEventListener("click", function() {
    rogerAttack();
    animattackroger();
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
    jauge(jauge2, 1);
    jauge(jauge1, 3);
});

let buttonherman2 = document.querySelector(".buttonherman2");
buttonherman2.addEventListener("click", function() {

    push(roger);
    hermanMove();
    rogerpushed();
    displayEnergyRoger();
    nextRound();
    gameOver();
    displayEnergyRoger();
    displayScoreHerman();
    displayScoreRoger();
    jauge(jauge2, 1);


});

let buttonroger2 = document.querySelector(".buttonroger2");
buttonroger2.addEventListener("click", function() {
    push(herman);
    rogerMove();
    hermanpushed();
    displayEnergyHerman();
    nextRound();
    gameOver();
    displayEnergyHerman();
    displayScoreHerman();
    displayScoreRoger();
    jauge(jauge1, 1);

});

let buttonherman3 = document.querySelector(".buttonherman3");
buttonherman3.addEventListener('click', function() {
    hermanjumps();
});

let buttonroger3 = document.querySelector('.buttonroger3');
buttonroger3.addEventListener('click', function() {
    rogerjumps();
});

let buttonherman4 = document.querySelector(".buttonherman4");
buttonherman4.addEventListener("click", function() {

    recharge(herman);


});

let buttonroger4 = document.querySelector(".buttonroger4");
buttonroger4.addEventListener("click", function() {
    recharge(roger);

});

let jauge1 = document.querySelector('#advancement1');
let jauge2 = document.querySelector('#advancement2');