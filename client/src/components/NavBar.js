import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'

function NavBar( setUser, user ) {
  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch('/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    }).then(navigate('/'))
  }

  return (
    <div>
        <Link to='/home'>home</Link>
        <Link to='/profile'>profile</Link>
        <Link to='/activity'>activity</Link>
        <Button onClick={ handleLogoutClick } > logout </Button>
    </div>
  )
}

export default NavBar





