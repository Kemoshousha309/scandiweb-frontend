import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      Not Found page
      <Link to="/" >Go to Home</Link>
    </div>
  )
}
