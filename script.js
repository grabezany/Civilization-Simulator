const occupiedTiles = new Set();
const tile = document.querySelectorAll('.tile');

var userData = {
  holding: false,
  itemholding: "",
  civilians: 0,
  fluxiumstorage: 0,

  jobslots: {
    scavenger: 0,
    farmer: 0,
    industrialist: 0
  },

  materials: {
    wood: 0,
    stone: 0,
    food: 0,
    fluxium: 10
  },

  buildings: {
    house: 0,
    factory: 0,
    scavengerhut: 0,
    fluxiumpump: 0
  }
}
loadData();

const squares = document.querySelectorAll('.square');
let row = 1;
let col = 1;

squares.forEach((square, index) => {
  square.id = `${row}:${col}`;
  
  col++;
  if (col > 10) {
    col = 1;
    row++;
  }
});

var stats = document.getElementById("stats");

// gridRefs[square_1_1] = document.getElementById("1:1");
var gridRefs = {};

for (var r = 1; r <= 10; r++) {
  for (var c = 1; c <= 10; c++) {
    var id = `${r}:${c}`;
    var el = document.getElementById(id);

    if (el) {
      gridRefs[`square_${r}_${c}`] = el;
    } else {
      console.warn(`Missing grid element with id ${id}`);
    }
  }
}

for (var key in gridRefs) {
  if (gridRefs.hasOwnProperty(key)) {
    gridRefs[key].addEventListener("click", function() {
      if(userData.holding){
        if(this.querySelector("img")) {
        alert("Tile is already occupied.");
        return;
        }
      }
      

      if (userData.holding && userData.itemholding === "house") {
        var img = document.createElement("img");
        img.src = "C:/Users/Grabe/Desktop/D/Assets/House.png";
        img.width = 40;
        img.height = 40;
        this.appendChild(img);
        userData.holding = false;
        userData.itemholding = "";
        follower.style.opacity = 0;
        follower.innerText = "";
        follower.innerHTML = "";
        house.style.pointerEvents = "auto";
        factory.style.pointerEvents = "auto";
        hut.style.pointerEvents = "auto";
        pump.style.pointerEvents = "auto";
        userData.civilians += 1;
        stats.innerHTML = "Civilians: " + userData.civilians + "<br><br><b>Jobs</b><br>Scavengers: " + userData.jobslots.scavenger + "<br>Farmers: " + userData.jobslots.farmer;
      } else if(userData.holding && userData.itemholding === "factory") {
        var img = document.createElement("img");
        img.src = "C:/Users/Grabe/Desktop/D/Assets/Factory.png";
        img.width = 40;
        img.height = 40;
        this.appendChild(img);
        userData.holding = false;
        userData.itemholding = "";
        follower.style.opacity = 0;
        follower.innerText = "";
        follower.innerHTML = "";
        house.style.pointerEvents = "auto";
        factory.style.pointerEvents = "auto";
        hut.style.pointerEvents = "auto";
        pump.style.pointerEvents = "auto";
      } else if(userData.holding && userData.itemholding === "hut") {
        var img = document.createElement("img");
        img.src = "C:/Users/Grabe/Desktop/D/Assets/ScavengerHut.png";
        img.width = 40;
        img.height = 40;
        this.appendChild(img);
        userData.holding = false;
        userData.itemholding = "";
        follower.style.opacity = 0;
        follower.innerText = "";
        follower.innerHTML = "";
        house.style.pointerEvents = "auto";
        factory.style.pointerEvents = "auto";
        hut.style.pointerEvents = "auto";
        pump.style.pointerEvents = "auto";
      } else if(userData.holding && userData.itemholding === "pump") {
        var img = document.createElement("img");
        img.src = "C:/Users/Grabe/Desktop/D/Assets/Pump.gif";
        img.width = 40;
        img.height = 40;
        this.appendChild(img);
        userData.holding = false;
        userData.itemholding = "";
        follower.style.opacity = 0;
        follower.innerText = "";
        follower.innerHTML = "";
        house.style.pointerEvents = "auto";
        factory.style.pointerEvents = "auto";
        hut.style.pointerEvents = "auto";
        pump.style.pointerEvents = "auto";
        userData.buildings.fluxiumpump += 1;
      }
    });
  }
}






    var follower = document.getElementById('follower');

    document.addEventListener('mousemove', function(e) {
      follower.style.left = e.pageX + 'px';
      follower.style.top = e.pageY + 'px';
    });


    var wood = document.getElementById("wood");
wood.addEventListener("mouseover", function() {
    if (!userData.holding) {
        follower.style.opacity = 1;
        follower.innerText = "Wood: " + userData.materials.wood;
    }
});
wood.addEventListener("mouseout", function() {
    if (!userData.holding) {
        follower.style.opacity = 0;
        follower.innerText = "";
    }
});

var stone = document.getElementById("stone");
stone.addEventListener("mouseover", function() {
    if (!userData.holding) {
        follower.style.opacity = 1;
        follower.innerText = "Stone: " + userData.materials.stone;
    }
});
stone.addEventListener("mouseout", function() {
    if (!userData.holding) {
        follower.style.opacity = 0;
        follower.innerText = "";
    }
});

var house = document.getElementById("house");
house.addEventListener("mouseover", function() {
    if (!userData.holding) {
        follower.style.opacity = 1;
        follower.innerHTML = "<b>House</b><br>Wood: 5<br>Stone: 3<br>Food: 3<br><b>Benefits</b><br>+1 Civilian<br><br>Click to craft";
    }
});
house.addEventListener("mouseout", function() {
    if (!userData.holding) {
        follower.style.opacity = 0;
        follower.innerText = "";
    }
});


var food = document.getElementById("food");
food.addEventListener("mouseover", function() {
    if (!userData.holding) {
        follower.style.opacity = 1;
        follower.innerHTML = "Food: " + userData.materials.food;
    }
});
food.addEventListener("mouseout", function() {
    if (!userData.holding) {
        follower.style.opacity = 0;
        follower.innerText = "";
    }
});

var fluxium = document.getElementById("fluxium");
fluxium.addEventListener("mouseover", function() {
    if (!userData.holding) {
        follower.style.opacity = 1;
        follower.innerHTML = "Fluxium: " + Math.round(userData.materials.fluxium);
    }
});
fluxium.addEventListener("mouseout", function() {
    if (!userData.holding) {
        follower.style.opacity = 0;
        follower.innerText = "";
    }
});



var factory = document.getElementById("factory");
factory.addEventListener("mouseover", function() {
    if (!userData.holding) {
        follower.style.opacity = 1;
        follower.innerHTML = "<b>Factory</b><br>Wood: 10<br>Stone: 15<br>Civilians: 1<br><b>Benefits</b><br>Produces 1 food<br>every second<br><br>Click to craft";
    }
});
factory.addEventListener("mouseout", function() {
    if (!userData.holding) {
        follower.style.opacity = 0;
        follower.innerText = "";
    }
});

var pump = document.getElementById("pump");
pump.addEventListener("mouseover", function() {
    if (!userData.holding) {
        follower.style.opacity = 1;
        follower.innerHTML = "<b>Fluxium Pump</b><br>Fluxium: 10<br>Stone: 1<br><b>Benefits</b><br>Produces 0.1 Fluxium<br>every second<br><br>Click to craft";
    }
});
pump.addEventListener("mouseout", function() {
    if (!userData.holding) {
        follower.style.opacity = 0;
        follower.innerText = "";
    }
});

var hut = document.getElementById("hut");
hut.addEventListener("mouseover", function() {
    if (!userData.holding) {
        follower.style.opacity = 1;
        follower.innerHTML = "<b>Scavenger Hut</b><br>Wood: 50<br>Civilians: 2<br><b>Benefits</b><br>Decreases Scavenging<br>cooldown by 1s<br><br>Click to craft";
    }
});
hut.addEventListener("mouseout", function() {
    if (!userData.holding) {
        follower.style.opacity = 0;
        follower.innerText = "";
    }
});
hut.addEventListener("click", function() {
    if (userData.materials.wood >= 50 && userData.civilians >= 2) {
        userData.materials.wood -= 50;
        userData.civilians -= 2;
        userData.holding = true;
        follower.style.opacity = 1;
        follower.innerHTML = "<img src='C:/Users/Grabe/Desktop/D/Assets/ScavengerHut.png' style='width: 40px; height: 40px; z-index: 1000;'>";
        userData.itemholding = "hut";
        house.style.pointerEvents = "none";
        factory.style.pointerEvents = "none";
        hut.style.pointerEvents = "none";
        pump.style.pointerEvents = "none";
        userData.jobslots.scavenger += 1;
        stats.innerHTML = "Civilians: " + userData.civilians + "<br><br><b>Jobs</b><br>Scavengers: " + userData.jobslots.scavenger + "<br>Farmers: " + userData.jobslots.farmer + "<br>Industrialists: " + userData.jobslots.industrialist;
    } else {
      alert("Not enough materials to craft a scavenger hut.");
    }
})

pump.addEventListener("click", function() {
    if (userData.materials.fluxium >= 10 && userData.materials.stone >= 1) {
        userData.materials.fluxium = userData.materials.fluxium - 10;
        userData.materials.stone -= 1;
        userData.holding = true;
        follower.style.opacity = 1;
        follower.innerHTML = "<img src='C:/Users/Grabe/Desktop/D/Assets/Pump.gif' style='width: 40px; height: 40px; z-index: 1000;'>";
        userData.itemholding = "pump";
        house.style.pointerEvents = "none";
        factory.style.pointerEvents = "none";
        pump.style.pointerEvents = "none";
        hut.style.pointerEvents = "none";
        stats.innerHTML = "Civilians: " + userData.civilians + "<br><br><b>Jobs</b><br>Scavengers: " + userData.jobslots.scavenger + "<br>Farmers: " + userData.jobslots.farmer + "<br>Industrialists: " + userData.jobslots.industrialist;
    } else {
      alert("Not enough materials to craft a fluxium pump.");
    }
})

factory.addEventListener("click", function() {
    if (userData.materials.wood >= 10 && userData.materials.stone >= 15 && userData.civilians >= 1) {
        userData.materials.wood -= 10;
        userData.materials.stone -= 15;
        userData.civilians -= 1;
        userData.holding = true;
        follower.style.opacity = 1;
        follower.innerHTML = "<img src='C:/Users/Grabe/Desktop/D/Assets/Factory.png' style='width: 40px; height: 40px;'>";
        userData.itemholding = "factory";
        house.style.pointerEvents = "none";
        factory.style.pointerEvents = "none";
        hut.style.pointerEvents = "none";
        pump.style.pointerEvents = "none";
        userData.jobslots.industrialist += 1;
        stats.innerHTML = "Civilians: " + userData.civilians + "<br><br><b>Jobs</b><br>Scavengers: " + userData.jobslots.scavenger + "<br>Farmers: " + userData.jobslots.farmer + "<br>Industrialists: " + userData.jobslots.industrialist;
    } else {
      alert("Not enough materials to craft a factory.");
    }
})

house.addEventListener("click", function() {
    if (userData.materials.wood >= 5 && userData.materials.stone >= 3 && userData.materials.food >= 3) {
        userData.materials.wood -= 5;
        userData.materials.stone -= 3;
        userData.materials.food -= 3;
        userData.holding = true;
        follower.style.opacity = 1;
        follower.innerHTML = "<img src='C:/Users/Grabe/Desktop/D/Assets/House.png' style='width: 40px; height: 40px;'>";
        userData.itemholding = "house";
        house.style.pointerEvents = "none";
        hut.style.pointerEvents = "none";
        factory.style.pointerEvents = "none";
        pump.style.pointerEvents = "none";

    } else {
      alert("Not enough materials to craft a house.");
    }
})


 function Scavenge() {
    var btn = document.getElementById("scavenge");
    var value = 5.0;
    btn.setAttribute("disabled", ""); // Disable button during countdown
    btn.style.backgroundColor = "#888"; // Change button color to indicate disabled state
    var interval = setInterval(function() {
      value = Math.max(0, (value - 0.1)); // Prevents going below 0
      btn.textContent = value.toFixed(1);
      if (value <= 0) {
        clearInterval(interval);
        btn.textContent = "Scavenge";
        btn.removeAttribute("disabled", "");
        btn.style.backgroundColor = ""; // Revert button color
      }
    }, 100); // 100 milliseconds = 0.1 seconds
    setTimeout(function(){
var rand = rando(1,5);
    if (rand == 1){
        alert("You found 1 wood!");
        userData.materials.wood += 1;
    }  else if (rand == 2){
        alert("You found 1 stone!");
        userData.materials.stone += 1;
    } else if (rand == 3){
        alert("You found 1 food!");
        userData.materials.food += 1;
    } else{
        alert("You found nothing.");
    }
    }, 5100);
    
}

var log = document.getElementById("log");
setInterval(function(){
  stats.innerHTML = "Civilians: " + userData.civilians + "<br><br><b>Jobs</b><br>Scavengers: " + userData.jobslots.scavenger + "<br>Farmers: " + userData.jobslots.farmer + "<br>Industrialists: " + userData.jobslots.industrialist;
}, 1);

setInterval(function(){
for (var i = 0; i < userData.jobslots.industrialist; i++){
  var rand = rando(1,5);
    if (rand == 1){
        userData.materials.stone += 1;
    }
}
}, 1000);
stats.innerHTML = "Civilians: " + userData.civilians + "<br><br><b>Jobs</b><br>Scavengers: " + userData.jobslots.scavenger + "<br>Farmers: " + userData.jobslots.farmer;

setInterval(function() {
  userData.materials.fluxium += userData.buildings.fluxiumpump * 0.1;


  userData.materials.food += userData.jobslots.farmer;

},1000);

// Delete if needed

var tiles = document.querySelectorAll(".grid .square");

function moveEnemy(enemy) {
  var interval = setInterval(() => {
    if (!enemy.parentElement) {
      clearInterval(interval); // Stop moving if enemy is removed
      return;
    }

    var allTiles = Array.from(document.querySelectorAll(".grid .square"));
    var gridWidth = 10;

    var currentTile = enemy.parentElement;
    var currentIndex = allTiles.indexOf(currentTile);
    var row = Math.floor(currentIndex / gridWidth);
    var col = currentIndex % gridWidth;

    var neighbors = [];

    for (var r = row - 1; r <= row + 1; r++) {
      for (var c = col - 1; c <= col + 1; c++) {
        if (r >= 0 && r < 10 && c >= 0 && c < 10) {
          var neighborIndex = r * gridWidth + c;
          var tile = allTiles[neighborIndex];

          if (!tile.querySelector("img")) {
            neighbors.push(tile);
          }
        }
      }
    }

    if (neighbors.length > 0) {
      var newTile = neighbors[Math.floor(Math.random() * neighbors.length)];
      newTile.appendChild(enemy);
    }
  }, 1000);
}



function spawnEnemy() {
  const gridSize = 10;
  const tileSize = 60;

  let row, col, tileKey;

  // Try to find an unoccupied tile
  do {
    row = Math.floor(Math.random() * gridSize);
    col = Math.floor(Math.random() * gridSize);
    tileKey = `${row}:${col}`;
  } while (occupiedTiles.has(tileKey));

  // Mark tile as occupied
  occupiedTiles.add(tileKey);

  // Create and place enemy
  const enemy = document.createElement("div");
  enemy.classList.add("enemy");
  enemy.style.top = `${row * tileSize}px`;
  enemy.style.left = `${col * tileSize}px`;

  try {
  enemy.addEventListener("click", function () {
    this.remove();
    occupiedTiles.delete(tileKey); // Free up the tile
  });
  } catch (err) {
  console.warn("Failed to attach click handler:", err);
} 

  document.querySelector(".grid").appendChild(enemy);
  moveEnemy(enemy, row, col);
}



function moveEnemy(enemy, startRow, startCol) {
  const gridSize = 10;
  const tileSize = 60;
  let row = startRow;
  let col = startCol;

  const interval = setInterval(() => {
    // Remove current tile from occupied set
    occupiedTiles.delete(`${row}:${col}`);

    // Find valid neighbors
    const neighbors = [];

    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = col - 1; c <= col + 1; c++) {
        const key = `${r}:${c}`;
        if (
          r >= 0 && r < gridSize &&
          c >= 0 && c < gridSize &&
          !occupiedTiles.has(key)
        ) {
          neighbors.push({ r, c, key });
        }
      }
    }

    if (neighbors.length > 0) {
      const choice = neighbors[Math.floor(Math.random() * neighbors.length)];
      row = choice.r;
      col = choice.c;
      enemy.style.top = `${row * tileSize}px`;
      enemy.style.left = `${col * tileSize}px`;
      occupiedTiles.add(choice.key);
    } else {
      // No valid move, re-occupy current tile
      occupiedTiles.add(`${row}:${col}`);
    }

    // Stop interval if enemy is removed
    if (!enemy.parentElement) {
      clearInterval(interval);
      occupiedTiles.delete(`${row}:${col}`);
    }
  }, 1000);
}



function enableEnemyRemoval() {
  var tiles = document.querySelectorAll(".grid .square");

  tiles.forEach(tile => {
    tile.addEventListener("click", function() {
      var enemy = this.querySelector(".enemy");
      if (enemy) {
        enemy.remove();
      }
    });
  });
}
enableEnemyRemoval();


try {
enemy.addEventListener("click", function() {
  this.style.opacity = 0;
  setTimeout(() => this.remove(), 300);
});
} catch (err) {
  console.warn("Failed to attach click handler:", err);
}

function areEnemiesAlive() {
  return document.querySelectorAll(".enemy").length > 0;
}

var log = document.getElementById("log");
log.innerHTML = "";






function updateStats() {
  stats.innerHTML =
    "Civilians: " + userData.civilians + "<br><br><b>Jobs</b><br>" +
    "Scavengers: " + userData.jobslots.scavenger + "<br>" +
    "Farmers: " + userData.jobslots.farmer + "<br>" +
    "Industrialists: " + userData.jobslots.industrialist;
}


function saveData() {

  const gridState = {};
  document.querySelectorAll(".square").forEach(square => {
    const img = square.querySelector("img");
    if (!img) return;
    let itemType = "";
    const src = img.src;
    if (src.includes("House.png"))        itemType = "house";
    else if (src.includes("Factory.png"))  itemType = "factory";
    else if (src.includes("ScavengerHut.png")) itemType = "hut";
    else if (src.includes("Pump.gif"))     itemType = "fluxiumpump";
    gridState[square.id] = itemType;
  });


  const payload = {
    userData: userData,
    gridState: gridState
  };

  localStorage.setItem("civSimSave", JSON.stringify(payload));
  alert("Game has been saved!");
}



function loadData() {
  const raw = localStorage.getItem("civSimSave");
  if (!raw) return; // nothing to load

  const { userData: saved, gridState } = JSON.parse(raw);


  Object.assign(userData, saved);


  document.querySelectorAll(".square").forEach(sq => {
    sq.innerHTML = "";
  });


  Object.keys(gridState).forEach(tileId => {
    const type = gridState[tileId];
    const tile = document.getElementById(tileId);
    if (!tile || !type) return;
    const img = document.createElement("img");
    img.width = 40;
    img.height = 40;
    switch (type) {
      case "house":
        img.src = "C:/Users/Grabe/Desktop/D/Assets/House.png";
        break;
      case "factory":
        img.src = "C:/Users/Grabe/Desktop/D/Assets/Factory.png";
        break;
      case "hut":
        img.src = "C:/Users/Grabe/Desktop/D/Assets/ScavengerHut.png";
        break;
      case "fluxiumpump":
        img.src = "C:/Users/Grabe/Desktop/D/Assets/Pump.gif";
        break;
    }
    tile.appendChild(img);
  });


  updateStats
  alert("Game loaded from local storage.");
}

