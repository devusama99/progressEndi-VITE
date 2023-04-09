import React from "react";
import ReactApexChart from "react-apexcharts";
import moment from "moment";

export default class TimelineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: this.props.series,

      options: {
        chart: {
          height: 800,
          type: "rangeBar",

          toolbar: {
            show: false,
          },
        },
        colors: ["#000"],
        tooltip: {
          theme: "dark",
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            var data =
              w.globals.initialSeries[seriesIndex].data[dataPointIndex];
            return `<div class="bg-light ">
              <div class="p-2 bg-primary">
              <p class="text-light fw-bold m-0">${data.x[0]}</p>
              </div>
              <div class="p-2 bg-light">
                  <p class="text-dark m-0">Initial Start Date: <span class="fw-bold">${moment(
                    data.y[0]
                  ).format("DD MMM yyyy")}</span></p>
                  <p class="text-dark m-0">Start Date: <span class="fw-bold">${moment(
                    data.y[0]
                  )
                    .add(4, "day")
                    .format("DD MMM yyyy")}</span></p>
                  <p class="text-dark m-0 mt-2">Initial End Date: <span class="fw-bold">${moment(
                    data.y[1]
                  ).format("DD MMM yyyy")}</span></p>
                  <p class="text-dark m-0 ">End Date: <span class="fw-bold">${moment(
                    data.y[1]
                  )
                    .add(4, "day")
                    .format("DD MMM yyyy")}</span></p>
              </div>
              </div>`;
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 5,
            barHeight: "30",

            // distributed: true,
            dataLabels: {
              hideOverflowingLabels: false,
              orientation: "horizontal",
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            var label = opts.w.globals.labels[opts.dataPointIndex];

            return label.join(" : ");
          },
          style: {
            colors: ["#000"],
            fontSize: "12px",
          },
          background: {
            enabled: true,
            foreColor: "#fff",
            opacity: 0.1,
            // borderRadius: 2,
            // borderWidth: 1,
            borderColor: "#fff",
          },
        },
        xaxis: {
          type: "datetime",
          position: "top",
          axisBorder: {
            show: false,
          },
          labels: {
            format: "MMM yyyy",
          },
        },
        grid: {
          show: true,
          xaxis: {
            lines: {
              show: true,
            },
          },
          rows: {
            colors: "#fff",
          },
        },
        yaxis: {
          show: true,
          labels: {
            style: {
              fontSize: "12px",
              fontWeight: "bold",
            },
          },
        },
        responsive: [
          {
            breakpoint: 1300,
            options: {
              dataLabels: {
                enabled: false,
              },
            },
          },
          {
            breakpoint: 900,
            options: {
              chart: {
                height: 700,
                width: 1200,
              },
              dataLabels: {
                enabled: true,
                formatter: function (val, opts) {
                  var label = opts.w.globals.labels[opts.dataPointIndex];

                  return label.join(" : ");
                },
                style: {
                  colors: ["#000"],
                  fontSize: "12px",
                },
                background: {
                  enabled: true,
                  foreColor: "#fff",
                  opacity: 0.1,
                  // borderRadius: 2,
                  // borderWidth: 1,
                  borderColor: "#fff",
                },
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart w-100 ">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="rangeBar"
        />
      </div>
    );
  }
}

// export default class TimelineChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: this.props.series,

//       options: {
//         chart: {
//           height: 800,
//           type: "rangeBar",

//           toolbar: {
//             show: false,
//           },
//         },
//         colors: ["#000"],
//         tooltip: {
//           theme: "dark",
//           custom: function ({ series, seriesIndex, dataPointIndex, w }) {
//             var data =
//               w.globals.initialSeries[seriesIndex].data[dataPointIndex];
//             return `<div class="bg-light ">
//               <div class="p-2 bg-primary">
//               <p class="text-light fw-bold m-0">${data.x[0]}</p>
//               </div>
//               <div class="p-2 bg-light">
//                   <p class="text-dark m-0">Initial Start Date: <span class="fw-bold">${moment(
//                     data.y[0]
//                   ).format("DD MMM yyyy")}</span></p>
//                   <p class="text-dark m-0">Start Date: <span class="fw-bold">${moment(
//                     data.y[0]
//                   )
//                     .add(4, "day")
//                     .format("DD MMM yyyy")}</span></p>
//                   <p class="text-dark m-0 mt-2">Initial End Date: <span class="fw-bold">${moment(
//                     data.y[1]
//                   ).format("DD MMM yyyy")}</span></p>
//                   <p class="text-dark m-0 ">End Date: <span class="fw-bold">${moment(
//                     data.y[1]
//                   )
//                     .add(4, "day")
//                     .format("DD MMM yyyy")}</span></p>
//               </div>
//               </div>`;
//           },
//         },
//         plotOptions: {
//           bar: {
//             horizontal: true,
//             borderRadius: 5,
//             barHeight: "60",

//             // distributed: true,
//             dataLabels: {
//               hideOverflowingLabels: false,
//               orientation: "horizontal",
//             },
//           },
//         },
//         dataLabels: {
//           enabled: true,
//           formatter: function (val, opts) {
//             var label = opts.w.globals.labels[opts.dataPointIndex];

//             return label.join(" : ");
//           },
//           style: {
//             colors: ["#000"],
//             fontSize: "12px",
//           },
//           background: {
//             enabled: true,
//             foreColor: "#fff",
//             opacity: 0.1,
//             // borderRadius: 2,
//             // borderWidth: 1,
//             borderColor: "#fff",
//           },
//         },
//         xaxis: {
//           type: "datetime",
//           position: "top",
//           axisBorder: {
//             show: false,
//           },
//           labels: {
//             format: "MMM yyyy",
//           },
//         },
//         grid: {
//           show: true,
//           padding: {
//             top: 10,
//           },
//           xaxis: {
//             lines: {
//               show: true,
//             },
//           },
//           rows: {
//             colors: "#fff",
//           },
//         },
//         yaxis: {
//           show: true,
//           labels: {
//             style: {
//               fontSize: "12px",
//               fontWeight: "bold",
//             },
//           },
//         },
//         responsive: [
//           {
//             breakpoint: 1300,
//             options: {
//               dataLabels: {
//                 enabled: false,
//               },
//             },
//           },
//           {
//             breakpoint: 900,
//             options: {
//               chart: {
//                 height: 700,
//                 width: 1200,
//               },
//               dataLabels: {
//                 enabled: true,
//                 formatter: function (val, opts) {
//                   var label = opts.w.globals.labels[opts.dataPointIndex];

//                   return label.join(" : ");
//                 },
//                 style: {
//                   colors: ["#000"],
//                   fontSize: "12px",
//                 },
//                 background: {
//                   enabled: true,
//                   foreColor: "#fff",
//                   opacity: 0.1,
//                   // borderRadius: 2,
//                   // borderWidth: 1,
//                   borderColor: "#fff",
//                 },
//               },
//             },
//           },
//         ],
//       },
//     };
//   }

//   render() {
//     return (
//       <div id="chart">
//         <ReactApexChart
//           options={this.state.options}
//           series={this.state.series}
//           type="rangeBar"
//           height={350}
//         />
//       </div>
//     );
//   }
// }
