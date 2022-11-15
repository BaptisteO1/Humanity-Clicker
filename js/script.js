// --- base ---

let seconde = 0;
let cpc = 1;

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

// --- Planche ---

let cost_planche = 50000;
let level_planche = 0;

function upgrade_planche() {
  if (seconde >= cost_planche) {
    seconde -= cost_planche;
    level_planche = level_planche + 1;

    if (level_planche == 10) {
      cost_planche = "niveau max";
      cps += 10;
    } else {
      cost_planche *= 2;
      cps += 50;
    }

    setInterval(function () {
      seconde = seconde + cps;
      document.getElementById("tempsTotal").innerHTML =
        "L'humanité à passé : " + seconde + " secondes";
    }, 1000);
    document.getElementById("cout_planche").innerHTML =
      "Cost : " + cost_planche;
    document.getElementById("niveau_planche").innerHTML =
      "Niveau : " + level_planche;
  } else {
    if (level_planche >= 10) {
      alert("vous êtes au niveau max");
    } else {
      alert("le coût est trop élevé ! donnez plus de votre temps");
    }
  }
}

// --- Phone ---

let cost_phone = 1000000;
let level_phone = 0;

function upgrade_phone() {
  if (seconde >= cost_phone) {
    seconde -= cost_phone;
    level_phone = level_phone + 1;

    if (level_phone == 10) {
      cost_phone = "niveau max";
      cps += 10;
    } else {
      cost_phone *= 2;
      cps += 500;
    }

    setInterval(function () {
      seconde = seconde + cps;
      document.getElementById("tempsTotal").innerHTML =
        "L'humanité à passé : " + seconde + " secondes";
    }, 1000);
    document.getElementById("cout_phone").innerHTML = "Cost : " + cost_phone;
    document.getElementById("niveau_phone").innerHTML =
      "Niveau : " + level_phone;
  } else {
    if (level_phone >= 10) {
      alert("vous êtes au niveau max");
    } else {
      alert("le coût est trop élevé ! donnez plus de votre temps");
    }
  }
}

// --- Bras_meca ---

let cost_bras_meca = 500000000;
let level_bras_meca = 0;

function upgrade_bras_meca() {
  if (seconde >= cost_bras_meca) {
    seconde -= cost_bras_meca;
    level_bras_meca = level_bras_meca + 1;

    if (level_bras_meca == 10) {
      cost_bras_meca = "niveau max";
      cps += 10;
    } else {
      cost_bras_meca *= 2;
      cps += 5000;
    }

    setInterval(function () {
      seconde = seconde + cps;
      document.getElementById("tempsTotal").innerHTML =
        "L'humanité à passé : " + seconde + " secondes";
    }, 1000);
    document.getElementById("cout_bras_meca").innerHTML =
      "Cost : " + cost_bras_meca;
    document.getElementById("niveau_bras_meca").innerHTML =
      "Niveau : " + level_bras_meca;
  } else {
    if (level_bras_meca >= 10) {
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

let cost_monkey1 = 0;
let cost_monkey2 = 500;
let cost_monkey3 = 5000;
let cost_cromagnon1 = 100000;
let cost_cromagnon2 = 10000000;
let cost_humain = 5000000000;
let cost_robot = 100000000000;

function change_img1() {
  alert("vous l'avez déjà débloqué");
}

function change_img2() {
  if (seconde >= cost_monkey2) {
    seconde -= cost_monkey2;
    cost_monkey2 = "Débloqué";
    document.getElementById("btn").src = "img/singe2.png";
    document.getElementById("cost_perso2").innerHTML = cost_monkey2;
    document.getElementById("tempsTotal").innerHTML = "L'humanité à passé : " + seconde + " secondes";
  } else {
    if (cost_monkey2 == "Débloqué") {
      alert("vous l'avez déjà débloqué");
    } else {
      alert("Il n'est pas encore temps d'évoluer ! donnez plus de votre temps");
    }
  }
}

function change_img3() {
  if (seconde >= cost_monkey3) {
    seconde -= cost_monkey3;
    cost_monkey3 = "Débloqué";
    document.getElementsByClassName("container")[0].style.backgroundImage =
      "url('img/paysage_1.png')";
    document.getElementById("btn").src = "img/singe3.png";
    document.getElementById("cost_perso3").innerHTML = cost_monkey3;
    document.getElementById("tempsTotal").innerHTML = "L'humanité à passé : " + seconde + " secondes";
  } else {
    if (cost_monkey3 == "Débloqué") {
      alert("vous l'avez déjà débloqué");
    } else {
      alert("Il n'est pas encore temps d'évoluer ! donnez plus de votre temps");
    }
  }
}

function change_img4() {
  if (seconde >= cost_cromagnon1) {
    seconde -= cost_cromagnon1;
    cost_cromagnon1 = "Débloqué";
      document.getElementsByClassName("container")[0].style.backgroundImage =
        "url('img/paysage_2.png')";
      document.getElementById("btn").src = "img/cro-magnon1.png";
      document.getElementById("cost_perso4").innerHTML = cost_cromagnon1;
      document.getElementById("tempsTotal").innerHTML = "L'humanité à passé : " + seconde + " secondes";
  } else {
    if (cost_cromagnon1 == "Débloqué") {
      alert("vous l'avez déjà débloqué");
    } else {
      alert("Il n'est pas encore temps d'évoluer ! donnez plus de votre temps");
    }
  }
}

function change_img5() {
  if (seconde >= cost_cromagnon2) {
    seconde -= cost_cromagnon2;
    cost_cromagnon2 = "Débloqué";
      document.getElementsByClassName("container")[0].style.backgroundImage =
        "url('img/paysage_4.jpg')";
      document.getElementById("btn").src = "img/cro-magnon2.png";
      document.getElementById("cost_perso5").innerHTML = cost_cromagnon2;
      document.getElementById("tempsTotal").innerHTML = "L'humanité à passé : " + seconde + " secondes";
  } else {
    if (cost_cromagnon2 == "Débloqué") {
      alert("vous l'avez déjà débloqué");
    } else {
      alert("Il n'est pas encore temps d'évoluer ! donnez plus de votre temps");
    }
  }
}

function change_img6() {
  if (seconde >= cost_humain) {
    seconde -= cost_humain;
    cost_humain = "Débloqué";
      document.getElementsByClassName("container")[0].style.backgroundImage =
        "url('img/paysage_5.png')";
      document.getElementById("btn").src = "img/homme1.png";
      document.getElementById("cost_perso6").innerHTML = cost_humain;
      document.getElementById("tempsTotal").innerHTML = "L'humanité à passé : " + seconde + " secondes";
  } else {
    if (cost_humain == "Débloqué") {
      alert("vous l'avez déjà débloqué");
    } else {
      alert("Il n'est pas encore temps d'évoluer ! donnez plus de votre temps");
    }
  }
}

function change_img7() {
  if (seconde >= cost_robot) {
    seconde -= cost_robot;
    cost_robot = "Débloqué";
      document.getElementsByClassName("container")[0].style.backgroundImage =
        "url('img/paysage_6.png')";
      document.getElementById("btn").src = "img/robot.png";
      document.getElementById("cost_perso7").innerHTML = cost_robot;
      document.getElementById("tempsTotal").innerHTML = "L'humanité à passé : " + seconde + " secondes";
      document.getElementById("table").style.color = '#fff';
  } else {
    if (cost_robot == "Débloqué") {
      alert("vous l'avez déjà débloqué");
    } else {
      alert("Il n'est pas encore temps d'évoluer ! donnez plus de votre temps");
    }
  }
}

///  SLIDER ///

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

let indexItem = 0;

function addToIndexItem(value) {
  const items = document.querySelectorAll(".container_upgrade");

  indexItem += value;
  if (indexItem < 0) indexItem = 0;
  let maxValue = items.length - 3;
  if (indexItem > maxValue) indexItem = maxValue;
}

function nextItem() {
  addToIndexItem(1);
  reloadItem();
}
function prevItem() {
  addToIndexItem(-1);
  reloadItem();
}

function reloadItem() {
  const items = document.querySelectorAll(".container_upgrade");
  items.forEach(function (item, currentIndex) {
    item.style.display = "none";
    if (currentIndex >= indexItem && currentIndex <= indexItem + 2) {
      item.style.display = "block";
    }
  });
}

reloadItem();
