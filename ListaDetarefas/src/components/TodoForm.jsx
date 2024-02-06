import React, { useState } from 'react' /* rafce , recf*/ 

const TodoForm = ({addToDo}) => {

    const [title , setTitle] = useState('')
    const [category , setCategory] = useState('')

    const HandleSubmit = (ev) => {
        ev.preventDefault()
        if (!title.trim() || !category.trim()) {
            alert('Campos não foram preenchidos');
        } else {
            addToDo(title, category);
            setTitle('');
            setCategory('');
        }
       
    }

  return (
    <div className='todo-form'>
        <h2>Criar Tarefa:</h2>
        <form onSubmit={HandleSubmit}>
            <input
             type="text" 
             placeholder='Digite a Tarefa'
             onChange={(ev) => setTitle(ev.target.value)}
             value={title}
              />
            <select value={category} onChange={(ev) => setCategory(ev.target.value)}>
                <option value="Selecionae Uma Categoria">Selecionae Uma Categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudo">Estudo</option>
            </select>
            <button type='submit'>Confirmar</button>
        </form>
    </div>
  )
}

export default TodoForm