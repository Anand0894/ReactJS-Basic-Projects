import { createContext, useContext } from "react";

export const TodoContext = createContext({
   Todos : {
           id : 1,
           todo : "todo Msg",
           Completed : "False"
           },
    addTodo : (todo)=> {},
    UpdatedTodo : (id, todo)=> {},
    DeleteTodo : (id)=> {},
    toggleComplete : (id)=> {}, 


})

export const TodoProvider = TodoContext.Provider

export const UseTodo = ()=> {
      return useContext(TodoContext)
}