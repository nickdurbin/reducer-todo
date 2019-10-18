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
    default:
      return state;
  }
}