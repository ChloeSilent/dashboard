import React, { useState } from 'react'
import './style.scss'

const Todo = (props) => {
  const { submit } = props
  const [inputValue, setValue] = useState({ description: 'write a todo here' })

  function updateInputValue(e) {
    const newValue = { description: e.target.value }

    setValue(newValue)
  }
  function submitInputValue(e) {
    e.preventDefault()
    inputValue.id = Date.now()
    submit(inputValue)
    setValue({ description: '' })
  }

  return (
    <form className="todo__input-wrapper" onSubmit={(e) => submitInputValue(e)}>
      <label className="todo__label">TO DO:</label>
      <input
        type="text"
        name="todoInput"
        className="todo__input"
        value={inputValue.description}
        onChange={(e) => updateInputValue(e)}
      />
      <button className="todo__add-btn">ADD</button>
    </form>
  )
}

export default Todo
