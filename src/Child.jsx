import React from 'react'

// prop drilling => context api in react, => redux
const Child = ({childName, childAge}) => {
  return (
    <div>Child component - {childName} - {childAge} </div>
  )
}

export default Child