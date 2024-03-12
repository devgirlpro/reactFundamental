import React from 'react';

const Greet = (props) => {
  return (
    <>
      <h2>
        My name is {props.name}, {props.age} years old, from {props.city}{' '}
      </h2>
      
    </>
  );
};

export default Greet;
