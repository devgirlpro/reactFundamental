import React from 'react';

const Person = ({person}) => {
  return (
    <>
      <h4>
        {`I am  ${person.name} with ${person.age} years old and knowlenge of ${person.skil}`}
      </h4>
    </>
  );
};

export default Person;
