import React from 'react'
import { NavLink } from 'react-router-dom'

const Documentation = () => {
  return (
    <>
        <h1>API Documentation</h1>
        <div>
          <NavLink to='/' class='backHome'>
            <h4>Return Home</h4>
          </NavLink>
        </div>
        <h3>GET /api/brewery</h3>
        <table>
          <tr>
            <td>return all breweries from the API</td>
          </tr>
          <tr>
            <td>
              <pre> {
                  `const getBreweries = async (request, response) => {
                    const breweries = await models.Breweries.findAll({
                      attributes: ['id', 'name', 'location', 'logo', 'website'],
                      include: [{'{'}
                        model: models.Beers,
                        attributes: ['id', 'name', 'style', 'abv', 'logo', 'breweryId']
                      }]
                    })`
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
                id: 1,
                name: 'Bissell Brothers',
                location: 'Portland',
                logo: (link to brewery logo here),
                website: 'http://www.bissellbrothers.com',
                beers: [
                  (beer info here)
                ]
              }, {
                (Breweries continued here)
              }
              `}
              </pre>
            </td>
          </tr>
        </table>
    </>
  )
}

export default Documentation