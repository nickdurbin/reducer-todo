import React, { useReducer } from 'react';
import TodoList from './components/todo/todoList/TodoList';
import { initialState, reducer } from './reducers/TodoReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <div className='detailsContainer'>
        <TodoList todoList={state.todoItems} state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;