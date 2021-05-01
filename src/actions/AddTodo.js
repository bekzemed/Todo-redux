const AddTodo = todo => {
  return {
    type: 'ADDTODO',
    payload: todo,
  };
};

export default AddTodo;
