"use strict";
const p = {
  ST: [[20, 5, 20, 500], [20, 0], [0, 0], [20, 0]],
  HyperFacts: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    7
  ],
  Sense: [6, 1],
  win: 0,
  coord: [0, 0, 0],
  Saver: [5, 6],
  Up: [[[[]],[],[],[],[],[],[],[]],[]],
  AvailUp: [[[[]],[],[],[],[],[],[],[]],[]],
  Factorials:[1,1,2,6,24,120,720,5040]
};

var plsletme=""
save("initialstate");
load("hypersave");
let godspeedlightflash=p.HyperFacts[0].length-1
  document.getElementById("shrinker").onclick = function() {
    flattenUp(godspeedlightflash);}
      document.getElementById("shrinker").innerHTML ="This will flatten the whole place into a "+godspeedlightflash+"-dimensional place";

{
  coor(0);
  document.getElementById("coor").innerHTML =
    "You are against (" + p.coord[0] + ")";
  for (let i = 0; i < p.HyperFacts[1].length; i++) {
    if (p.HyperFacts[1][i] == null) {
      p.HyperFacts[1][i] = 0;
    }
    document.getElementById("cur" + i).innerHTML = p.HyperFacts[1][i].toFixed(
      1
    );
    checkForUpgrades()
  }
  document.getElementById("Stats").innerHTML =
    Math.max(p.ST[1][0], 0) + " of health and " + p.ST[1][1] + " of damage";
  colorY(5, "col", 6);
}
function cfc(b, a, c) {
  p.Sense[c] = b;
  p.Sense[1] = a;
  document.getElementById("D" + b).onclick = function() {
    cfc(b, -a, c);
  };
}
function updateArea() {
  {if (
    p.win != 0 ||
    p.Sense[1] < 0 ||
    (p.HyperFacts[0][p.Sense[0]] + p.Sense[1]) % (9 - p.HyperFacts[0].length) ==
      0
  ) {
    p.win = 0;
    p.HyperFacts[0][p.Sense[0]] = (p.HyperFacts[0][p.Sense[0]]+p.Sense[1])% (9 - p.HyperFacts[0].length)
    console.log(p.HyperFacts[0][p.Sense[0]] != Math.sign(p.HyperFacts[0][p.Sense[0]])*p.HyperFacts[0][p.Sense[0]])
    if (p.HyperFacts[0][p.Sense[0]] != Math.sign(p.HyperFacts[0][p.Sense[0]])*p.HyperFacts[0][p.Sense[0]]){
              p.HyperFacts[0][p.Sense[0]]+=9-p.HyperFacts[0].length
      for (let i=0; i<p.HyperFacts[0].length;--i){
        p.HyperFacts[0][p.Sense[0]]-=1
        if (updateEST(p.HyperFacts[0][0],p.HyperFacts[0][1],p.HyperFacts[0][2],p.HyperFacts[0][3],p.HyperFacts[0][4],p.HyperFacts[0][5],p.HyperFacts[0][6])<=p.ST[2][0]){
                  p.HyperFacts[0][p.Sense[0]]+=1
break        }
      }
    }
    p.ST[0][0] = p.ST[0][2];
    updateST()
    colorY(p.Saver[0], "col", p.Saver[1]);
    coor(0);
    document.getElementById("coor").innerHTML =
      "You are against (" + p.coord[0] + ")";
    p.ST[1][0]=updateEST(p.HyperFacts[0][0],p.HyperFacts[0][1],p.HyperFacts[0][2],p.HyperFacts[0][3],p.HyperFacts[0][4],p.HyperFacts[0][5],p.HyperFacts[0][6])
    p.ST[1][1] = 0;
    let pod = 0;
    for (let i=0;i<p.HyperFacts[0].length;i++)  
    {p.ST[1][1] += p.HyperFacts[0][i]*(8-i);
      p.ST[1][1] *= Math.max(Math.log(p.HyperFacts[0][i]), 1);
      pod += p.HyperFacts[0][i];}
    p.ST[1][1] **= pod / 2;
    document.getElementById("Stats").innerHTML =
      p.ST[1][0] + " of health and " + p.ST[1][1].toFixed(0) + " of damage";

    p.ST[3][0] = p.ST[1][0];
    p.ST[3][1] = p.ST[1][1];
    console.log(p.ST[3][0])
    if (p.ST[1][0] <= p.ST[2][0]) {
      p.win = 1;
      document.getElementById("0th").innerHTML =
        "You may go, he's chickening out!";
      document.getElementById("Stats").innerHTML =
        "(" + p.coord[0] + ") is frozen in fear";
    } else document.getElementById("0th").innerHTML = "Can't go";
    return;
  } else {
    document.getElementById("0th").innerHTML = "Don't run away too strong";
    setTimeout(function() {
      document.getElementById("0th").innerHTML = "Can't go";
    }, 3000);
  }}
for (let i=1;i<8;i++){
  if (p.HyperFacts[0][i]==null || p.HyperFacts[0][i]==NaN)
  p.HyperFacts[0].splice(i,1)
}
  return;
}
function coor(b) {
  p.coord[b] = p.HyperFacts[b][0];
  for (let i = 1; i < p.HyperFacts[b].length; i++) {
    p.coord[b] += "," + p.HyperFacts[b][i];
  }
}

var autoAttack = window.setInterval(function() {
  {
    if (p.ST[1][0] > 0 && p.ST[0][0] > 0 && p.ST[2][0] < p.ST[3][0]) {
      p.ST[1][0] -= p.ST[0][1];
      p.ST[0][0] -= p.ST[1][1];
      updateST()
      document.getElementById("Stats").innerHTML =
        p.ST[1][0] + " of health and " + p.ST[1][1].toFixed(0) + " of damage";
    } else if (p.ST[1][0] * (p.ST[1][0] + p.ST[0][1]) <= 0) {
      document.getElementById("Stats").innerHTML =
        0 + " of health and " + p.ST[1][1].toFixed(0) + " of damage";
      p.ST[1][0] = -Infinity;
      p.win = 1;
      document.getElementById("0th").innerHTML = "You may go";
      for (let i = 0; i < p.HyperFacts[0].length + 1; i++) {
        p.HyperFacts[1][i] +=
          Math.max(
            ((Math.log(p.ST[3][0]) * Math.log(p.ST[3][1] + 2)) /
              (10 * Math.log(2))) *
              Math.max(i ** Math.log(p.ST[3][0] * p.ST[3][1] + 1), 1),
            0
          ) **
          (p.HyperFacts[3]**(-0.4));
      }
      for (let i = 0; i < p.HyperFacts[0].length + 1; i++) {
        if (p.HyperFacts[1][i] == null) {
          p.HyperFacts[1][i] = 0;
        }
      }
      p.ST[2][0] = Math.max(p.ST[2][0], p.ST[3][0]);
      p.ST[2][1] = Math.max(p.ST[2][1], p.ST[3][1]);
      for (let i = 0; i < p.HyperFacts[1].length; i++) {
        if (p.HyperFacts[1][i] == null || p.HyperFacts[1][i] < 0) {
          p.HyperFacts[1][i] = 0;
        }
        document.getElementById("cur" + i).innerHTML = p.HyperFacts[1][
          i
        ].toFixed(1);
      }
      checkForUpgrades()
    } else if (p.ST[0][0] <= 0) {
      document.getElementById("dead").innerHTML += "You Have Died";
      origin();
      setTimeout(function() {
        document.getElementById("dead").innerHTML = document
          .getElementById("dead")
          .innerHTML.replace("You Have Died", "");
      }, 1000);
    }
  }
}, p.ST[0][3]);
function save(earth) {
  localStorage.setItem(earth, JSON.stringify(p));
}
function load(earth) {
  const loadgame = JSON.parse(localStorage.getItem(earth));
  if (loadgame !== "") {
    for (const i in loadgame) {
      p[i] = loadgame[i];
    }
  }
}

function reset(gaben) {
  if (gaben==0) {
  load("initialstate");
    save("hypersave")
    coor(0)
  coor(2)

  document.getElementById("coor").innerHTML =
    "You are against (" + p.coord[0] + ")";

  document.getElementById("Stats").innerHTML =
    p.ST[1][0] + " of health and " + p.ST[1][1] + " of damage";
  for (let i = 0; i < p.HyperFacts[1].length; i++) {
    if (p.HyperFacts[1][i] == null) {
      p.HyperFacts[1][i] = 0;
    }
    document.getElementById("cur" + i).innerHTML = p.HyperFacts[1][i].toFixed(
      1
    );
  }
                document.getElementById("reset").onclick = function() {
        reset(3)};
                  document.getElementById("reset").innerHTML="Reset 3"
}
else {var  nebag=gaben-1         
  document.getElementById("reset").onclick = function() {
        reset(nebag)}
                    document.getElementById("reset").innerHTML="Reset "+nebag}}
function colorX(b, id) {
  document.getElementById(id + b).onclick = function() {};
  document.getElementById(id + b).innerHTML += " Cool";
  setTimeout(function() {
    document.getElementById(id + b).innerHTML = document
      .getElementById(id + b)
      .innerHTML.replace(" Cool", "");
  }, 3000);
  for (let i = 0; i < p.HyperFacts[0].length; i++) {
    if (i != b) {
      document.getElementById(id + i).onclick = function() {
        colorY(i, id, b);
      };
      document.getElementById(id + i).innerHTML += " On the Y axis now!";

    }}
  }
function colorY(b, id, d) {
  p.HyperFacts[2] = [];
  for (let i = 0; i < p.HyperFacts[0].length; i++) {
    p.HyperFacts[2][i] = p.HyperFacts[0][i];
  }
  p.Saver[0] = b;
  p.Saver[1] = d;
  document.getElementById("color").innerHTML = "";
  for (let i = 0; i < 9 - p.HyperFacts[0].length; i++) {
    document.getElementById("color").innerHTML +=
      '<tr id="cool' + i + '"> </tr>';
    p.HyperFacts[2][b] = i;
    for (let j = 0; j < 9 - p.HyperFacts[0].length; j++) {
      p.HyperFacts[2][d] = j;
      coloringOut(p.HyperFacts[2]);
      coor(2);
      p.cooler = [0, 0, 0];
      for (let k = 0; k < 3; k++) {
        p.cooler[k] = 255 - p.cool[k];
      }
      document.getElementById("cool" + i).innerHTML +=
        '<td style="background-color:rgb(' +
        p.cool[0] +
        "," +
        p.cool[1] +
        "," +
        p.cool[2] +
        ') ";margin:10px"> <text style="color:rgb(' +
        p.cooler[0] +
        "," +
        p.cooler[1] +
        "," +
        p.cooler[2] +
        ')";>' +
        "(" +
        p.coord[2] +
        ")" +
        " </text> </td> ";
    }
  }
  for (let i = 0; i < p.HyperFacts[0].length; i++) {
    document.getElementById(id + i).onclick = function() {
      colorX(i, id);
    };
    document.getElementById(id + i).innerHTML = document
      .getElementById(id + i)
      .innerHTML.replace(" On the Y axis now!", " On the X axis again!");
    setTimeout(function() {
      document.getElementById(id + i).innerHTML = document
        .getElementById(id + i)
        .innerHTML.replace(" On the X axis again!", "");
    }, 1000);
  }
  p.HyperFacts[0].forEach(m => (p.HyperFacts[2][m] = p.HyperFacts[0][m]));
}
function coloringOut(realcool) {
  p.cool = [0, 0, 0];
  switch (realcool.length) {
    case 7:
      p.cool[0] = 63 * (realcool[0] + realcool[1] + realcool[5] + realcool[6]);
      p.cool[1] = 63 * (realcool[1] + realcool[2] + realcool[3] + realcool[6]);
      p.cool[2] = 63 * (realcool[3] + realcool[4] + realcool[5] + realcool[6]);
      break;
    case 6:
      p.cool[0] = 42 * (realcool[0] + realcool[1] + realcool[5]);
      p.cool[1] = 42 * (realcool[1] + realcool[2] + realcool[3]);
      p.cool[2] = 42 * (realcool[3] + realcool[4] + realcool[5]);
      break;
    case 5:
      p.cool[0] = 42 * (realcool[0] + realcool[1]);
      p.cool[1] = 42 * (0.5 * realcool[1] + realcool[2] + 0.5 * realcool[3]);
      p.cool[2] = 42 * (realcool[3] + realcool[4]);
      break;
    case 4:
      p.cool[0] = 31 * (realcool[0] + realcool[3]);
      p.cool[1] = 31 * (realcool[1] + realcool[3]);
      p.cool[2] = 31 * (realcool[2] + realcool[3]);
      break;
    case 3:
      p.cool[0] = 51 * realcool[0];
      p.cool[1] = 51 * realcool[1];
      p.cool[2] = 51 * realcool[2];
      break;
    case 2:
      p.cool[0] = 42 * realcool[0];
      p.cool[1] = 42 * realcool[1];
      p.cool[2] = 21 * (realcool[0] + realcool[1]);
  }
  return;
}
var autoSave = window.setInterval(function() {
  save("hypersave");
}, 15000);
function origin() {
  p.Sense[1] = 0;
  p.win = 1;
  for (let i = 0; i < p.HyperFacts[0].length; i++) {
    p.HyperFacts[0][i] = 0;
  }
  updateArea();
  p.Sense[1] = 1;
}
function flattenUp(bda) {
  p.HyperFacts[0] = [];
  for (let i = 0; i < bda; i++) {
    p.HyperFacts[0].push(0);
  }
  p.ST[0][2]**=0.5
  p.ST[0][1]**=0.66
  p.HyperFacts[3] = Math.min(bda,p.HyperFacts[3]);
  let kodkod = bda - 1;
      console.log(bda)

  console.log(kodkod)
  {
    if (p.Saver[0] == bda) {
      p.Saver[0] = (p.Saver[1] + 1) % bda;
    } else if (p.Saver[1] == bda) {
      p.Saver[1] = (p.Saver[0] + 1) % bda;
    }
        if (p.Sense[0] == bda) {
p.Sense=kodkod    } 
  }

  origin();
    console.log(bda)

  console.log(kodkod)
  let debt = "D" + (kodkod + 1);
  let date = "col" + (kodkod + 1);
  document.getElementById(debt).hidden = true;
  document.getElementById(date).hidden = true;
  console.log(bda)
    console.log(kodkod)

  document.getElementById("shrinker").onclick = function() {
    flattenUp(kodkod);}
      document.getElementById("shrinker").innerHTML ="This will flatten the whole place into a "+kodkod+"-dimensional place";
      document.getElementById("shrinker").hidden = true;

}
function checkForUpgrades() {
  let garfield = "";
  let price = [0, 0, 0, 0, 0, 0, 0, 0];
  if (p.ST[2][0] >= 40 && document.getElementById("row0") == null) {
    document.getElementById("Upgrades").hidden = false;
    document.getElementById("col4").hidden = false;
    document.getElementById("col3").hidden = false;
    document.getElementById("D4").hidden = false;
    document.getElementById("D3").hidden = false;
    document.getElementById("Upgrades").innerHTML += '<tr id="row0"> </tr>';
    for (let i = 0; i < 7; i++) {
      garfield = "up0l0l0l" + i + "l";
      price = [0, 0, 0, 0, 0, 0, 0, 0];
      price[i + 1] = 10 * (i + 1);
      if (p.Up[0][0][0][i] == undefined) {
        createUp(
          p.Up[0][0][0],
          i,
          price,
          [1.8, 1.8, 1.8, 1.8, 1.8, 1.8, 1.8, 1.8],
          1.1 + i / 10
        );
      }

document.getElementById("row0").innerHTML += "<button onclick='getUpR(p.Up[0][0][0]["+i+"],0,\""+garfield+"\")' id=\""+garfield+"\"> increase strength by "+(i+1)+"0% per level, <br> <text id=\""+garfield+"l\"> Price is, "+p.Up[0][0][0][i][i+1]+" "+(i+1)+"th </text> </button>"
      costUpdate(garfield, p.Up[0][0][0][i]);
    }
  }
  if (p.ST[2][1] >= 4 && document.getElementById("row1") == null) {
    document.getElementById("Upgrades").hidden = false;
    document.getElementById("D2").hidden = false;
    document.getElementById("D1").hidden = false;
    document.getElementById("col2").hidden = false;
    document.getElementById("col1").hidden = false;

    document.getElementById("Upgrades").innerHTML += '<tr id="row1"> </tr>';
    garfield = "";
    garfield = String("up0l0l1l");
    if (p.Up[0][0][1] == undefined)
          for (let i = 0; i < 8; i++) {
      price[i] = 30 * (i + 1) ** 2.3;}
              createUp(
          p.Up[0][0],
          1,
          price,
          [1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9],
          1.8
        );

    document.getElementById("row1").innerHTML +=
      "<button id=\""+garfield+"\" onclick='getUpR(p.Up[0][0][1],1,\""+garfield+"\")'> Increase your own health by 80% per level <text id=\""+garfield+"l"+"\"> </text> </button>"
    costUpdate(garfield, p.Up[0][0][1]);
  }
  if (p.ST[2][0] >= 400 && document.getElementById("D0").hidden == true) {
    document.getElementById("col0").hidden = false;
    document.getElementById("D0").hidden = false;
  }
    if (p.ST[2][0] >=   20 ** (2**(7 - p.HyperFacts[0].length))*
        (40320/p.Factorials[8-p.HyperFacts[0].length]) ** ((8 - p.HyperFacts[0].length)**2)) {
    document.getElementById("shrinker").hidden = false;
  }
}

function getUpR(jail,effect,graaaaaa) {
  if ((p.HyperFacts[1][0]>=jail[0]) && (p.HyperFacts[1][1]>=jail[1]) && (p.HyperFacts[1][2]>=jail[2]) && (p.HyperFacts[1][3]>=jail[3]) && (p.HyperFacts[1][4]>=jail[4]) && (p.HyperFacts[1][5]>=jail[5]) && (p.HyperFacts[1][6]>=jail[6]) && (p.HyperFacts[1][7]>=jail[7])) {
  jail[10]+=1
    let op2=graaaaaa
    console.log(op2)
        console.log(jail)

    console.log(jail)

    for (let i=0;i<8;i++){
 p.HyperFacts[1][i]-=jail[i]
              console.log(p.HyperFacts[1])

      document.getElementById("cur" + i).innerHTML = p.HyperFacts[1][
          i
        ].toFixed(1);
}
 console.log()
    cost(op2+"l",jail)

  console.log()
  updateEffects(effect,jail)
}
}
function createUp(prison, Id, arrayP, arrayM, Effect) {
  if (prison[Id] == undefined) {
    prison[Id] = [];

    prison[Id][11] = [];
    for (var i in arrayP) {
      prison[Id][i] = arrayP[i];

      prison[Id][11][i] = arrayP[i];
    }

    prison[Id][8] = arrayM;
    prison[Id][9] = Effect;
    prison[Id][10] = 0;
  }
}

function updateEffects(fruit, price) {
  {
    if (fruit == 0) {
      p.ST[0][1] *= price[9];
    } else if (fruit == 1) {
      p.ST[0][2] *= price[9];
    } else if (fruit == 2) {
      p.ST[0][3] -= price[9];
    }
  }
  updateST();
}

function updateST() {
  document.getElementById("HST").innerHTML =
    p.ST[0][0] + " of health and deal " + p.ST[0][1] + " of damage";
}

function cost(graaaaaa, ill) {
  console.log(graaaaaa)
  document.getElementById(graaaaaa).innerHTML = "Price is ";
  for (let j = 0; j < 8; j++) {
    ill[j] = ill[11][j] * (ill[8][j] ** ill[10]);
    if (ill[j] != 0) {
      document.getElementById(String(graaaaaa)).innerHTML +=
        ill[j].toFixed(1) + " " + j + "th, ";
    }
  }
}
function costUpdate(graaaaaa, ill) {
  window.onload=function(){
  document.getElementById(String(graaaaaa+"l")).innerHTML = "Price is ";
  for (let j = 0; j < 8; j++) {
    if (ill[j] != 0) {
      document.getElementById(String(graaaaaa+"l")).innerHTML +=
        ill[j].toFixed(1) + " " + j + "th, ";
    }
  }
}
}
function  updateEST(pls,god,your,high,ness,solong,thisfunction){
        return p.ST[1][0] = 20 ** (2**(7 - p.HyperFacts[0].length))*
        (8) ** (((pls==undefined)?0:pls) * (8 - p.HyperFacts[0].length))*(7) ** (((god==undefined)?0:god)* (8 - p.HyperFacts[0].length))*(6) ** (((your==undefined)?0:your) *(8 - p.HyperFacts[0].length))*(5) ** (((high==undefined)?0:high) * (8 - p.HyperFacts[0].length))*(4) ** (((ness==undefined)?0:ness) * (8 - p.HyperFacts[0].length))*(3) ** (((solong==undefined)?0:solong) *(8 - p.HyperFacts[0].length))*(2) ** (((thisfunction==undefined)?0:thisfunction) * (8 - p.HyperFacts[0].length))}
