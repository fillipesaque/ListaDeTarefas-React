import { useState } from "react"
import './index.css'
import Todo from "./components/todo"
import TodoForm from "./components/TodoForm"
import Search from "./components/Search"
import Filter from "./components/Filter"



function App() {

  const [todos , SetTodos] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade  X no Sistema',
      category: 'Trabalho',
      isCompleted: false
    },
    {
      id: 2,
      text: 'Ir para academia',
      category: 'Pessoal',
      isCompleted: false
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudo',
      isCompleted: false
    }
  ])

  const [search , setSearch] = useState("")
  const [filter , setFilter] = useState('All')
  const [sort , setSort] = useState('Asc')

  const addToDo = (text , category) => {
    const newToDo = [... todos, {
        id:Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false
    }]
    SetTodos(newToDo)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodo = newTodos.filter((todo) => 
    todo.id !== id ? todo : null
    );
    SetTodos(filteredTodo)
  }

  const CompleteTodo = (id) => {
    const newTodo = [...todos]
    newTodo.map((todo) => 
    todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    ) /* todo id for igual ao id ? vai mudar o is complete para ao contrario */
    SetTodos(newTodo)
  }

  return (
    <>
      <div className="app">
         <h1>Lista De Tarefas</h1>

        <Search 
        search={search} 
        setSearch={setSearch}   
         />

         <Filter 
         filter={filter} 
         setFilter={setFilter}
         setSort={setSort}
         />

         <div className="todo-list">
          {todos
          .filter((todo) => filter === "All" /* se o input tiver no all sera true */
           ? true 
           : filter === "Completed"  /* se o input estiver em completed trara toda a tarefa completa */

           ? todo.isCompleted 
           : !todo.isCompleted )  /* caso contrario trara as tarefa diferente de completa no casa incompleta */
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => sort === "Asc" 
          ? a.text.localeCompare(b.text) 
          : b.text.localeCompare(a.text)  )
          .map((todo) => (
            <Todo 
            key={todo.id} 
            todo={todo}
            removeTodo={removeTodo} 
            completeTodo={CompleteTodo}/> /* Propriedade todo tem o valor todo q eh oq esta ligado ao array das info todos */
          ))}
         </div>

         <TodoForm 
         addToDo={addToDo}
         />
      </div>
    </>
  )
}

export default App
