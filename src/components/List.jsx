import React from 'react';

const List = () => {
  const nameList = ['Bruce', 'Clark', 'Diana'];
  const persons = [
    { id: 1, name: 'Bruce', age: 30, skil: 'react' },
    { id: 2, name: 'Clark', age: 25, skil: 'Angular' },
    { id: 3, name: 'Diana', age: 28, skil: 'Vue' },
  ];
  return (
    <>
      <h2>List Of Name</h2>
      <ul>
        {nameList.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>

      <h2>ist of object</h2>

      {persons.map((person) => {
        return (
          <h4 key={person.id}>
            {`this is ${person.name} with ${person.age} years old and knowlenge of ${person.skil}`}
          </h4>
        );
      })}
    </>
  );
};

export default List;
