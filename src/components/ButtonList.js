import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All", "Cricket", "Songs", "Music", "Badminton", "Videos", "Pawan Kalyan", "Deepav", "Cricket", "Songs", "Music"]
  return (
    <div className="flex">
      {list.map((l) => <Button key={l} name={l}/>)}
    </div>
  )
}

export default ButtonList
