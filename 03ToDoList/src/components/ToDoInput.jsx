
export default function ToDoInput(props) {
  const {handleAddNewTodo, newTodo, setNewToDo} = props
  
  return (
    <header>
      <input type='text' value={newTodo} placeholder='Enter the Todo' onChange={(e) => {
        setNewToDo(e.target.value)
      }}></input>
      <button onClick={() => {
        handleAddNewTodo(newTodo)
        setNewToDo('')}}>Add</button>
    </header>
  )
}
