import React from "react";
import ReactApexChart from "react-apexcharts";

export default class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43],
      options: {
        legend: {
          position: "bottom",
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -10,
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toFixed(2) + "%";
          },
          style: {
            fontSize: "12px",
            colors: ["#fff"],
          },
        },
        colors: ["#1b1d2a", "#9eb801", "#f7980c", "#d32f2f"],
        chart: {
          // width: 380,
          type: "pie",
        },
        labels: ["Not Started", "Completed", "In Progress", "Halted"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                height: 340,
                width: "100%",
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart" className="w-100">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          height={360}
          width="100%"
        />
      </div>
    );
  }
}
