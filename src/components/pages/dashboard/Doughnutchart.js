
import { PieChart, Pie} from 'recharts';



export default function Doughnutchart() {

  

  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567,
      "fill":"rgb(178,125,237) linear-gradient(90deg, rgba(178,125,237,1) 0%, rgba(9,9,121,1) 100%);",
    },
    {
      "name": "Group C",
      "value": 1398
    },
  ];
      

  return (
    <>
    
    <PieChart width={300} height={250}>
       <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label >

       </Pie>
    </PieChart>
    </>
  )
}
