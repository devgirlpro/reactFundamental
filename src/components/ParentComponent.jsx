import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {

    const greetParent = () => {
        alert('Hello parent')
    };

  return (
    <>
      <ChildComponent greetHandler= {greetParent}/>
    </>
  );
};

export default ParentComponent;
