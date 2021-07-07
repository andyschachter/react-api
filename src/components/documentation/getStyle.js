import React from 'react'

const Style = () => {
  return (
    <>
      <h3>GET /api/style/{'{'}styleName{'}'}</h3>
        <table className= 'example'>
          <tr>
            <td>return certain beers with corresponding style. Fuzzy matched for partial names.</td>
          </tr>
          <tr>
            <td>
              <pre> {
                  `const getBeerByStyle  = async (request, response) => {
                    const { style } = request.params
    
                    const beer = await models.Beers.findAll({
                      attributes: ['id', 'name', 'style', 'abv', 'logo', 'breweryId'],
                      where: {
                        { style: { [models.Sequelize.Op.like]: %${'{'}style}% } },
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
                },
                { IPA beers continued here}
              `}
              </pre>
            </td>
          </tr>
        </table>
    </>
  )
}

export default Style