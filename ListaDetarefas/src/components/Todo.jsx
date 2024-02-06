import React from 'react'
/* Passando PROPS  */
const Todo = ({todo , removeTodo , completeTodo}) => {
  return (
    /* Alterar a propriedade text decoration ? se iscomplete for true retorna o line-trough se nao volta nd */
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}> 
              <div className="content">
                <p>{todo.text}</p>
                <p className="category">
                  ({todo.category})
                </p>
              </div>
              <div>
                <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
                <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
              </div>
            </div>
  )
}

export default Todo