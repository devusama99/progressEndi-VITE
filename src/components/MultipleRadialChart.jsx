import React from "react";
import ReactApexChart from "react-apexcharts";

export default class MultipleRadialChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 67, 83, 73],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        legend: {
          show: true,
          position: "bottom",
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: "14px",
              },
              value: {
                fontSize: "16px",
                offsetY: 2,
              },
            },
          },
        },
        labels: [
          "Quality 1",
          "Quality 2",
          "Quality 3",
          "Quality 4",
          "Quality 5",
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
          type="radialBar"
          height={360}
        />
      </div>
    );
  }
}
