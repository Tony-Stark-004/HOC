import React from 'react'
import HigherOrderCompo from './HigherOrderCompo'

const ClickCounter = (props) => {
  const counter = props.counter
  const updateOne = props.updateCounter
  return (
    <>
      {counter}
      <div><button onClick={updateOne}>Click Me!!</button></div>
    </>
  )
}

export default HigherOrderCompo(ClickCounter)