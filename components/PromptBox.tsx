"use client"

import { useState } from "react"
import axios from "axios"

type Props = {
  onSubmit: (prompt: string) => void
}

export default function PromptBox({ onSubmit }: Props) {

  const [prompt, setPrompt] = useState("")
  const [file,setFile] = useState<any>(null)

  const handleUpload = async ()=>{

    if(!file) return

    const formData = new FormData()
    formData.append("file",file)

    try{

      await axios.post(
        "http://127.0.0.1:8000/upload_csv",
        formData
      )

      alert("Dataset uploaded!")

    }catch(err){
      console.log(err)
    }

  }

  return (

    <div className="bg-white/5 border border-white/10 p-6 rounded-xl mb-6">

      <input
        className="border border-white/20 bg-transparent p-3 w-full text-white rounded-lg"
        placeholder="Ask your data question..."
        value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
      />

      <div className="flex items-center gap-4 mt-4">

        <input
          type="file"
          onChange={(e)=>setFile(e.target.files?.[0])}
          className="text-white"
        />

        <button
          onClick={handleUpload}
          className="bg-purple-600 px-4 py-2 rounded-lg"
        >
          Upload CSV
        </button>

        <button
          className="bg-blue-500 px-4 py-2 rounded-lg"
          onClick={()=>onSubmit(prompt)}
        >
          Generate Dashboard
        </button>

      </div>

    </div>

  )
}