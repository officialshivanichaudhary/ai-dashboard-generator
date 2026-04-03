"use client"

type Props = {
  messages:{role:string,text:string}[]
}

export default function ChatHistory({messages}:Props){

  return(

    <div className="mt-6 max-w-2xl space-y-3">

      {messages.map((msg,index)=>(

        <div
          key={index}
          className={`p-3 rounded-lg w-fit max-w-full ${
            msg.role==="user"
            ? "bg-purple-600 text-white ml-auto"
            : "bg-gray-800 text-gray-200"
          }`}
        >

          {msg.text}

        </div>

      ))}

    </div>

  )

}