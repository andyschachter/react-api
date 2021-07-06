import React from 'react'
import { NavLink } from 'react-router-dom'

const Search = (props) => {

  const newSearch = (event) => {
    props.setSearchTerm(event.target.value)
  }

  return (

    <div className='index'>
      <h1>Maine Breweries API</h1>
      <h2>
        <a href='/documentation' class='docHeader'>
          <p>API Documentation</p>
        </a>
      </h2>
      <h2>Breweries</h2>
      <input type="text" name="search" onChange={newSearch}/>
      {props.breweryDataAsProps.map(brewery => {
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
      })}
      
    </div>
  )
}

export default Search

