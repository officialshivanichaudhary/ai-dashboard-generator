"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

type Props = {
  data:any
}

export default function ChartRenderer({data}:Props){

  if(!data) return null

  // Convert backend chart format → recharts format
  const chartData = data.labels?.map((label:any,index:number)=>({
    region: label,
    value: data.values[index]
  })) || []

  return(

    <ResponsiveContainer width="100%" height={250}>

      <BarChart data={chartData}>

        <XAxis dataKey="region"/>
        <YAxis/>

        <Tooltip/>

        <Bar
          dataKey="value"
          fill="#7c3aed"
          radius={[6,6,0,0]}
        />

      </BarChart>

    </ResponsiveContainer>

  )

}