import React from 'react';

const ChildCompo = (props) => {
  return (
    <div>
      <h2>ChildCompo</h2>
      <button onClick={props.clickHandler}>Methos in ParentCompo</button>
      <br /><br />
      <button onClick={() => props.clickHandler2('child')}>Methos in ParentCompo  & paramether from childCompo</button>
    </div>
  );
};

export default ChildCompo;
