import React, { useState } from 'react'
import { useLocalStorage } from '../../../utils/useLocalStorage';

function TodoForm({ dispatch, state }) {
  const [formValue, setFormValue] = useState('')
  const [todoID, setTodoID] = useLocalStorage('todo', {...state})

  const handleChange = (e) => {
    setFormValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formValue !== '') {
      dispatch({ type: 'ADD_TODO', payload: formValue.toUpperCase() })
      setFormValue('')
    }
    setTodoID(formValue)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>MANAGE <br /> YOUR <br /> PRODUCTION</h1>
        <hr />
        <input 
        name="item"
        value={formValue}
        placeholder='Add Todo...'
        onChange={handleChange}
        />
        <div className='btnContainer'>
          <button className='submitBtn' type='submit'>
            Submit
          </button>
          
          <button className="removeBtn" onClick={() => dispatch({ type: 'REMOVE_TODO' })}>
            Remove
          </button>
        </div>
      </form>
    </>
  )
}

export default TodoForm;