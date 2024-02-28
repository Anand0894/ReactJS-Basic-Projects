import { TodoProvider } from './Context/TodoContext'
import './App.css'
import { useEffect, useState } from 'react'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
   const [ Todos , setTodos]  = useState([])

   const addTodo = (todo) => {
       setTodos((prev)=> [ {id : Date.now() , ...todo} ,...prev])
   }
   const UpdatedTodo = (id ,todo) => {
       setTodos((prev)=>  prev.map((prevTodo ) => (prevTodo.id === id? todo : prevTodo)))
   }
   const DeleteTodo = (id) => {
        setTodos ( (prev) => (prev.filter((todo)=> (todo.id!==id))))
       
   }
   const toggleComplete = (id) => {
       setTodos( (prev) => prev.map( (prev) => prev.id === id? {...prev, Completed : !prev.Completed } : prev))
   }

 
   useEffect( ()=> {
     const todos = JSON.parse(localStorage.getItem("Todos"))
     if (todos && todos.length > 0){
       setTodos(todos)
      }
      } , [] )

    useEffect ( ()=> {
      localStorage.setItem("Todos" , JSON.stringify(Todos))
    } , [Todos])   
  



  return (
    <TodoProvider value={{Todos,addTodo,UpdatedTodo,DeleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {Todos.map((Todos)=> (
                          
                          <div key={Todos.id} className='w-full'><TodoItem Todos={Todos} /></div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider> 
  )
}

export default App
