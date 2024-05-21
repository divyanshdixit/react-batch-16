import React from 'react';
import Child from './Child';

//  props: immutable (not change) 
// state: mutable (change)

const Parent = ({name, age}) => {
    name = "new value"
  return (
    <>
        <div> parent - {name} - {age} </div>
        <Child childName={name} childAge={age} />
    </>
  )
}

export default Parent