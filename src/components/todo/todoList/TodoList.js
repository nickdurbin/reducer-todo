import React from 'react';
import Todo from './Todo';
import TodoForm from '../todoForm/TodoForm'

function TodoList({ state, dispatch, todoList }) {
  console.log(dispatch)
  
  return (
    <div>
      <div className="formContainer">
        <TodoForm dispatch={dispatch} />
      </div>
      <ul>
        {todoList.map(item=> <Todo key={item.id} item={item} dispatch={dispatch} />)}
      </ul>
    </div>
  )
}

export default TodoList;