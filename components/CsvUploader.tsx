"use client"

import { useState } from "react"
import axios from "axios"

export default function CsvUploader(){

  const [file,setFile] = useState<File | null>(null)
  const [message,setMessage] = useState("")

  const uploadFile = async ()=>{

    if(!file){
      alert("Select a CSV file")
      return
    }

    const formData = new FormData()
    formData.append("file",file)

    try{

      const res = await axios.post(
        "http://127.0.0.1:8000/upload_csv",
        formData,
        {
          headers:{
            "Content-Type":"multipart/form-data"
          }
        }
      )

      setMessage("Dataset uploaded successfully")

    }catch(err){
      console.log(err)
      setMessage("Upload failed")
    }

  }

  return(

    <div className="mt-6 p-6 bg-white/5 border border-white/10 rounded-xl">

      <h3 className="text-lg mb-3 text-white">
        Upload CSV Dataset
      </h3>

      <input
        type="file"
        accept=".csv"
        onChange={(e)=>setFile(e.target.files?.[0] || null)}
        className="text-white"
      />

      <button
        onClick={uploadFile}
        className="ml-4 px-4 py-2 bg-purple-600 text-white rounded"
      >
        Upload
      </button>

      <p className="mt-3 text-green-400">{message}</p>

    </div>

  )

}