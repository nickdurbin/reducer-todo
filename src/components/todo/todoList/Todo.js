import React from 'react';

function Todo({ dispatch, state, item }) {
  return (
    <>
    <li>
      {item.completed ? <del>{`${item.item}`}</del> : `${item.item}`}
    </li>
    </>
  )
}

export default Todo;