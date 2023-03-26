import React from "react";
import ReactApexChart from "react-apexcharts";

export default class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [10, 25, 50, 15],
      options: {
        legend: {
          position: "bottom",
        },
        plotOptions: {
          pie: {
            donut: {
              size: "50%",
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toFixed(0) + "%";
          },
          style: {
            fontSize: "12px",
            colors: ["#fff"],
          },
        },
        // colors: ["#1b1d2a", "#9eb801", "#f7980c", "#d32f2f"],
        chart: {
          // width: 380,
          type: "pie",
        },
        labels: ["Service 1", "Service 2", "Service 3", "Service 4"],
      },
    };
  }

  render() {
    return (
      <div id="chart" className="w-100">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          height={360}
        />
      </div>
    );
  }
}
