import { useEffect, useState } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {
  const [todos, setToDos] = useState([])
  const [newTodo, setNewToDo] = useState('')

    function persistantData(newToDoList){
      localStorage.setItem('todos', JSON.stringify({todos: newToDoList}))
    }

    function handleAddNewTodo(newToDo){
      if (newToDo === null || newToDo.trim() === ""){
      return
      }
      const newArr = [...todos, newToDo]
      persistantData(newArr)
      setToDos(newArr)
    }

    function handleDeleteToDo(index){
      const newArr = todos.filter((todos, todoIndex)=>{
        return todoIndex !== index
      })
      persistantData(newArr)
      setToDos(newArr)
    }

    function handleEditToDo(index){
      const currentText = todos[index]
      handleDeleteToDo(index)
      setNewToDo(currentText)
    }

    useEffect(()=>{
      if(!localStorage){
        return
      }
      let localTodos = localStorage.getItem('todos')
      if(!localTodos){
        return
      }
      localTodos = JSON.parse(localTodos).todos
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setToDos(localTodos)
    },[])

  return (
    <>
      <ToDoInput handleAddNewTodo={handleAddNewTodo} newTodo={newTodo} setNewToDo={setNewToDo}/>
      <ToDoList todos={todos} handleDeleteToDo={handleDeleteToDo} handleEditToDo={handleEditToDo}/>
    </>
  )
}

export default App
