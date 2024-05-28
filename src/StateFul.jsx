import React, { useState } from 'react';
import Parent from './Parent';

// hook - function - state - useState()

const StateFul = () => {
    const [fname, setFname] = useState(); // null, number, string, boolean, object, array 
    const [age, setAge] = useState(0); // null, number, string, boolean, object, array 

    const handleAge = () => {
        console.log('first')
        var d = new Date();
        setAge(d.getFullYear() - 1996);
    }
  return (
    <>
        <div>StateFul - {fname} - {age} </div>
        <button onClick={() => setFname('Divyansh')}> Change Fname </button>
        <button onClick={handleAge}> Change Age </button>
        <Parent age={age} />
    </>
  )
}

export default StateFul