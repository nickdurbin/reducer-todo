import React, {useContext } from 'react';
import Todo from './Todo';
import TodoForm from '../todoForm/TodoForm';
import { TodoContext } from '../../../contexts/TodoContext';


function TodoList() {
  const { state, dispatch } = useContext(TodoContext)

  console.log(dispatch)
  console.log(state.todoItems)
  
  return (
    <div className='listContainer'>
      <div className="formContainer">
        <TodoForm dispatch={dispatch} state={state} />
      </div>
      <div className='listItems'>
        {state.todoItems.map(item=> <Todo key={item.id} item={item} dispatch={dispatch} />)}
      </div>
    </div>
  )
}

export default TodoList;