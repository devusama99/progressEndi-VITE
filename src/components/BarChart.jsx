import React from "react";
import ReactApexChart from "react-apexcharts";

export default class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [400, 430, 448, 470, 540, 580],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        grid: {
          show: true,
          xaxis: {
            lines: {
              show: true, //or just here to disable only x axis grids
            },
          },
          yaxis: {
            lines: {
              show: false, //or just here to disable only y axis
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "Class 1",
            "Class 2",
            "Class 3",
            "Class 4",
            "Class 5",
            "Class 6",
          ],
          axisTicks: {
            show: false,
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart" className="w-100">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
          width={"100%"}
        />
      </div>
    );
  }
}
