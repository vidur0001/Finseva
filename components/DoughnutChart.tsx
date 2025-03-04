'use client'
import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({ accounts } : DoughnutChartProps) => {
  const data = {
    datasets: [
        {
            label:'Banks',
            data : [1250, 2500, 3750], // Bank Accounts
            backgroundColor : ['#0747b6', '#22656d8', '#2f91fa']
        }
    ],
    labels: ['SBI', 'HDFC', 'RBL']
  }
    return <Doughnut data = {data}/>
}

export default DoughnutChart