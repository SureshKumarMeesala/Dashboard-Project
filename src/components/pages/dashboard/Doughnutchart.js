
import { PieChart, Pie, Label} from 'recharts';



export default function Doughnutchart() {

  

  const data02 = [
    {
      "name": "Group A",
      "value": 2000,
      "fill":"#5b34ea",
    },
    {
      "name": "Group C",
      "value": 2000,
      "fill":"#f52d93", 
    },
    {
      "name": "Group B",
      "value": 7000,
      "fill":"#f1effc",
      "width": "50",
    },
  
  ];
      

  return (
    <>
    
    <PieChart width={300} height={250}>
       <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label >
       <Label width={30} position="center" fill="#000000" className='D-nut-center-text'>
                 65%
                </Label>
       </Pie>
    </PieChart>
    </>
  )
}
