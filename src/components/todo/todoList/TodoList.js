import React from 'react';
import Todo from './Todo';

function TodoList({ state, dispatch, todoList }) {
  
  return (
    <div>
      <ul>
        {todoList.map(item=> <Todo key={item.id} item={item} dispatch={dispatch} />)}
      </ul>
    </div>
  )
}

export default TodoList;