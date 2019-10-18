import React from 'react';

function Todo({ dispatch, state, item }) {
  return (
    <>
    <li onClick={() => dispatch({ type: 'TOGGLE_ITEM', payload: item })}>
      {item.isCompleted ? <del>{`${item.item}`}</del> : `${item.item}`}
    </li>
    </>
  )
}

export default Todo;