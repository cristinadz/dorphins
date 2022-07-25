import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button'


function Welcome() {
  return (
    <div>
        welcome to dorphins
        <Link to="/login">
            <Button label='login' />
        </Link>
        <Link to="/signup">
            <Button label='register' />
        </Link>
    </div>
  )
}

export default Welcome