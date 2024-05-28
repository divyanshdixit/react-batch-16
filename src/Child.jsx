import React from 'react'

// prop drilling => context api in react, => redux
const Child = ({childName, childAge, getDataFromChild}) => {
  
  var data = "100"; // 

  return (
    <>
      <div>Child component - {childName} - {childAge} </div>
      <button type='button' onClick={() => getDataFromChild(data)}> Click </button>
    </>
  )
}

export default Child