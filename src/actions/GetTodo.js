const GetTodo = id => {
  return {
    type: 'GETTODO',
    payload: id,
  };
};

export default GetTodo;
