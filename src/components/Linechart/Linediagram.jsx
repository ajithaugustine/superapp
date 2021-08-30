import React from 'react'
import { Line } from 'react-chartjs-2';
const data = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Revenue',
        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        backgroundColor: 'rgb(15, 197, 197)',
        borderColor: 'rgb(225,225,225)',
        
      },
    ],
  };
  

  
function Linediagram() {
    return (
        <div>
               <Line data={data}  />
        </div>
    )
}

export default Linediagram
