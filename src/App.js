import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoForm from './components/todo/todoForm/TodoForm';
import TodoList from './components/todo/todoList/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) {
      if (localStorage.getItem('tasks')) {
        setTasks(JSON.parse(localStorage.getItem('tasks')));
      }
    }
  }, [tasks.length])

  useEffect(() => {
    if (localStorage.getItem('tasks') && JSON.parse(localStorage.getItem('tasks').length !== tasks.length)) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks])

  function toggleComplete(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return ({...task, completed: !task.completed})
      } else {
        return task;
      }
    })
    setTasks(updatedTasks);
  }

  function deleteCompleted() {
    const updatedTasks = tasks.filter(task => !task.completed)
    setTasks(updatedTasks)
  }

  return (
    <div className="App">
      <Switch>
        <Route path='/edittask/:id' render={props => <TodoForm {...props} setTasks={setTasks} tasks={tasks} edit={true} />} />
        <Route path='/addtask' render={props => <TodoForm {...props} setTasks={setTasks} tasks={tasks} edit={false} />} />
        <Route exact path='/' render={props => <TodoList {...props} tasks={tasks} toggle={toggleComplete} deleteCompleted={deleteCompleted} />} />
      </Switch>
    </div>
  );
}

export default App;