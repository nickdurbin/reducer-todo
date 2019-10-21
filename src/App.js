import React, { useReducer } from 'react';
import TodoList from './components/todo/todoList/TodoList';
import { initialState, reducer } from './reducers/TodoReducer';
import { TodoContext } from './contexts/TodoContext';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  return (
    <div className="App">
      <div className='detailsContainer'>
        <TodoContext.Provider value={{state, dispatch}}>
          <TodoList />
        </TodoContext.Provider>
      </div>
    </div>
  );
}

export default App;