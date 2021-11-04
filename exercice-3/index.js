class MyMorpionXO {
     constructor() {
          this.app = document.querySelector("#app");
          this.player = "X";
          this.playerScore = {
               X: 0,
               O: 0,
          };
          this.run();
     }

     core() {

          const h1 = document.createElement("h1");
          this.h2 = document.createElement("h2");

          const divGame = document.createElement("div");
          this.divResult = document.createElement("div");

          this.endGame = false;

          this.divResult.classList.add("result");
          divGame.classList.add("game");
          h1.textContent = "Le Morpion";

          this.app.appendChild(h1);
          this.app.appendChild(this.h2).textContent = "Le jeu peut démarrer !";
          this.app.appendChild(divGame).appendChild(this.h2);
          divGame.appendChild(this.divResult);

          this.divResult.textContent = `X = ${this.playerScore.X} point | O = ${this.playerScore.O} point`;

          for (let i = 0; i < 3; i++) {

               const div = document.createElement("div");
               divGame.appendChild(div);

               for (let j = 0; j < 3; j++) {

                    const buttonGen = document.createElement("button");
                    buttonGen.id = `${i}${j}`;

                    buttonGen.addEventListener("click", (e) => {

                         if (!!e.currentTarget.textContent || !!this.endGame) {
                              return;
                         }

                         e.currentTarget.textContent = this.player;

                         if (this.winChecker()) {

                              this.addPointForPlayer(this.player);
                         } else if (this.winChecker() == false) {

                              setTimeout(() => {
                                   if (confirm(`Match null, relancer une manche ?`)) {
                                        this.restart();
                                   } else {
                                        this.resetGame();
                                   }
                              }, 500);
                         }
                         if (this.player === "X") {
                              this.player = "O";
                         } else {
                              this.player = "X";
                         }
                         this.h2.textContent = `C'est au joueur ${this.player} de jouer`;
                    });

                    div.appendChild(buttonGen);
               }
          }
     }

     winChecker() {
          this.buttonCase = document.querySelectorAll("button");
          console.log(this.buttonCase);
          if (
               this.buttonCase[0].textContent.length == 1 &&
               this.buttonCase[1].textContent.length == 1 &&
               this.buttonCase[2].textContent.length == 1 &&
               this.buttonCase[3].textContent.length == 1 &&
               this.buttonCase[4].textContent.length == 1 &&
               this.buttonCase[5].textContent.length == 1 &&
               this.buttonCase[6].textContent.length == 1 &&
               this.buttonCase[7].textContent.length == 1 &&
               this.buttonCase[8].textContent.length == 1
          ) {
               this.endGame = true;
               return false;
          }
          if (
               this.buttonCase[0].textContent == this.player &&
               this.buttonCase[1].textContent == this.player &&
               this.buttonCase[2].textContent == this.player
          ) {
               this.buttonCase[0].style.background = "green";
               this.buttonCase[1].style.background = "green";
               this.buttonCase[2].style.background = "green";
               this.endGame = true;
               return true;
          } else if (
               this.buttonCase[3].textContent == this.player &&
               this.buttonCase[4].textContent == this.player &&
               this.buttonCase[5].textContent == this.player
          ) {
               this.buttonCase[3].style.background = "green";
               this.buttonCase[4].style.background = "green";
               this.buttonCase[5].style.background = "green";
               this.endGame = true;
               return true;
          } else if (
               this.buttonCase[6].textContent == this.player &&
               this.buttonCase[7].textContent == this.player &&
               this.buttonCase[8].textContent == this.player
          ) {
               this.buttonCase[6].style.background = "green";
               this.buttonCase[7].style.background = "green";
               this.buttonCase[8].style.background = "green";
               this.endGame = true;
               return true;
          } else if (
               this.buttonCase[0].textContent == this.player &&
               this.buttonCase[3].textContent == this.player &&
               this.buttonCase[6].textContent == this.player
          ) {
               this.buttonCase[0].style.background = "green";
               this.buttonCase[3].style.background = "green";
               this.buttonCase[6].style.background = "green";
               this.endGame = true;
               return true;
          } else if (
               this.buttonCase[1].textContent == this.player &&
               this.buttonCase[4].textContent == this.player &&
               this.buttonCase[7].textContent == this.player
          ) {
               this.buttonCase[1].style.background = "green";
               this.buttonCase[4].style.background = "green";
               this.buttonCase[7].style.background = "green";
               this.endGame = true;
               return true;
          } else if (
               this.buttonCase[2].textContent == this.player &&
               this.buttonCase[5].textContent == this.player &&
               this.buttonCase[8].textContent == this.player
          ) {
               this.buttonCase[2].style.background = "green";
               this.buttonCase[5].style.background = "green";
               this.buttonCase[8].style.background = "green";
               this.endGame = true;
               return true;
          } else if (
               this.buttonCase[0].textContent == this.player &&
               this.buttonCase[4].textContent == this.player &&
               this.buttonCase[8].textContent == this.player
          ) {
               this.buttonCase[0].style.background = "green";
               this.buttonCase[4].style.background = "green";
               this.buttonCase[8].style.background = "green";
               this.endGame = true;
               return true;
          } else if (
               this.buttonCase[2].textContent == this.player &&
               this.buttonCase[4].textContent == this.player &&
               this.buttonCase[6].textContent == this.player
          ) {
               this.buttonCase[2].style.background = "green";
               this.buttonCase[4].style.background = "green";
               this.buttonCase[6].style.background = "green";
               this.endGame = true;
               return true;
          }
     }

     addPointForPlayer(player) {
          
          this.playerScore[player] += 1;
          this.divResult.textContent = `X = ${this.playerScore.X} point | O = ${this.playerScore.O} point`;

          setTimeout(() => {
               if (this.playerScore[player] === 3) {
                    if (
                         confirm(
                              `C'est le joueur ${player} qui gagne aevc 3 point ? Relancer une partie ?`
                         )
                    ) {
                         this.divResult.textContent = `X = ${this.playerScore.X} point | O = ${this.playerScore.O} point`;
                         this.resetGame();
                         return;
                    }
               } else {
                    if (confirm(`${player} gagne 1 manche, relancer une manche ?`)) {
                         this.restart();
                    } else {
                         this.resetGame();
                    }
               }
          }, 500);
     }

     ifPlayerWin(player) {
          alert(`player ${player} win with ${this.playerScore[player]} pts`);
          return;
     }

     restart() {
          this.app.innerHTML = "";
          this.endGame = false;
          this.core();
     }

     resetGame() {
          this.playerScore.X = 0;
          this.playerScore.O = 0;

          this.app.innerHTML = "";
          this.endGame = false;
          this.core();
     }

     run() {
          this.core();
     }
}

const game = new MyMorpionXO();
