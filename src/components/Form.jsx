import React from 'react';
import { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');

  const submitHandler = (event) => {
    event.preventDefault()
    alert(`Form data is => ${username}`);
    setUsername('');
  };
  return (
   
      <Form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
        </div>
        <button type='submit'>Submit</button>
      </Form>
   
  );
};

export default Form;
