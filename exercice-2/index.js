class drawBar {
  constructor(sum, nbr) {
    this.sum = sum;
    this.nbr = nbr;
  }
  drawProgressbar() {
    const selectApp = document.querySelector("#app");

    const progressBar = document.createElement("progress");

    progressBar.classList.add("progressbar");

    selectApp.appendChild(progressBar);

    const selectProgress = document.querySelector("progress");

    selectProgress.max = this.sum;
    selectProgress.value = this.nbr;
  }
}

const progressBar = new drawBar(1000, 700);

progressBar.drawProgressbar();
