import React from 'react';

const NameList = () => {
  const Names = ['Lili', 'Rose', 'Nik', 'Diba'];
  return (
    <>
      {Names.map((name) => {
        return <h2 key={name}>{name}</h2>;
      })}
    </>
  );
};

export default NameList;
