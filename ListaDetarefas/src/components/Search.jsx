
export const Search = ({search , setSearch}) => {
  return (
    <div className='search'>
        <h1>Pesquisar</h1>
        <input
         type="text"
         value={search}
         onChange={(ev) => setSearch(ev.target.value)} 
         placeholder='Pesquise a Tarefa ...'
        />
    </div>
  )
}

export default Search
