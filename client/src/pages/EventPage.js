import { Container, Heading } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import EventCarousel from '../components/EventCarousel'
import EventCard from '../components/EventCard';


function EventPage() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('/events')
      .then((r) => r.json())
      .then(setEvents);
  }, []);

  const eventCards = events.map( event => <EventCard event={event} />)
  
  return (
    <>
      <EventCarousel events={events}/>
      <Heading textAlign={'left'} pl={5}> upcoming events</Heading>
      { eventCards }
    </>
  )
}

export default EventPage