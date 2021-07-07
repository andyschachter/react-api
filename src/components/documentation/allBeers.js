import React from 'react'

const AllBeers = () => {
  return (
    <>
      <h3>GET /api/beer</h3>
        <table className= 'example'>
          <tr>
            <td>return all beers from the API</td>
          </tr>
          <tr>
            <td>
              <pre> {
                  `const getAllBeers = async (request, response) => {
                    const beers = await models.beers.findAll({
                      attributes: ['id', 'name', 'style', 'abv', 'logo', 'breweryId'],
                    })
                  
                    return response.send(beers)
                  }`
              }
              </pre>
            </td>
          </tr>
          <tr>
            <td>Response</td>
          </tr>
          <tr>
            <td>
              <pre> {
              `{
                beerId: 1,
                name: 'The Substance',
                style: 'IPA',
                abv: '6.6%',
                logo: (link to beer logo here),
                }, {
                beerId: 2,
                name: 'Lux',
                style: 'Pale Ale',
                abv: '5.1%',
                logo: (link to beer logo here),
                }, {
                (beers continued here)
                }
              `}
              </pre>
            </td>
          </tr>
        </table>
    </>
  )
}

export default AllBeers