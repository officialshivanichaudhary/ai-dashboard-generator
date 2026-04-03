"use client"

export default function Sidebar(){

return(

<div className="w-64 h-screen fixed left-0 top-0 bg-gradient-to-b from-purple-900 to-indigo-900 text-white p-6 shadow-xl">
<h2 className="text-2xl font-bold mb-10 tracking-wide">
 Dashboard
</h2>

<ul className="space-y-4">

<li className="hover:bg-purple-700 p-2 rounded cursor-pointer">Dashboard</li>
<li className="hover:bg-purple-700 p-2 rounded cursor-pointer">Charts</li>
<li className="hover:bg-purple-700 p-2 rounded cursor-pointer">Apps</li>
<li className="hover:bg-purple-700 p-2 rounded cursor-pointer">Chat</li>
<li className="hover:bg-purple-700 p-2 rounded cursor-pointer">Settings</li>

</ul>

</div>

)

}