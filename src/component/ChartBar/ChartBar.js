import React, { Component } from 'react'
import { Bar } from "react-chartjs-2";
export default class ChartBar extends Component {
    
    render() {
        const data = {
            labels: ["January", "February", "March", "April", "May", "June",],
            datasets: [
              {
                label: "",
                fill: false,
                lineTension: 0.1,
                backgroundColor: ["red", "blue", "yellow", "pink", "black", "gray"],
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          };
          const options={
            legend: {
                display: false,
            },
          };
        return (
            <Bar ref="chart" data={data} options={options}  
            width={100}
            height={20}  
            />
        )
    }
}
