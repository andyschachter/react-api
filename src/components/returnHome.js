import React from 'react'
import { NavLink } from 'react-router-dom'

const homeButton = () =>{
  return (
    <div>
    <NavLink to='/' class='backHome'>
      <h4>Return Home</h4>
    </NavLink>
    </div>
  )
}

export default homeButton