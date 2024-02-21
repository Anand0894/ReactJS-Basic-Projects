import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  function Addnum (){ 
      (count >= 20)? setCount(20) : setCount(prevCounter => prevCounter + 1)
    
  }
  function Removenum (){
    if (count!=0){
      setCount(count-1)
    }
    else setCount(0)
  }

  return (
    <>
      <div className="">
        Chai aur coffee  {count}
      </div>
      <h1>
        <button onClick={Addnum}>Increment </button>
        <button onClick={Removenum}>Decrement </button>
      </h1>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more {count}
      </p>
    </>
  )
}

export default App
