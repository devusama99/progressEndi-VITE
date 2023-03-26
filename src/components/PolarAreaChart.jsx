import React from "react";
import ReactApexChart from "react-apexcharts";

export default class PolarAreaChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [14, 23, 21, 17, 15],

      options: {
        chart: {
          type: "polarArea",
        },
        legend: {
          position: "bottom",
        },
        stroke: {
          colors: ["#fff"],
        },
        labels: [
          "Collaborator 1",
          "Collaborator 2",
          "Collaborator 3",
          "Collaborator 4",
          "Collaborator 5",
        ],
        fill: {
          opacity: 0.8,
        },
        // responsive: [
        //   {
        //     breakpoint: 480,
        //     options: {
        //       chart: {
        //         width: 200,
        //       },
        //     },
        //   },
        // ],
      },
    };
  }

  render() {
    return (
      <div id="chart" className="w-100">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="polarArea"
          height={360}
          width="100%"
        />
      </div>
    );
  }
}
