import React from 'react';
import { useState } from 'react';

const Message = () => {
  const [message, setMessage] = useState('Welcome visitor');

  const clickHandler = () => {
setMessage('thank you for subscribe!')
  }
  return (
    <>
      <h1>{message}</h1>
      <button onClick={clickHandler}>Subscribe</button>
    </>
  );
};

export default Message;
