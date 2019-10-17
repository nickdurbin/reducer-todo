import React from 'react';
import Todo from './Todo';
import { Link } from 'react-router-dom';

function TodoList({ state, dispatch, todoList }) {
  
  return (
    <div>
      <ul>
        {todoList.map(item=> <Todo key={item.id} item={item} dispatch={dispatch} />)}
      </ul>
      <button>
        <Link to='/add'>
          Add Task
        </Link>
      </button>
    </div>
  )
}

export default TodoList;