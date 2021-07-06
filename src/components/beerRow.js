import React from 'react'

const BeerRow = (props) => {

  const { beer } = props

  return (
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
  )
}

export default BeerRow