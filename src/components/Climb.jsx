import React from 'react'

const Climb = ({route, year, partner, grade}) => {
  return (
    <div className="flex flex-col font-app font-light text-primary text-xs cursor-default py-4 max-w-lg">
      <div className="flex flex-row justify-between">
        <div>{route}</div>
        <div>{year}</div>
      </div>
      <div className="flex flex-row justify-between">
        <div>{partner}</div>
        <div>{grade}</div>
      </div>
      
    </div>
  )
}

export default Climb