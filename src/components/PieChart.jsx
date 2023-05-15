import React from "react";
import ReactApexChart from "react-apexcharts";

export default class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: this.props.series
        ? this.props.series
        : [44, 55, 13, 43, 60, 33, 15],
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
        colors: [
          "#1b1d2a",
          "#9eb801",
          "#f7980c",
          "#d32f2f",
          "#40a0fc",
          "#ff8c9a",
          "#a897e2",
        ],
        chart: {
          // width: 380,
          type: "pie",
        },
        labels: this.props.labels
          ? this.props.labels
          : [
              "Validated",
              "Not Started",
              "Finished",
              "In Progress",
              "Not Validated",
              "Refused",
              "Requirements",
            ],
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
