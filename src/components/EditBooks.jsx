import { TextField, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import EditTodo from '../actions/EditTodo';
import GetTodo from '../actions/GetTodo';

const EditBooks = props => {
  const id = props.match.params.id;
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTodo(id));
  });

  const todos = useSelector(state => state.Todo[id]);
  const [todo, setTodo] = useState(todos);
  const handleClick = (todo, id) => {
    dispatch(EditTodo({ todo, id }));
    history.goBack();
  };

  return (
    <div className="container">
      <h3>Edit TODO</h3>
      <TextField
        label="Edit Todo"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        style={{ display: 'block', marginBottom: '15px' }}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleClick(todo, id)}
      >
        Edit Todo
      </Button>
    </div>
  );
};

export default EditBooks;
