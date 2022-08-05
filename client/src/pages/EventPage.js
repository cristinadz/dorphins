import { Button, Box, Heading, HStack } from "@chakra-ui/react";
import React, { useState, useEffect, useMemo } from "react";
import EventCarousel from "../components/EventCarousel";
import EventCard from "../components/EventCard";

function EventPage({ user }) {
	const [events, setEvents] = useState([]);
	const [category, setCategory] = useState();

	useEffect(() => {
		fetch("/events")
			.then((r) => r.json())
			.then(setEvents);
	}, []);

	const filteredList = useMemo(getFilteredList, [category, events]);

	function handleCategoryChange(e) {
		setCategory(e.target.value);
	}

	function getFilteredList() {
		if (!category) {
			return events;
		}
		return events.filter((event) => event.category === category);
	}

	const eventCards = filteredList.map((event) => (
		<EventCard key={event.id} event={event} user={user} />
	));

	return (
		<>
			<EventCarousel events={events} />
      <Heading textAlign={"left"} pl={4} pt={9} size={"lg"}>
				{" "}
				upcoming events
			</Heading>
			<HStack spacing={4} justify='center' pt={4}>
				<Button
					bg={"white"}
					textColor={"cyan.500"}
					value="5K"
					onClick={handleCategoryChange}
				>
					5K
				</Button>
				<Button
					bg={"white"}
					textColor={"cyan.500"}
					value="half marathon"
					onClick={handleCategoryChange}
				>
					half marathon
				</Button>
				<Button
					bg={"white"}
					textColor={"cyan.500"}
					value="marathon"
					onClick={handleCategoryChange}
				>
					{" "}
					marathon{" "}
				</Button>
			</HStack>


			{eventCards}
		</>
	);
}

export default EventPage;
