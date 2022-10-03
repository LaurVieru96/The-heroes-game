//       Class inheritance EXTEND       
// class Person {
//    constructor(firstName, secondName) {
//       this.firstName = firstName;
//       this.secondName = secondName;
//    }
//    fullName() {
//       console.log(`fullname = ${this.firstName} ${this.secondName}`);
//       return `fullname = ${this.firstName} ${this.secondName}`;
//    }
// }

// let x = new Person('Xulescu', 'Prfff');
// x.fullName();
// console.log(x);

// class PersonDetails extends Person {
//    constructor() {
//       super(firstName, secondName)
//       this.age = 30;
//       this.height = 175;
//    }
// }


// THE HEROES GAME ! 🦸‍♀️

// START APPLICATION //
class Hero {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.canFly = false;
    this.shield = false;
  }

  attacked(damage) {
    // if hero has 'can fly' properties are 50% to avoid damage;
    if (this.canFly) {
      let chance = Math.random();
      if (chance > 0.5) {
        console.log(this.name + " flew away ! 💸");
        damage = 0;
      }
    }

    // if hero has 'shield' damage -20%;
    if (this.shield) {
      damage *= 0.8;           // dmg - 0.2    
      console.log(this.name + " defence with a shield !");
    }
    this.hp -= damage;
    console.log(this.name + " has been attacked. HP reduced by " + damage + ". HP remaining: " + this.hp + ".");
  }
};

class Dwarf extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.shield = true;
  }
  attack(otherHero) {                              // other hero is attacked
    let damage = 15;
    console.log(`${this.name} attacked with damage: ${damage}.`);
    otherHero.attacked(damage);                    //other hero attack
  }
}

class Sprite extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
  }
  attack(otherHero) {
    let damage = 20;
    console.log(`${this.name} attacked with damage: ${damage}.`);
    otherHero.attacked(damage);
  }
}

class Dragon extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
    this.shield = true;
  }
  attack(otherHero) {
    let damage = 25;
    console.log(`${this.name} attacked with damage: ${damage}.`);
    otherHero.attacked(damage);
  }
}

class Fight {
  constructor(hero1, hero2) {
    this.hero1 = hero1;
    this.hero2 = hero2;

    //this is to remember whose turn it is
    this.turn = 0;
  }

  //perform a single attack
  perfomAttack() {
    if (this.turn === 0) {
      this.hero1.attack(this.hero2);
    } else {
      this.hero2.attack(this.hero1);
    }
  }
  changeTurn() {
    this.turn = 1 - this.turn;
  }
  findWinner() {
    if (this.hero1.hp > 0) {
      console.log(this.hero1.name + " won with" + this.hero1.hp + " HP left.");
    } else if (this.hero2.hp > 0) {
      console.log(this.hero2.name + " won with " + this.hero2.hp + " HP left.");
    } else {
      console.log("No hero left alive.");
    }
  }

  // perform the fight
  go = function () {
    do {
      //call the method to perform a single attack
      this.perfomAttack();

      //call the method to change turns
      this.changeTurn();

    } while (this.hero1.hp > 0 && this.hero2.hp > 0)

    this.findWinner();
  }
}
//creating the objects

var dwarfTheKurbada = new Dwarf("Dwarf", 100);
var spriteTheBumble = new Sprite("Sprite", 100);
var dragonThePrun = new Dragon("Dragon", 100);

//creating the Fight and starting it
// var epicFight = new Fight(dwarfTheKurbada, dragonThePrun);
var epicFight = new Fight(dwarfTheKurbada, dragonThePrun);
epicFight.go();

// END APPLICATION //




// Queries Selectors
let showHeroes = document.getElementById('startGame');
let cardsAppear = document.querySelector('.container-heroes');
let startGameAppear = document.querySelector('.footer');
let dissapearStory = document.querySelector('#story');
let chooseHeroHorizon = document.querySelector('.container-choose-heroes');
let chooseHeroes = document.querySelector('#startGameOf');
let createAcc = document.querySelector('.create-account');
let createAccForm = document.querySelector('#createAccForm');
let imgForm = document.querySelector('#imgForm');
let iFrame = document.querySelector('.video');
// Queries Selectors

// WHEN PRESS START CHANGE BACKGROUND IMAGE
let backgroundIMG2 = document.querySelector('body');
// WHEN PRESS START CHANGE BACKGROUND IMAGE

// Appear CARDS, and START GAME; Dissapear SHOW HEROES and STORY
showHeroes.addEventListener('click', showCards);
function showCards() {
  iFrame.classList.remove('d-flex');
  iFrame.classList.add('d-none');
  cardsAppear.classList.add('d-flex');
  startGameAppear.classList.add('d-flex');
  showHeroes.classList.add('d-none');
  // dissapearStory.classList.add('d-none');
  backgroundIMG2.style.backgroundImage = 'url(./assets/bg.jpg)'
}
// Appear CARDS, and START GAME; Dissapear SHOW HEROES and STORY



// Apear CHOSSES
chooseHeroes.addEventListener('click', gameBegin);
function gameBegin() {
  cardsAppear.classList.remove('d-flex');
  cardsAppear.classList.add('d-none');
  chooseHeroes.classList.add('d-none');
  chooseHeroHorizon.classList.remove('d-none');
  chooseHeroHorizon.classList.add('d-grid');
  backgroundIMG2.style.backgroundImage = 'url(./assets/bg3.png)';
  createAcc.classList.remove('d-none');
  createAcc.classList.add('d-flex');
}
// Apear CHOSSES

// Dissapear CHOSSES
createAcc.addEventListener('click', register);
function register() {
  chooseHeroHorizon.classList.remove('d-grid');
  chooseHeroHorizon.classList.add('d-none');
  createAcc.classList.remove('d-flex');
  createAcc.classList.add('d-none');
  createAccForm.classList.add('d-flex');
  imgForm.classList.remove('d-none');
  imgForm.classList.add('d-flex');
}


// Dissapear CHOSSES



//   Make an hero element to keep ACTIVE attributes.

let dwarf = document.querySelector('.dwarf-choose');
let sprite = document.querySelector('.sprite-choose');
let dragon = document.querySelector('.dragon-choose');


dwarf.addEventListener('click', selectedD);
function selectedD() {
  dwarf.classList.toggle('dwarf-choose-selected');
}
sprite.addEventListener('click', selectedS);
function selectedS() {
  sprite.classList.toggle('sprite-choose-selected');
}
dragon.addEventListener('click', selectedDr);
function selectedDr() {
  dragon.classList.toggle('dragon-choose-selected');
}
//   Make an hero element to keep ACTIVE attributes.


//                           START
// if dwarf has 'class active' true && sprite has class active true
// eventlistener DRAGON  cursor off
//  CLASS 'not-allowed'

let cursorOffDw = document.querySelector('.wrapper-dwarf');
let cursorOffS = document.querySelector('.wrapper-sprite');
let cursorOffD = document.querySelector('.wrapper-dragon');

function twoSelectionOfThree() {
  if ((dwarf.classList.contains('dwarf-choose-selected')) && (sprite.classList.contains('sprite-choose-selected'))) {
    cursorOffD.classList.add('wrapper-cursor');
    dragon.classList.toggle('cursor-off');
    dragon.classList.toggle('opacity05');
  } else if (((sprite.classList.contains('sprite-choose-selected')) && (dragon.classList.contains('dragon-choose-selected')))) {
    cursorOffDw.classList.add('wrapper-cursor');
    dwarf.classList.toggle('cursor-off');
    dwarf.classList.toggle('opacity05');
  } else if (((dwarf.classList.contains('dwarf-choose-selected')) && (dragon.classList.contains('dragon-choose-selected')))) {
    cursorOffS.classList.add('wrapper-cursor');
    sprite.classList.toggle('cursor-off');
    sprite.classList.toggle('opacity05');
  } else {
    console.log('test');
  }
}
chooseHeroHorizon.addEventListener("click", twoSelectionOfThree);



//                              END

// if dwarf is selected and sprite is unselected , dragon can now be selected
// PSEUDO>
//dwarf - selected ->
// if sprite contains inactive -> remove the inactive class
// if dragon contains inactive -> remove the inactive class
//sprite
//dragon

// function makeSelection() {
//   if(!(dwarf.classList.contains('dwarf-choose-selected')) && !(sprite.classList.contains('sprite-choose-selected'))) {
//     cursorOffD.classList.remove('wrapper-cursor');
//     dragon.classList.remove('cursor-off');
//     dragon.classList.remove('opacity05');
// }
// chooseHeroHorizon.addEventListener('click', makeSelection);








// //  ``````````````FIRST TRY TO SHOW MESS AFTER SUBMIT 
// function ajaxpost() {

//   // (A) GET FORM DATA
//   var form = document.getElementById('myForm');
//   var data = new FormData(form);

//   // (B) AJAX REQUEST
//   // (B1) POST DATA TO SERVER, RETURN RESPONSE AS TEXT
//   fetch("index.html", { method: "POST", body: data }) .then(res => res.text())

//   // (B2) SHOW MESSAGE ON SERVER RESPONSE
//   .then((response) => {
//     console.log(response);
//     if (response == "OK") { alert("SUCCESSFUL!"); }
//     else { alert("FAILURE!"); }
//   })

//     // (B3) OPTIONAL - HANDLE FETCH ERROR
//     .catch((err) => { console.log(err); });

//   // (C) PREVENT FORM SUBMIT
//   return false;
// }
// //  ``````````````FIRST TRY TO SHOW MESS AFTER SUBMIT


// //  ``````````````SECOND TRY TO SHOW MESS AFTER SUBMIT 

let modal = document.querySelector('#modal');


let form = document.querySelector('#myForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  createAccForm.classList.remove('d-flex');
  createAccForm.classList.add('d-none');
  imgForm.classList.remove('d-flex');
  imgForm.classList.add('d-none');
  modal.classList.remove('d-none');
  modal.classList.add('d-flex');

  // alert("Form Submitted");

});

// //  ``````````````SECOND TRY TO SHOW MESS AFTER SUBMIT 


// PASSWORD / CONFIRM PASSWORD
var check = function() {
  if (document.getElementById('inputPassword').value == document.getElementById('reTypePassword').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Password matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'NOT MATCHING';
  }
}

// PASSWORD / CONFIRM PASSWORD

