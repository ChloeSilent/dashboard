import React from 'react'
import './style.scss'

const ItemTodo = (props) => {
  const { description, status, onStatusClick, id, onDeleteClick } = props

  return (
    <div
      className={`todo__item${
        status
          ? status === 'done'
            ? ' todo__item--done'
            : ' todo__item--important'
          : ''
      }`}
    >
      <div className="doto-description">{description}</div>
      <div className="todo-tabs">
        <span
          className="todo-tab todo-tab--important"
          onClick={() => onStatusClick(id, 'important')}
        >
          <i className="fa fa-exclamation" />
        </span>
        <span
          className="todo-tab todo-tab--done"
          onClick={() => onStatusClick(id, 'done')}
        >
          <i className="fa fa-check" />
        </span>
        <span
          className="todo-tab todo-tab--delete"
          onClick={() => onDeleteClick(id)}
        >
          <i className="fa fa-trash-o" />
        </span>
      </div>
    </div>
  )
}

export default ItemTodo
