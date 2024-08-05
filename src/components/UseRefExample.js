import React, { useRef, useState } from 'react'

const UseRefExample = () => {
    let x = 0;
    const [y, setY] = useState(0);
    const ref = useRef(0);
    /**
     * it's not like ref = 0
     * 
     * it store like ref = {current: 0}
     * 
     * if we want to use ref value we have to use ref.current
     */

    console.log("Rendering.....")

  return (
    <div className="p-4 m-4 w-96 h-96 border border-black">
      <div>
        <button className="p-2 m-4 bg-green-200"
        onClick={() => {
            x = x + 1;
            console.log("x = " + x)
        }
        }>Increase x</button>
        <span> x = {x}</span>
      </div>
      <div>
        <button className="p-2 m-4 bg-green-200"
        onClick={() => {
            setY(y + 1);
            // console.log("y = " + y)
        }
        }>Increase y</button>
        <span> y = {y}</span>
      </div>
      <div>
        <button className="p-2 m-4 bg-green-200"
        onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref curent value + " + ref.current);
        }
        }>Increase ref</button>
        <span> ref = {ref.current}</span>
      </div>
    </div>
  )
}

export default UseRefExample
