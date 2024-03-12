import React from 'react';
import { useState } from 'react';
import ClickHandler from './ClickHandler';


const Message = () => {
  const [message, setMessage] = useState('Welcome visitor');

  const clickHandler = () => {
    message === 'Welcome visitor'
      ? setMessage('thank you for subscribe!')
      : setMessage('Welcome visitor');
  };
  console.log('MESSAGE2 =>', message);
  return (
    <>
      <h1>{message}</h1>
      <button onClick={clickHandler}>Subscribe</button>
      <ClickHandler />
      
    </>
  );
};

export default Message;
