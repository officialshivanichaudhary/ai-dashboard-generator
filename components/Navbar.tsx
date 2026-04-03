"use client"

export default function Navbar(){

return(

<div className="sticky top-0 z-50 flex justify-between items-center 
p-4 bg-gradient-to-r from-purple-900 to-indigo-900 
border-b border-purple-700 text-white shadow-md">
<input
className="p-2 rounded bg-white/20 backdrop-blur text-white placeholder-gray-300 w-80"
placeholder="Search..."
/>

<div className="flex gap-4">

<span>🔔</span>
<span>⚙️</span>
<span>👤</span>

</div>

</div>

)

}