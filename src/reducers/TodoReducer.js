const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADDTODO':
      state.push(action.payload);
      return state;
    case 'DELETETODO':
      return state.filter(todo => todo !== action.payload);
    case 'GETTODO':
      state.map(todo => todo === state[action.payload]);
      return state;
    case 'EDITTODO':
      state.map((todo, index) =>
        index === parseInt(action.payload.id)
          ? (state[index] = action.payload.todo)
          : state
      );
      return state;
    default:
      return state;
  }
};

export default TodoReducer;
