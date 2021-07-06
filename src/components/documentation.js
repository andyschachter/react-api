import React from 'react'
import { NavLink } from 'react-router-dom'

const Documentation = () => {
  return (
    <html>
      <body>
        <h1>API Documentation</h1>
        <div>
          <NavLink to='/' class='backHome'>
            <h4>Return Home</h4>
          </NavLink>
        </div>
        <h3>GET /api/brewery</h3>
      </body>
    </html>
  )
}

export default Documentation