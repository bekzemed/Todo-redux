import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import AddTodo from '../actions/AddTodo';
import DeleteTodo from '../actions/DeleteTodo';
import { Link } from 'react-router-dom';

const Books = () => {
  const [todo, setTodo] = useState('');
  const todos = useSelector(state => state.Todo);
  const dispatch = useDispatch();

  const handleClick = todo => {
    dispatch(AddTodo(todo));
    setTodo('');
  };

  return (
    <div className="container">
      <div className="header-container">
        <TextField
          label="Add Todo"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleClick(todo)}
        >
          Add Todo
        </Button>
      </div>
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <div key={index} className="todos-container">
            <h3 style={{ marginLeft: '15px' }}>{todo}</h3>
            <div className="icon-container">
              <Link
                to={`/edit/${index}`}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <i className="far fa-edit"></i>
              </Link>
              <i
                onClick={() => dispatch(DeleteTodo(todo))}
                className="far fa-trash-alt"
                style={{ marginLeft: '15px', marginRight: '15px' }}
              ></i>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Books;
