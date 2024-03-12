import React from 'react'

const ChildComponent = (props) => {
  return (
    <>
        <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </ >
  )
}

export default ChildComponent