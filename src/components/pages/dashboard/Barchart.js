import React from 'react'
import "../dashboard/dashboard.css";

import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts';


export default function Barchart() {

    const bardata = [
        {
          name: 'Jan',
          uv: 4000,
          pv: 2400,
          amt: 2400,
          
        },
        {
          name: 'Feb',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'July',
          uv: 3490,
          pv: 4300,
          amt: 2300,
        },
        {
          name: 'Aug',
          uv: 3490,
          pv: 4300,
          amt: 2900,
          fill:"#5a32ea",
        },
        {
          name: 'Sep',
          uv: 3490,
          pv: 4300,
          amt: 3000,
        },
        {
          name: 'Oct',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Nov',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Dec',
          uv: 3490,
          pv: 4300,
          amt: 2100,
          
        },
    
      ];
    

      

  return (
   <>
    <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={100} data={bardata}>
          <XAxis dataKey="name" tickLine={false}  axisLine={false} dy={10}/>
          <Bar dataKey="uv" fill="#f2efff" radius={[10, 10, 10, 10]} />
        </BarChart>
      </ResponsiveContainer>
   
   
   
   </>
  )
}
