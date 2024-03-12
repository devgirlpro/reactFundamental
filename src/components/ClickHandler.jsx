import React from 'react';

const ClickHandler = () => {

    const clickHandler = (event, count = 1) => {
        console.log("Button is clicked", event,"count =>", count,  event.target)
    }

  return (
    <>
      <button onClick={clickHandler} >Click</button>
      <button onClick={(event) => clickHandler(event, 5)} >Click 5</button>
    </>
  );
};

export default ClickHandler;
