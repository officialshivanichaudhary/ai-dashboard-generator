"use client"
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts"
export default function StatsCards() {

    return (

        <div className="grid grid-cols-4 gap-6 mt-6">

            <div className="bg-gradient-to-r from-purple-700 to-indigo-700 
p-5 rounded-xl text-white shadow-lg transition hover:scale-[1.03]">
                <h3>Follows</h3>
                <div className="h-24">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                            innerRadius="70%"
                            outerRadius="100%"
                            data={[{ value: 25 }]}
                            startAngle={90}
                            endAngle={-270}
                        >
                            <RadialBar
                                dataKey="value"
                                cornerRadius={10}
                                fill="#875aee"
                            />
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-xl font-bold text-center">25%</p>
            </div>

           <div className="bg-gradient-to-r from-purple-700 to-indigo-700 p-5 rounded-xl text-white shadow-lg transition hover:scale-[1.03]">

<h3 className="text-sm mb-2">Scope</h3>

<div className="h-24">
<ResponsiveContainer width="100%" height="100%">
<RadialBarChart
innerRadius="70%"
outerRadius="100%"
data={[{value:75}]}
startAngle={90}
endAngle={-270}
>

<RadialBar
dataKey="value"
cornerRadius={10}
fill="#22c55e"
/>

</RadialBarChart>
</ResponsiveContainer>
</div>

<p className="text-xl font-bold text-center">75%</p>

</div>

            <div className="bg-gradient-to-r from-purple-700 to-indigo-700 p-5 rounded-xl text-white shadow-lg transition hover:scale-[1.03]">

<h3 className="text-sm mb-2">Views</h3>

<div className="h-24">
<ResponsiveContainer width="100%" height="100%">
<RadialBarChart
innerRadius="70%"
outerRadius="100%"
data={[{value:50}]}
startAngle={90}
endAngle={-270}
>

<RadialBar
dataKey="value"
cornerRadius={10}
fill="#3b82f6"
/>

</RadialBarChart>
</ResponsiveContainer>
</div>

<p className="text-xl font-bold text-center">50%</p>

</div>

            <div className="bg-gradient-to-r from-purple-700 to-indigo-700 p-5 rounded-xl text-white shadow-lg transition hover:scale-[1.03]">

<h3 className="text-sm mb-2">Growth</h3>

<div className="h-24">
<ResponsiveContainer width="100%" height="100%">
<RadialBarChart
innerRadius="70%"
outerRadius="100%"
data={[{value:64}]}
startAngle={90}
endAngle={-270}
>

<RadialBar
dataKey="value"
cornerRadius={10}
fill="#f97316"
/>

</RadialBarChart>
</ResponsiveContainer>
</div>

<p className="text-xl font-bold text-center">64%</p>

</div>

        </div>

    )

}