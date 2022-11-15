// --- base ---

let seconde = 0;
let cpc = 100000;

function clicker() {
  seconde += cpc;
  document.getElementById("tempsTotal").innerHTML =
    "L'humanité à passé : " + seconde + " secondes";
}

let multiplicateur = 0;

// --- Cursor ---

let cost_cursor = 15;
let level_cursor = 0;

function upgrade_cursor() {
  if (seconde >= cost_cursor) {
    level_cursor = level_cursor + 1;
    seconde -= cost_cursor;
    if (level_cursor == 10) {
      cpc += 20;
      cost_cursor = "niveau max";
    } else {
      cpc += 1;
      cost_cursor *= 2;
    }
    document.getElementById("tempsTotal").innerHTML =
      "L'humanité à passé : " + seconde + " jours";
    document.getElementById("cout_cursor").innerHTML = "Cost : " + cost_cursor;
    document.getElementById("niveau_cursor").innerHTML =
      "Niveau : " + level_cursor;
  } else {
    if (level_cursor >= 10) {
      alert("Vous êtes déjà au niveau maximum");
    } else {
      alert("le coût est trop élevé ! donnez plus de votre temps");
    }
  }
}

// --- Pomme ---

let cost_pomme = 100;
let level_pomme = 0;
let cps = 0;

function upgrade_apple() {
  if (seconde >= cost_pomme) {
    seconde -= cost_pomme;
    level_pomme = level_pomme + 1;

    if (level_pomme == 10) {
      cost_pomme = "niveau max";
      cps += 5;
    } else {
      cost_pomme *= 2;
      cps += 1;
    }

    setInterval(function () {
      seconde = seconde + cps;
      document.getElementById("tempsTotal").innerHTML =
        "L'humanité à passé : " + seconde + " secondes";
    }, 1000);
    document.getElementById("cout_pomme").innerHTML = "Cost : " + cost_pomme;
    document.getElementById("niveau_pomme").innerHTML =
      "Niveau : " + level_pomme;
    document.getElementById("accelerateur_temps").innerHTML =
      "L'accelerateur est de : " + cps + "secondes";
  } else {
    if (level_pomme >= 10) {
      alert("vous êtes au niveau maximum");
    } else alert("le coût est trop élevé ! donnez plus de votre temps");
  }
}

// --- Cailloux ---

let cost_cailloux = 1000;
let level_cailloux = 0;

function upgrade_cailloux() {
  if (seconde >= cost_cailloux) {
    seconde -= cost_cailloux;
    level_cailloux = level_cailloux + 1;

    if (level_cailloux == 10) {
      cost_cailloux = "niveau max";
      cps += 10;
    } else {
      cost_cailloux *= 2;
      cps += 5;
    }

    setInterval(function () {
      seconde = seconde + cps;
      document.getElementById("tempsTotal").innerHTML =
        "L'humanité à passé : " + seconde + " secondes";
    }, 1000);
    document.getElementById("accelerateur_temps").innerHTML =
      "L'accelerateur est de : " + cps + " secondes";
    document.getElementById("cout_cailloux").innerHTML =
      "Cost : " + cost_cailloux;
    document.getElementById("niveau_cailloux").innerHTML =
      "Niveau : " + level_cailloux;
  } else {
    if (level_cailloux >= 10) {
      alert("vous êtes au niveau max");
    } else {
      alert("le coût est trop élevé ! donnez plus de votre temps");
    }
  }
}

// --- CHANGEMENT IMAGE ---

let change_monkey1 = document.querySelector("#change1");
let change_monkey2 = document.querySelector("#change2");
let change_monkey3 = document.querySelector("#change3");
let change_cromagnon1 = document.querySelector("#change4");
let change_cromagnon2 = document.querySelector("#change5");
let change_human = document.querySelector("#change6");
let change_robot = document.querySelector("#change7");

let cost_monkey1 = 0
let cost_monkey2 = 500;
let cost_monkey3 = 5000;
let cost_cromagnon1 = 100000;
let cost_cromagnon2 = 10000000;
let cost_humain = 5000000000;
let cost_robot = 100000000000;

function change_img1() {
    change_monkey1.addEventListener('click', (event) => {
      console.log(event.target);
      document.getElementsByClassName("container")[0].style.backgroundImage = "url('../img/2203_w023_n001_2073b_p1_2073.jpg')";
      document.getElementById("btn").src = "../img/singe1.png";
    })
};

function change_img2() {
  if (seconde >= cost_monkey2) {
    seconde -= cost_monkey2;       /* beug affichage */
    cost_monkey2 = "Débloqué";
    change_monkey2.addEventListener("click", (event) => {
    console.log(event.target);
    document.getElementById("btn").src = "../img/singe2.png";
    document.getElementById("cost_perso2").innerHTML = cost_monkey2;
  })
  } else {
      if (cost_monkey2 == "Débloqué") {
        alert("vous l'avez déjà débloqué")
      } else {
        alert("Il n'est pas encore temps d'évoluer ! donnez plus de votre temps")
      }
  }
};

function change_img3() {
  if (seconde >= cost_monkey3) {
    seconde -= cost_monkey3;
    cost_monkey3 = "Débloqué";
    change_monkey3.addEventListener("click", (event) => {
    console.log(event.target);
    document.getElementsByClassName("container")[0].style.backgroundImage = "url('../img/6362777_2248.jpg')";
    document.getElementById("btn").src = "../img/singe3.png";
    document.getElementById("cost_perso3").innerHTML = cost_monkey3;
  })
  } else {
      if (cost_monkey3 == "Débloqué") {
        alert("vous l'avez déjà débloqué")
      } else {
        alert("Il n'est pas encore temps d'évoluer ! donnez plus de votre temps")
      }
  }
};


function change_img4() {
  if (seconde >= cost_cromagnon1) {
    seconde -= cost_cromagnon1;
    cost_cromagnon1 = "Débloqué";
    change_cromagnon1.addEventListener("click", (event) => {
    console.log(event.target);
    document.getElementsByClassName("container")[0].style.backgroundImage = "url('../img/fichier1.png')";
    document.getElementById("btn").src = "../img/cro-magnon1.png";
    document.getElementById("cost_perso4").innerHTML = cost_cromagnon1;
  })
  } else {
      if (cost_cromagnon1 == "Débloqué") {
        alert("vous l'avez déjà débloqué")
      } else {
        alert("Il n'est pas encore temps d'évoluer ! donnez plus de votre temps")
      }
  }
};





let indexPerso = 0;

function addToIndexPerso(value) {
  const persos = document.querySelectorAll(".container_perso");

  indexPerso += value;
  if (indexPerso < 0) indexPerso = 0;
  let maxValue = persos.length - 3;
  if (indexPerso > maxValue) indexPerso = maxValue;
}
function nextPerso() {
  addToIndexPerso(1);
  reloadPerso();
}
function prevPerso() {
  addToIndexPerso(-1);
  reloadPerso();
}
function reloadPerso() {
  const persos = document.querySelectorAll(".container_perso");
  persos.forEach(function (perso, currentIndex) {
    perso.style.display = "none";
    if (currentIndex >= indexPerso && currentIndex <= indexPerso + 2) {
      perso.style.display = "block";
    }
  });
}

reloadPerso();
