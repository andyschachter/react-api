import React from 'react'

const BeerByNameOrId = () => {
  return (
    <>
    <h3>GET /api/beer/{'{'}beerNameOrId{'}'}</h3>
          <table>
            <tr>
              <td>return certain beer with corresponding name or id. Fuzzy matched for partial names.</td>
            </tr>
            <tr>
              <td>
                <pre> {
                    `const getBeerByNameOrId = async (request, response) => {
                      const { identifier } = request.params
      
                      const beer = await models.Beers.findAll({
                        attributes: ['id', 'name', 'style', 'abv', 'logo', 'breweryId'],
                        where: {
                          [models.Sequelize.Op.or]: [
                            { id: identifier },
                            { name: { [models.Sequelize.Op.like]: %${'{'}identifier}% } },
                          ]
                        },
                        include: [{
                          model: models.Breweries,
                          attributes: ['id', 'name', 'location', 'logo', 'website'],
                        }]
                      })
      
                      return beer
                        ? response.send(beer)
                        : response.sendStatus(404)`
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
                  breweryId: 1
                  brewery: {brewery info here}
                  }
                `}
                </pre>
              </td>
            </tr>
          </table>
    </>
  )
}

export default BeerByNameOrId