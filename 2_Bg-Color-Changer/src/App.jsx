import { useState } from 'react'

import './App.css'

function App() {
  
    const [color , Setcolor] = useState("black")

  return (
    <>
     <div className=" w-full h-screen  flex items-center justify-center " style = {{ backgroundColor: color}}>
       <div className="w-2/3 flex justify-around " style={{backgroundColor: 'white'}}>
        <button className="text-white  bg-red-700 p-3 rounded-md m-2 text-lg w-40" onClick={ () => Setcolor("red")}>Red</button>
        <button className="text-white bg-green-700 p-3 rounded-md m-2 text-lg w-40" onClick={ () => Setcolor("green")}>Green</button>
        <button className="text-white bg-pink-700 p-3 rounded-md m-2 text-lg w-40" onClick={ () => Setcolor("pink")}>Pink</button>
        <button className="text-white bg-yellow-700 p-3 rounded-md m-2 text-lg w-40" onClick={ () => Setcolor("yellow")}>Yellow</button>
        <button className="text-white bg-blue-700 p-3 rounded-md m-2 text-lg w-40" onClick={ () => Setcolor("blue")}>blue</button>
        <button className="text-white bg-orange-700 p-3 rounded-md m-2 text-lg w-40" onClick={ () => Setcolor("orange")}>Orange</button>
        
       </div>
     </div>
    </>
  )
}

export default App
