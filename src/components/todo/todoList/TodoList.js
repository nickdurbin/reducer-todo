import React from 'react';
import Todo from './Todo';
import TodoForm from '../todoForm/TodoForm'

function TodoList({ state, dispatch, todoList }) {
  console.log(dispatch)
  
  return (
    <div className='listContainer'>
      <div className="formContainer">
        <TodoForm dispatch={dispatch} />
      </div>
      <div className='listItems'>
        {todoList.map(item=> <Todo key={item.id} item={item} dispatch={dispatch} />)}
      </div>
    </div>
  )
}

export default TodoList;