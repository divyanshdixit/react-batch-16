import React from 'react';
import Child from './Child';

//  props: immutable (not change) 
// state: mutable (change)

const Parent = ({name, age}) => {
    name = "new value";

    const getDataFromChild = (data) => {
      console.log('parent')
    }

  return (
    <>
        <div> parent - {name} - {age} </div>
        <h1> value from child - </h1>
        <Child childName={name} childAge={age} getDataFromChild={getDataFromChild} />
    </>
  )
}

export default Parent