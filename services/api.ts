import axios from "axios"

export async function sendPrompt(prompt:string){

  const res = await axios.post(
    "http://127.0.0.1:8000/ask",
    {
      question: prompt
    }
  )

  return res.data
}