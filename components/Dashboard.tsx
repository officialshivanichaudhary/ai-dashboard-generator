"use client"

import ChartRenderer from "./ChartRenderer"

type Props = {
  data: any
}

export default function Dashboard({ data }: Props) {

  if (!data) return null

  return (

    <div className="mt-10">

      <h2 className="text-2xl font-bold mb-6">
        AI Generated Dashboard
      </h2>

      <div className="grid grid-cols-2 gap-6">

  {data.map((chart:any,index:number)=>(
    
    <div 
      key={index}
      className="bg-white/5 backdrop-blur-lg border border-white/10 
      p-6 rounded-xl shadow-lg transition transform 
      hover:scale-[1.02] hover:shadow-purple-500/30"
    >

      <h3 className="mb-3 text-gray-200 font-semibold">
        {chart.title || "Chart"}
      </h3>

      <ChartRenderer data={chart}/>

    </div>

  ))}

</div>

      <div className="mt-10 bg-gradient-to-r from-indigo-900 to-purple-900 p-6 rounded-xl shadow-lg">

        <h3 className="text-xl mb-3">AI Insights</h3>

        <ul className="list-disc ml-6">

          <li>North region has the highest sales.</li>
          <li>West region shows rapid growth.</li>
          <li>Sales increased compared to previous months.</li>

        </ul>

      </div>

    </div>

  )

}