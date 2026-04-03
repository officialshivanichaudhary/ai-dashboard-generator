"use client"

import { useState } from "react"
import PromptBox from "../components/PromptBox"
import Dashboard from "../components/Dashboard"
import { sendPrompt } from "../services/api"
import Navbar from "../components/Navbar"
import StatsCards from "../components/StatsCards"
import CsvUploader from "../components/CsvUploader"
import ChatHistory from "../components/ChatHistory"

export default function Home() {

  const [data,setData] = useState<any>(null)
  const [loading,setLoading] = useState(false)
  const [messages,setMessages] = useState<any[]>([])

 const handlePrompt = async (prompt:string)=>{

  setMessages((prev)=>[
    ...prev,
    {role:"user",text:prompt}
  ])

  setLoading(true)

  try{

    const res:any = await sendPrompt(prompt)

    if(res.success){

      setData(res.charts)

      setMessages((prev)=>[
        ...prev,
        {role:"ai",text:"Dashboard generated"}
      ])

    }

  }catch(err){
    console.log(err)
  }

  setLoading(false)

}
 return(

<div className="bg-gradient-to-br from-purple-950 via-black to-indigo-950 min-h-screen">

  <Navbar/>

  <div className="p-6 max-w-5xl mx-auto">

    <h1 className="text-3xl font-bold mb-6 text-white">
      AI Dashboard Generator
    </h1>

    <PromptBox onSubmit={handlePrompt}/>

    <ChatHistory messages={messages}/>

    {loading && (
      <p className="mt-4 text-white">
        Generating Dashboard...
      </p>
    )}

    <StatsCards/>

    <Dashboard data={data}/>

  </div>

</div>

)

}