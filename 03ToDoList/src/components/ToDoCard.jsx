import React from 'react'

export default function ToDoCard(props) {
  const {children, handleDeleteToDo, index, handleEditToDo} = props
  return (
    <li className='todoItem'>
      {children}
      <div className='actionContainer'>
        <button onClick={()=>{
          handleEditToDo(index)
        }}>
        <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={()=>{
          handleDeleteToDo(index)
        }}>
        <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  )
}
