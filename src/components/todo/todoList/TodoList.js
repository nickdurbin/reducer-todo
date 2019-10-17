import React from 'react';
import Todo from './Todo';
import { Link } from 'react-router-dom';

function TodoList({ tasks, toggle, deleteCompleted }) {
  
  return (
    <div>
      <ul>
        {tasks.map(task => <Todo key={task.id} task={task} toggle={toggle} />)}
      </ul>
      <button>
        <Link to='/addtask'>
          Add Task
        </Link>
      </button>
      <button onClick={deleteCompleted}>
        Delete Completed
      </button>
    </div>
  )
}

export default TodoList;