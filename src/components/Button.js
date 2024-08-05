import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className="px-5 mx-2 my-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 font-bold">{name}</button>
    </div>
  )
}

export default Button
