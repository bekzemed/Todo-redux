const DeleteTodo = todo => {
  return {
    type: 'DELETETODO',
    payload: todo,
  };
};

export default DeleteTodo;
