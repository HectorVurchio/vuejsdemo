import Chart from "chart.js/auto";
export default class Graphic {
  #bgcol = [
    "rgba(65, 186, 130, 0.2)",
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
  ];
  #bordcol = [
    "rgba(65, 186, 130, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ];
  #instances = Chart.instances;
  #labelX = [];
  #sets = [];
  #ctx = null;

  constructor(mapvect, ctx) {
    this.#ctx = ctx;
    let i = 0;
    for (const [key, value] of mapvect) {
      if (i == 0) {
        this.#labelX = value;
      } else {
        this.#sets.push({
          label: key,
          data: value,
          backgroundColor: this.#bgcol[i],
          borderColor: this.#bordcol[i],
          borderWidth: 1,
        });
      }
      i++;
    }
  }
  getInstances() {
    return this.#instances;
  }

  plot() {
    const myChart = new Chart(this.#ctx, {
      type: "line",
      data: {
        labels: this.#labelX,
        datasets: this.#sets,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    return myChart;
  }
}
