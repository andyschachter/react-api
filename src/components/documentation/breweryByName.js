import React from 'react'

const BreweryByName = () => {
  return (
  <>
  <h3>GET /api/brewery/{'{'}breweryNameOrId{'}'}</h3>
        <table>
          <tr>
            <td>return all breweries from the API</td>
          </tr>
          <tr>
            <td>
              <pre> {
                  `const getBreweryByNameOrId = async (request, response) => {
                    try {
                      const { identifier } = request.params
                  
                      const brewery = await models.Breweries.findAll({
                        attributes: ['id', 'name', 'location', 'logo', 'website'],
                        where: {
                          [models.Sequelize.Op.or]: [
                            { id: identifier },
                            { name: { [models.Sequelize.Op.like]: %${'{'}identifier}% } },
                          ]
                        },
                        include: [{
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

export default BreweryByName