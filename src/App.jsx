import { useState, useContext, useEffect } from 'react'
import { TodoProvider } from './todocontext'
import TodoForm from './todoform'
import TodoItem from './TodoItem'

import './App.css'

function App() {
  const [todos, settodos] = useState([])
  const addtodo = (todo) => {
    settodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  const updatetodo = (id, todo) => {
    settodos((prev) =>
      prev.map((prevel) =>
        prevel.id === id ? { ...prevel, ...todo } : prevel
      )
    );
  }
  const deletetodo = (id) => {
    settodos((prev) => prev.filter((prevval) => prevval.id != id))
  }
  const togglecomplete = (id) => {
    settodos((prev) => prev.map((prevele) => prevele.id == id ? { ...prevele, completed: !prevele.completed } : prevele))
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0){
      settodos(todos)
    }
  },[]);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos]);
  
  return (
    <TodoProvider value={{ todos, addtodo, updatetodo, deletetodo, togglecomplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">

            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
