import React, { useReducer } from 'react';
import TodoList from './components/todo/todoList/TodoList';
import TodoForm from './components/todo/todoForm/TodoForm';
import { initialState, reducer } from './reducers/TodoReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <TodoForm dispatch={dispatch} />
      <TodoList todoList={state.todoItems} state={state} dispath={dispatch} />
    </div>
  );
}

export default App;