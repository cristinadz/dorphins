import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'
import { IconButton } from '@chakra-ui/react';
import { GrHomeRounded, GrUser, GrBarChart, GrCalendar, GrLogout } from "react-icons/gr"

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
      <IconButton as={Link} to='/home' icon={<GrHomeRounded />} />
      <IconButton as={Link} to='/profile' icon={<GrUser />} />
      <IconButton as={Link} to='/activity' icon={<GrBarChart />} />
      <IconButton as={Link} to='/events' icon={<GrCalendar />} />
      <IconButton onClick={handleLogoutClick } icon={<GrLogout />}/>
    </div>
  )
}

export default NavBar





