import React from 'react';
import ChildCompo from './ChildCompo';

const ParentCompo = () => {
    
const clickHandler = () => {
    alert("Button is clicked")
}


const clickHandler2 = (childName) => {
    alert(`Helo from clickHandler2 & ${childName}`)
}
  return (
    <div>
        <h2>ParentCompo</h2>
        <ChildCompo clickHandler = {clickHandler}/>
        <ChildCompo clickHandler2 = {clickHandler2}/>


        </div>
  )
}

export default ParentCompo