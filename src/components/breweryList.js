import React from 'react'
import { NavLink } from 'react-router-dom'

const BreweryList = (props) => {

  const { brewery } = props

  return (
    <>
    <div>
      <NavLink to={`/brewery/${brewery.id}`} class='breweryName'>
        <p>{brewery.name}</p>
        <img src={brewery.logo} class= 'breweryLogo' alt= {brewery.name} />
      </NavLink>
    </div>
    </>
  )
}

export default BreweryList