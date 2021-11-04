class NavalWar {
     constructor() {
          this.app = document.querySelector("#app");
          this.matrice = [
               [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
               [0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          ];
          this.row = ' abcdefghijkl'.toUpperCase().split('');
          this.column = [' 1 ', ' 2 ', ' 3 ', ' 4 ', ' 5 ', ' 6', ' 7 ', ' 8 ', ' 9 ', ' 10 ', ' 11 ', ' 12 '];
          this.matrice.unshift(this.column);
          this.torpillor = [];
          this.counterTorpillor = [];
          this.croisor = [];
          this.aircraftCarrier = [];
          this.submarine = [];
          for (let x = 0; x < this.matrice.length; x++) {
               this.matrice[x].unshift(this.row[x]);

          }

          this.run();
     }

     core() {

          this.screenReport = document.createElement('ul')
          this.screenReportH1 = document.createElement('h1')

          this.table = document.createElement('table');
          this.tr = document.createElement('tr');

          this.app.appendChild(this.table)
          this.app.appendChild(this.screenReportH1).textContent = 'Les bateaux coulés :';
          this.app.appendChild(this.screenReport);

          for (let i = 0; i < this.matrice.length; i += 1) {

               this.tr = document.createElement('tr');
               this.table.appendChild(this.tr)

               for (let j = 0; j < this.matrice[i].length; j++) {


                    this.td = document.createElement('td');

                    if (
                         this.matrice[i][j] == '0' ||
                         this.matrice[i][j] == '1' ||
                         this.matrice[i][j] == '2' ||
                         this.matrice[i][j] == '3' ||
                         this.matrice[i][j] == '4' ||
                         this.matrice[i][j] == '5'
                    ) {
                         this.td.dataset.id = this.matrice[i][j]
                    } else {
                         this.td.textContent = this.matrice[i][j]
                    }


                    this.tr.appendChild(this.td)

                    this.td.addEventListener("click", (e) => {

                         if (e.currentTarget.getAttribute('data-id') == 1) {
                              this.torpillor.push('1');
                              if (this.torpillor.length == 2) {
                                   var li = document.createElement('ul')
                                   li.textContent = "Torpilleur";
                                   this.screenReport.appendChild(li)
                              }
                         }
                         if (e.currentTarget.getAttribute('data-id') == 2) {
                              this.counterTorpillor.push('2');
                              if (this.counterTorpillor.length == 3) {
                                   var li = document.createElement('ul')
                                   li.textContent = "Contre - Torpilleur";
                                   this.screenReport.appendChild(li)
                              }
                         }
                         if (e.currentTarget.getAttribute('data-id') == 3) {
                              this.croisor.push('3');
                              if (this.croisor.length == 4) {
                                   var li = document.createElement('ul')
                                   li.textContent = "Croiseur";
                                   this.screenReport.appendChild(li)
                              }
                         }
                         if (e.currentTarget.getAttribute('data-id') == 4) {
                              this.aircraftCarrier.push('4');
                              if (this.aircraftCarrier.length == 5) {
                                   var li = document.createElement('ul')
                                   li.textContent = "Porte Avion";
                                   this.screenReport.appendChild(li)
                              }
                         }
                         if (e.currentTarget.getAttribute('data-id') == 5) {
                              this.submarine.push('5');
                              if (this.submarine.length == 5) {
                                   var li = document.createElement('ul')
                                   li.textContent = "Sous-marin";
                                   this.screenReport.appendChild(li)
                              }
                         }
                         if (
                              this.torpillor.length == 2 &&
                              this.counterTorpillor.length == 3 &&
                              this.croisor.length == 4 &&
                              this.aircraftCarrier.length == 5 &&
                              this.submarine.length == 5
                         ) {
                              setTimeout(() => {
                                   if (confirm('Vous avez gagné')) {
                                        this.resetGame();
                                   }
                              }, 500)
                         }
                         if (
                              e.currentTarget.getAttribute('data-id') === '1' ||
                              e.currentTarget.getAttribute('data-id') === '2' ||
                              e.currentTarget.getAttribute('data-id') === '3' ||
                              e.currentTarget.getAttribute('data-id') === '4' ||
                              e.currentTarget.getAttribute('data-id') === '5'
                         ) {
                              e.currentTarget.style.background = "red";
                              e.currentTarget.style.color = "white";

                         } else if (e.currentTarget.getAttribute('data-id') == '0') {

                              e.currentTarget.style.background = "blue";
                              e.currentTarget.style.color = "white";
                         }
                    });
               }
          }
     }

     resetGame() {

          this.croisor.splice(0, this.croisor.length);
          this.counterTorpillor.splice(0, this.counterTorpillor.length);
          this.torpillor.splice(0, this.torpillor.length);
          this.aircraftCarrier.splice(0, this.aircraftCarrier.length);
          this.submarine.splice(0, this.submarine.length);

          this.app.innerHTML = "";
          this.core();
     }
     run() {
          this.core()
     }

}

const navalWar = new NavalWar()