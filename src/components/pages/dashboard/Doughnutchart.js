import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [20, 15, 10],
      backgroundColor: [
        'rgb(241,239,252)',
        'rgb(244,50,149)',   
        'rgb(88,50,234)',
      ],
      borderColor: [
        'rgb(241,239,252)',
        'rgb(244,50,149)',   
        'rgb(88,50,234)',
      ],
      borderWidth: [0, 30, 15],
    },
  ],
};


export default function Doughnutchart() {

   

  return (
    <>
    
    <Doughnut data={data} />;
    </>
  )
}
