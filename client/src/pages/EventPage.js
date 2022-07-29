import { Container } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import EventCarousel from '../components/EventCarousel';

function EventPage() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('/events')
      .then((r) => r.json())
      .then(setEvents);
  }, []);
  
  return (
    <div>
      <EventCarousel events={events}/>
    </div>
  )
}

export default EventPage