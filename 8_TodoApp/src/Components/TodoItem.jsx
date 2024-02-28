import React, { useState } from 'react'
import { UseTodo } from '../Context/TodoContext';

function TodoItem({ Todos }) {
    const [isTodoEditable , setIsTodoEditable]  = useState(false)
    const [Todomsg , setTodoMsg]  = useState(Todos.todo)
    const {UpdatedTodo, DeleteTodo, toggleComplete } = UseTodo()

    const editTodo = ()=> {
        UpdatedTodo(Todos.id , {...Todos , Todos: Todomsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = ()=> {
        toggleComplete(Todos.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                Todos.Completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={Todos.Completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${Todos.Completed ? "line-through" : ""}`}
                value={Todomsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (Todos.Completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={Todos.Completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => DeleteTodo(Todos.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
