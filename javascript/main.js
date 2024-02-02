import dom from "./dom.js";
import Joueur from "./joueur.js";
import nouveauJeuDeCartes from "./jeuDeCartes.js";

let jeuDeCartes = nouveauJeuDeCartes();
const joueur = new Joueur("joueur");
const dealer = new Joueur("dealer");
let cagnotte = 1000;
let mise;

let current = document.getElementById("buttons");
let divCagnotte = document.createElement("div");
current.appendChild(divCagnotte);
let displayCagnotte = document.getElementById("cagnotteJoueur");
displayCagnotte.innerHTML = cagnotte;

let startBtn = document.createElement("button");
startBtn.innerText = "Start";
divCagnotte.appendChild(startBtn);

function start() {
    jeuDeCartes = nouveauJeuDeCartes();
    joueur.reset();
    dealer.reset();
    dom.reset();
    dom.informations.textContent = "Start"
}

<<<<<<< HEAD
=======
function restart(){
    let temp = cagnotte;
    start();
    dealTwoCards()
    mBtn.forEach(btn => btn.style.display = "inline");
    newCard.style.display = "none";
    outcome.style.display = "none";
    restartBtn.style.display = "none";
    mBtn.forEach(btn => {
        btn.addEventListener('click', function (event) {
            mise = parseInt(event.target.textContent.split("$")[1]);

            
            mBtn.forEach(btn => btn.style.display = "none");
            newCard.style.display = "inline";
            outcome.style.display = "inline";
            restartBtn.style.display = "inline";

            updateCagnote(cagnotte, mise);
        });
    });

    cagnotte = temp;
}
>>>>>>> main


function dealTwoCards() {
    joueur.prendUneCarte(jeuDeCartes);
    joueur.prendUneCarte(jeuDeCartes);

    dealer.prendUneCarte(jeuDeCartes);
}

function nouvelleCarte() {
    joueur.prendUneCarte(jeuDeCartes)
    dom.informations.textContent = "Nouvelle Carte"
}

function updateCagnote(cagnotte, mise) {
<<<<<<< HEAD

    if (mise > cagnotte) {
        console.log("You can't bet more than u have");
    } else {
        let temp;
        temp = cagnotte - mise;
        displayCagnotte.innerText = temp
=======
    if (mise > cagnotte) {
        dom.informations.textContent = "You can't bet more than you have!";
    } else {
        let temp = cagnotte - mise;
        displayCagnotte.innerText = temp;
>>>>>>> main
    }
}

function profitCalculator(mise, multiplicator) {
<<<<<<< HEAD
    let temps = mise * multiplicator;
    let total = cagnotte += temps;
    displayCagnotte.innerText = total;
=======
        let temps = mise * multiplicator;
        let total =  cagnotte += temps;
        displayCagnotte.innerText = total;
>>>>>>> main
}

function outcomes() {
    let outcome;
    let multiplicator

    if (joueur.points > 21) {
        outcome = 'You Lose'
        multiplicator = 0;
<<<<<<< HEAD
        profitCalculator(mise, multiplicator);
=======
        profitCalculator(mise, multiplicator)
        restart();
>>>>>>> main
    }
    else if (joueur.points == 21) {
        outcome = `Tu as gagné 1.5x ta mise`;
        multiplicator = 1.5;
        profitCalculator(mise, multiplicator);
<<<<<<< HEAD
=======
        restart()
>>>>>>> main
    }
    else {
        if (dealer.points > 21) {
            outcome = `Tu as gagné 1x ta mise`;
            multiplicator = 2
            profitCalculator(mise, multiplicator);
<<<<<<< HEAD
=======
            restart();
>>>>>>> main
        }
        else {
            if (joueur.points > dealer.points) {
                outcome = `Tu as gagné 1x ta mise`;
                multiplicator = 2;
                profitCalculator(mise, multiplicator);
<<<<<<< HEAD
=======
                restart();
>>>>>>> main
            }
            else {
                outcome = `Tu as perdu ta mise`;
                multiplicator = 0;
                profitCalculator(mise, multiplicator);
<<<<<<< HEAD
=======
                restart();
>>>>>>> main
            }
        }
    }
    dom.informations.textContent = outcome;
}

let m1 = document.createElement("button");
m1.innerText = "$1";
m1.className = 'mBtn';

let m5 = document.createElement("button");
m5.innerText = "$5";
m5.className = 'mBtn';

let m25 = document.createElement("button");
m25.innerText = "$25";
m25.className = 'mBtn';

let m100 = document.createElement("button");
m100.innerText = "$100";
m100.className = 'mBtn';

let m500 = document.createElement("button");
m500.innerText = "$500";
m500.className = 'mBtn';

let m2500 = document.createElement("button");
m2500.innerText = "$2500";
m2500.className = 'mBtn';

let newCard = document.createElement("button")
newCard.innerText = "hit"

let stand = document.createElement("button")
stand.innerText = "stand";

<<<<<<< HEAD
let double = document.createElement("button")
double.innerText = "double";
=======
let double = document.createElement("double")
double.innerText = "stand";
>>>>>>> main

let outcome = document.createElement("button")
outcome.innerText = "outcome";

let restartBtn = document.createElement("button")
<<<<<<< HEAD
restartBtn.innerHTML = "Restart"

// Assume dealTwoCard is defined somewhere in your code
// dealTwoCard.style.display = "none";
=======
restartBtn.innerHTML ="Restart"


>>>>>>> main

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none"
    divCagnotte.appendChild(m1);
    divCagnotte.appendChild(m5);
    divCagnotte.appendChild(m25);
    divCagnotte.appendChild(m100);
    divCagnotte.appendChild(m500);
    divCagnotte.appendChild(m2500);
    start();
});

let mBtn = [m1, m5, m25, m100, m500, m2500];

mBtn.forEach(btn => btn.addEventListener('click', function (event) {
<<<<<<< HEAD
    mBtn.forEach(btn => btn.style.display = "none");
    mise = parseInt(event.target.textContent.split("$")[1]);
    divCagnotte.appendChild(newCard);
    divCagnotte.appendChild(outcome);
    divCagnotte.appendChild(double);
    divCagnotte.appendChild(restartBtn);
    updateCagnote(cagnotte, mise);
    dealTwoCards()
}));

double.addEventListener("click", () => {
    mise *= 2;
    cagnotte -= mise;
    nouvelleCarte();
    displayCagnotte.innerText = cagnotte
});
=======
    mise = parseInt(event.target.textContent.split("$")[1]);

    if (mise > cagnotte) {
        dom.informations.textContent = "You can't bet more than you have!";
    } else {
        mBtn.forEach(btn => btn.style.display = "none");
        divCagnotte.appendChild(newCard);
        divCagnotte.appendChild(outcome);
        divCagnotte.appendChild(restartBtn);
        updateCagnote(cagnotte, mise);
        dealTwoCards();
    }
}));
>>>>>>> main

newCard.addEventListener("click", () => {
    nouvelleCarte();
})

outcome.addEventListener("click", () => {
    outcomes();
    profitCalculator(mise, multiplicator);
});

restartBtn.addEventListener("click", () => {
<<<<<<< HEAD
    let temp = cagnotte;
    start();
    dealTwoCards()
    cagnotte = temp
=======
    restart();
>>>>>>> main
})