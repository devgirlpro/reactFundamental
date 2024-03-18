import React from 'react';
import Person from './Person';

const List = () => {
  const nameList = ['Bruce', 'Clark', 'Diana'];
  const personsList = [
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
      {personsList.map((person) => {
        return (
            <Person person={person} key={person.id}/>
        )
      })}
    </>
  );
};

export default List;
