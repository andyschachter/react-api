import React from 'react'

const AddBrewery = () => {
  return(
  <>
      <h3>POST /api/brewery</h3>
        <table className= 'example'>
          <tr>
            <td>add new brewery</td>
          </tr>
          <tr>
            <td>
              <pre> {
                  `name: "Austin Street Brewing"
                  location: "Portland"
                  logo: (link to logo here)
                  website: "url"`
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
              `"201 Okay"
              {
              name: "Austin Street Brewing"
              location: "Portland"
              logo: (link to logo here)
              website: "url"
              }
              `}
              </pre>
            </td>
          </tr>
        </table>
    </>
  )
}

export default AddBrewery