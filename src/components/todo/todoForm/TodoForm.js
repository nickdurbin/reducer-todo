import React, { useState } from 'react'

function TodoForm({ dispatch }) {
  const [formValue, setFormValue] = useState('')

  const handleChange = (e) => {
    setFormValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formValue !== '') {
      dispatch({ type: 'ADD_TODO', payload: formValue })
      setFormValue('')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Todo Manager</h1>
        <input 
        name="task"
        value={formValue}
        placeholder='Add Task...'
        onChange={handleChange}
        />
        <button type='submit'>Submit</button>
        
        <button className="removeBtn" onClick={() => dispatch({ type: 'REMOVE_TODO' })}>
            Remove Completed
        </button>
      </form>
    </div>
  )
}

export default TodoForm;