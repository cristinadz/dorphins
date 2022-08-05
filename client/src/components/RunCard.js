import React from "react";
import { Flex, Box, Icon, chakra, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function RunCard({ run }) {
	const { id, miles, total_time, date } = run

	let formatDate = new Date(date).toLocaleDateString("en-us", {
		weekday: "long",
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	return (
		
		<Flex
			// bgColor={"gray.100"}
			_dark={{
				bg: "#3e3e3e",
			}}
			p={2}
			w="full"
			alignItems="center"
			justifyContent="center"
		>
			<Link to={`/runs/${id}`}>
			<Box 
				shadow='md'
				borderWidth='1px'
				w="sm"
				mx="auto"
				bg="white"
				_dark={{
					bg: "cyan.800",
				}}
				rounded="lg"
				overflow="hidden"
			>
				<Flex alignItems="center" px={6} py={1} bg="cyan.400">
					<Text color="white" fontSize="lg">
						5K PLAN
					</Text>
				</Flex>

				<Box py={4} px={6} bgColor={'gray.50'} >
					<Heading
						fontSize="xl"
						fontWeight="bold"
						color="gray.800"
						_dark={{
							color: "white",
						}}
					>
						run name
					</Heading>
					<Flex
						alignItems="center"
						mt={4}
						color="gray.700"
						_dark={{
							color: "gray.200",
						}}
					>
						<Icon h={5} w={5} mr={2} />

						<chakra.h1 px={2} fontSize="md">
							{formatDate}
						</chakra.h1>
					</Flex>

					<Flex
						alignItems="center"
						mt={4}
						color="gray.700"
						_dark={{
							color: "gray.200",
						}}
					>
						<Icon h={5} w={5} mr={2} />

						<chakra.h1 px={2} fontSize="md">
							{miles} miles
						</chakra.h1>
					</Flex>
					<Flex
						alignItems="center"
						mt={4}
						color="gray.700"
						_dark={{
							color: "gray.200",
						}}
					>
						<Icon h={5} w={5} mr={2} />
						<Text px={2} fontSize="md">
							pace: {total_time / miles}
						</Text>


					</Flex>
				</Box>
			</Box>
			</Link>
		</Flex>
	);
}

export default RunCard;

