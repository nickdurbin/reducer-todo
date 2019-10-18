import React from 'react';

function Todo({ dispatch, item }) {
  return (
    <>
      <li onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: item })}>
        {item.isCompleted ? <del>{`${item.item}`}</del> : `${item.item}`}
      </li>
    </>
  )
}

export default Todo;