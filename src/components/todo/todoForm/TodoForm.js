import React, { useState } from 'react'

function TodoForm({ dispatch }) {
  const [formValue, setFormValue] = useState('')

  const handleChange = (e) => {
    setFormValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formValue !== '') {
      dispatch({ type: 'ADD_TODO', payload: formValue.toUpperCase() })
      setFormValue('')
    }
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