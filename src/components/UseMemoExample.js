import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../utils/helper';

const UseMemoExample = () => {
    const [number, setNumber] = useState(0);
    const [darkTheme, setDarkTheme] = useState(false);
    // const prime = findNthPrime(number);
    const prime = useMemo(() => findNthPrime(number), [number])
  return (
    <div 
    className={
        "p-4 m-4 w-96 h-96 border border-black " + 
        (darkTheme && "bg-gray-500")
        }
        >
        <div>
            <button className="p-2 bg-green-200"
            onClick={() => setDarkTheme(!darkTheme)}>Toggle</button>
        </div>
        <div>
            <input 
            className="p-2 m-2 border border-black"
            type="number" value={number}
            onChange={e => setNumber(e.target.value)}></input>
            <p>nth prime number is: {prime}</p>
        </div>
    </div>
  )
}

export default UseMemoExample
