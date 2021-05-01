const EditTodo = todo => {
  return {
    type: 'EDITTODO',
    payload: todo,
  };
};

export default EditTodo;
