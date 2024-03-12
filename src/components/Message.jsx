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
      <br />
      <br />
      <h3>log in console</h3>
      <ClickHandler />
      <br /><br />
    </>
  );
};

export default Message;
