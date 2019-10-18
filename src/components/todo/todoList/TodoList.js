import React from 'react';
import Todo from './Todo';
import TodoForm from '../todoForm/TodoForm'

function TodoList({ state, dispatch, todoList }) {
  
  return (
    <div>
      <div className="formContainer">
        <TodoForm dispatch={dispatch} />

        <button className="removeBtn" onClick={() => dispatch({ type: 'REMOVE_TODO' })}>
            Remove Complete
        </button>

      </div>
      <ul>
        {todoList.map(item=> <Todo key={item.id} item={item} dispatch={dispatch} />)}
      </ul>
    </div>
  )
}

export default TodoList;