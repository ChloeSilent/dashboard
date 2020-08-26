import React, { useState, useEffect } from 'react'
import InputTodo from './InputTodo'
import ItemTodo from './ItemTodo'
import './style.scss'

const Todo = () => {
  const [todos, setTodos] = useState([])

  function onSubmitHandler(item) {
    setTodos((todos) => [...todos, item])
  }

  function onStatusClickHandler(id, status) {
    const updatedList = [...todos].map((item) => {
      if (item.id === id) {
        console.log('itemFound', item)
        item.status = status
      }
      return item
    })

    setTodos(updatedList)
  }

  function onDeleteClickHandler(id) {
    const updatedList = [...todos].filter((item) => {
      return item.id !== id
    })
    setTodos(updatedList)
  }

  useEffect(() => {}, [todos])

  const todosItems = todos.map((item) => {
    return (
      <ItemTodo
        description={item.description}
        key={item.id}
        id={item.id}
        status={item.status}
        onStatusClick={onStatusClickHandler}
        onDeleteClick={onDeleteClickHandler}
      />
    )
  })
  return (
    <div className="todo">
      <InputTodo submit={onSubmitHandler} />
      <ul className="todo__items-wrapper">{todosItems}</ul>
    </div>
  )
}

export default Todo
