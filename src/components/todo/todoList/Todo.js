import React from 'react';

function Todo({ dispatch, state, item }) {
  return (
    <>
    <li>
      {item.isCompleted ? <del>{`${item.item}`}</del> : `${item.item}`}
    </li>
    </>
  )
}

export default Todo;