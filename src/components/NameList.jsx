import React from 'react';
//className error comt from appStyles.css, applied to the App.js
//no need to imported in the child component
//abale to using appStyles.module.css is need to import to each child

const NameList = () => {
  const Names = ['Lili', 'Rose', 'Nik', 'Diba'];
  return (
    <>
      {Names.map((name) => {
        return <h2 key={name} className="error">{name}</h2>;
      })}
    </>
  );
};

export default NameList;
