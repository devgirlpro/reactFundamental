import React from 'react'

const FunctionClick = () => {

const clickHandler = () => {
    console.log("Button clicked")
}

  return (
    <div>
        <h2>Event HAndling</h2>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick