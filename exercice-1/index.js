class Grid {
  constructor(xAxis, yAxis) {
    this.xAxis = xAxis;
    this.yAxis = yAxis - 1;
  }

  getRandomTimer() {
    return (Math.random() * (2 - 1) + 1) * 1000;
  }

  getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  gridGenerator() {
    const selectApp = document.querySelector("#app");

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    table.classList.add("customTable");

    selectApp
      .appendChild(table)
      .appendChild(thead)
      .appendChild(document.createElement("tr"));
    selectApp.appendChild(table).appendChild(tbody);

    const selectThead = document.querySelector("thead > tr");
    const selectTbody = document.querySelector("tbody");

    for (let loop = 0; loop < this.xAxis; loop++) {
      const th = document.createElement("th");
      setInterval(() => {
        th.style.background = this.getRandomColor();
      }, this.getRandomTimer());
      selectThead.appendChild(th);
    }

    for (let loop1 = 0; loop1 < this.yAxis; loop1++) {
      const tr = document.createElement("tr");
      for (let loop3 = 0; loop3 < this.xAxis; loop3++) {
        const td = document.createElement("td");
        setInterval(() => {
          td.style.background = this.getRandomColor();
        }, this.getRandomTimer());
        selectTbody.appendChild(tr).appendChild(td);
      }
    }
    setTimeout(this.gridGenerator, 2000);
  }
}

const gridGen = new Grid(5, 5);

gridGen.gridGenerator();
