import React from 'react';

function Todo({ dispatch, item }) {
  return (
    <>
      <div className='todoItem' onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: item })}>
        {item.isCompleted ? <del>{`${item.item}`}</del> : `${item.item}`}
      </div>
    </>
  )
}

export default Todo;