import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <h2>Oops, Page Not Found</h2>
      <p>Plaese go back to <Link to="/">Homepage</Link> </p>
    </div>
  )
}

export default PageNotFound;
