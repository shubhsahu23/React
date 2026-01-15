import { useState } from "react"

function App() {
  const [color,setcolor]=useState("bg-white")
  return(
    <div className={`w-full h-screen ${color}  flex justify-center items-center`}>
      <div className="bg-white flex flex-wrap items-center bottom-5 rounded-xl px-2   gap-4 py-3 left-0 ">
        <button className="bg-red-500 text-white px-4 py-2 rounded-2xl " onClick={()=>setcolor("bg-red-500")}>Red</button>
        <button className="bg-blue-500 text-white px-4  py-2 rounded-2xl" onClick={()=>setcolor("bg-blue-500")}>Blue</button>
        <button className="bg-green-500 text-white px-4  py-2 rounded-2xl" onClick={()=>setcolor("bg-green-500")}>Green</button>
        <button className="bg-yellow-500 text-white px-4  py-2 rounded-2xl" onClick={()=>setcolor("bg-yellow-500")}>Yellow</button>
        <button className="bg-purple-500 text-white px-4  py-2 rounded-2xl" onClick={()=>setcolor("bg-purple-500")}>purple</button>
        <button className="bg-pink-500 text-white px-4  py-2 rounded-2xl" onClick={()=>setcolor("bg-pink-500")}>Pink</button>
        <button className="bg-lime-500 text-white px-4  py-2 rounded-2xl" onClick={()=>setcolor("bg-lime-500")}>Lime</button>
        <button className="bg-black text-white px-4  py-2 rounded-2xl" onClick={()=>setcolor("bg-black")}>Black</button>
        <button className="bg-gray-500 text-white px-4  py-2 rounded-2xl" onClick={()=>setcolor("bg-gray-500")}>Gray</button>
        <button className="bg-orange-500 text-white px-4  py-2 rounded-2xl" onClick={()=>setcolor("bg-orange-500")}>Orange</button>
      </div>
    </div>
  )  
}

export default App
