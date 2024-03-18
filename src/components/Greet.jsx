import React from 'react';

//destructuring props
const Greet = ({name, age, city, children}) => {
  //destructuring in body in tis way
  //const {name, age, city, children} = props
  return (
    <>
      <h2>
        My name is {name}, {age} years old, from {city}{' '}
      </h2>
      {children}
    </>
  );
};

export default Greet;
