import React from 'react';
import { useParams } from 'react-router-dom';
import HomeButton from './returnHome';
import BeerRow from './beerRow';

const Beers = (props) => {

  const {identifier} = useParams()

  console.log(props.beerDataAsProps)
  const oneBrewery = props.beerDataAsProps.filter(product => {
    return product.id.toString() === identifier
  })

  const brewery = oneBrewery[0]
  console.log(brewery)

  return (
    <>
    <h1>
      {brewery.name}
    </h1>
    <div>
      <HomeButton />
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
          <BeerRow beer={beer} />
        ))}
      </tbody>
    </table>
    
    </>
  )
}

export default Beers