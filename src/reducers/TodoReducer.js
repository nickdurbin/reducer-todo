export const initialState = {
  todoItems: [
    {
      item: 'Learn about reducers',
      isCompleted: false,
      id: 3892987589
    }
  ]
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state, todoItems: [ ...state.todoItems, 
          {
            item: action.payload,
            isCompleted: false,
            id: Date.now(),
          }
        ]
      }
    case 'TOGGLE_TODO':
      const toggleTodo = state.todoItems.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, isCompleted: !item.isCompleted };
        } else {
          return item;
        }
      });
    return {
      ...state,
      todoItems: toggleTodo
    }
    case 'REMOVE_TODO':
    return {
      todoItems: state.todoItems.filter(item => !item.isCompleted)
    };
    default:
      return state;
  }
}