import React from 'react'
import { useParams, NavLink } from 'react-router-dom';

const Beers = (props) => {

  const {identifier} = useParams()

  console.log(props.beerDataAsProps)
  const oneBrewery = props.beerDataAsProps.filter(product => {
    return product.id.toString() === identifier
  })

  const brewery = oneBrewery[0]

  return (
    <>
    <h1>
      {brewery.name}
    </h1>
    <div>
      <NavLink to='/' class='backHome'>
      <h4>Return Home</h4>
      </NavLink>
    </div>
    <h3>
      {`Location: ${brewery.location}`}
    </h3>
    <a href={brewery.website} class='website'>
      <p>{brewery.website}</p>
    </a>
    <table>
      <caption>Beers</caption>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Style
          </th>
          <th>
            ABV
          </th>
        </tr>
      </thead>
      <tbody>
        {brewery.beers.map(beer => (
          <>
          <tr>
            <td class="beer">
              {beer.name}
            </td>
            <td class="beer">
              {beer.style}
            </td>
            <td class="beer">
              {beer.abv}
            </td>
            <td class="beer">
              <img src={beer.logo} class='beerLogo' alt= {beer.Name}>
              </img>
            </td>
          </tr>
          </>
        ))}
      </tbody>
    </table>
    
    </>
  )
}

export default Beers