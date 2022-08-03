import { Button, Container, Heading, HStack } from '@chakra-ui/react';
import React, { useState, useEffect, useMemo } from 'react'
import EventCarousel from '../components/EventCarousel'
import EventCard from '../components/EventCard';


function EventPage() {
  const [events, setEvents] = useState([])
  const [category, setCategory] = useState();

  useEffect(() => {
    fetch('/events')
      .then((r) => r.json())
      .then(setEvents);
  }, []);


  function getFilteredList() {
    if (!category) {
      return events;
    }
    return events.filter((event) => event.category.name === category);
  }

  const filteredList = useMemo(getFilteredList, [category, events]);

  function handleCategoryChange(e) {
    setCategory(e.target.value)

  }
  const eventCards = filteredList.map( event => <EventCard event={event} />)
  console.log(filteredList)
  return (
    <>
    <EventCarousel events={events}/>
    <HStack spacing={4} as={Container} textAlign={'center'}>
    <Button
          bg={'white'}
          textColor={'cyan.500'}
          value='5K'
          onClick={handleCategoryChange}
        >
          5K
        </Button>
        <Button
          bg={'white'}
          textColor={'cyan.500'}
          value='half marathon'
          onClick={handleCategoryChange}
        >
          half marathon
        </Button>
        <Button
          bg={'white'}
          textColor={'cyan.500'}
          value='marathon'
          onClick={handleCategoryChange}
        >
          {' '}
          marathon{' '}
        </Button>
    </HStack>
  
      <Heading textAlign={'left'} pl={5}> upcoming events</Heading>
      { eventCards }
    </>
  )
}

export default EventPage