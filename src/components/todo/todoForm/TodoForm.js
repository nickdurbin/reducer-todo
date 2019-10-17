import React, { useState } from 'react'

function TodoForm({ dispatch }) {
  const [formValue, setFormValue] = useState('')

  const handleChange = (e) => {
    setFormValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formValue !== '') {
      dispatch({ type: 'ADD_ITEM', payload: formValue })
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
      </form>
    </div>
  )
}

export default TodoForm;