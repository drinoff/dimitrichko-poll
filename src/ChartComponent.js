import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  plugins: {
    legend: {
      labels: {
      color: 'white',
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

export function ChartComponent({pollData}) {
  return (
    pollData && <Doughnut options={options} width={600} height={600} data={pollData} />
    );
}
