import React, {useState} from 'react'

const HigherOrderCompo = (WrappedComponent) => {
function HocCompo() {
    const [counter, setCounter] = useState(0)
    const updateCounter = () => {
      setCounter(counter+1)
    }

    return (
      <div>
          <WrappedComponent counter={counter} updateCounter={updateCounter} /> 
        </div>
    )
}

  return  HocCompo
    
}

export default HigherOrderCompo