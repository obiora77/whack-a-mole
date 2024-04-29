let currentmoletile;
let currentplanttile;
let score = 0;
let gameover = false;


window.onload = function() {
   setGame();
}

function setGame() {
   //set up the grid for the game board in html
   for (let i = 0; i < 9; i++) {
      //<div id="0-8"><div>
      let tile = document.createElement("div");
      tile.id = i.toString();
      tile.addEventListener("click", selectTile);
      document.getElementById("board").appendChild(tile);
   }

   setInterval(setMole, 1000);
   setInterval(setPlant, 2000);
}

function getRandomTile() {
   let num = Math.floor(Math.random() * 9);
   return num.toString();
}

function setMole() {
   if (gameover) {
      return;
   }

   if (currentmoletile) {
      currentmoletile.innerHTML ="";
   }

   let mole = document.createElement("img");
   mole.src = "./monty-mole.png";

   let num = getRandomTile();
   if (currentplanttile && currentplanttile.id == num ) {
      return;
   }
   currentmoletile = document.getElementById(num);
   currentmoletile.appendChild(mole);

}

function setPlant() {
   if (gameover) {
      return;
   }

   if (currentplanttile) {
      currentplanttile.innerHTML ="";
   }

   let plant = document.createElement("img");
   plant.src = "./piranha-plant.png";

   let num = getRandomTile();
   if (currentmoletile && currentmoletile.id == num) {
      return;
   }
   currentplanttile = document.getElementById(num);
   currentplanttile.appendChild(plant);
}

function selectTile() {
   if (gameover) {
      return;
   }

   if (this == currentmoletile) {
      score += 10;
      document.getElementById("score").innerText = score.toString();
   }
   else if (this == currentplanttile) {
      document.getElementById("score").innerText = "GAME OVER: " + score.toString()
      gameover = true;
   }
}