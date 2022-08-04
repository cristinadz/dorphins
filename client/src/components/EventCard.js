import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Badge,
	Button,
	Center,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";


function EventCard({ event, user }) {
	const navigate = useNavigate();
    const { name, date, category, img, id } = event
	const [ isRegistered, setIsRegistered ] = useState(false)
	const [errors, setErrors] = useState([]);


    let formatDate = new Date(date).toLocaleDateString("en-us", {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	function handleRegistration(e){
		e.preventDefault();
		let eventId = e.target.value

		fetch("/registrations", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user_id: user.id,
				event_id: eventId,
				paid_fee: false
			}),
		}).then( r => {
			if (r.ok) {
				r.json().then( registration => {
					console.log(registration)
				}).then(navigate("/activity"))
			}
			else {
				r.json().then((err) => setErrors(err.errors) );
				alert(errors.toString())
			  }
		})
		
	}

	return (
		<>
			<Center py={1}>
				<Stack
					borderRadius="2xl"
					w={"sm"}
					h={"3xs"}
					direction={"row"}
					bg={useColorModeValue("gray.100", "gray.900")}
					boxShadow={"2xl"}
					padding={4}
				>
					<Flex flex={1} alignItems="center">
						<Image
							boxSize="120px"
                            maxW={'sm'}
							objectFit="cover"
							src={img}
						/>
					</Flex>
					<Stack
						flex={3}
						// flexDirection="column"
						justifyContent="center"
						alignItems="center"
						p={1}
						pt={2}
					>
						<Heading fontSize={"md"} fontFamily={"body"} textAlign={'center'}>
							{name}
						</Heading>
						<Text fontWeight={600} color={"gray.500"} size="xs" mb={4}>
							{formatDate}
						</Text>
						<Stack
							align={"center"}
							justify={"center"}
							direction={"row"}
							mt={6}
						>
							<Badge
								px={2}
								py={1}
                                border
								bg={useColorModeValue("white", "gray.800")}
								fontWeight={"400"}
							>
								{category}
							</Badge>
						</Stack>

						<Stack
							width={"100%"}
							mt={"2rem"}
							direction={"row"}
							padding={2}
							justifyContent={"space-between"}
							alignItems={"center"}
						>
							<Button
								value={id}
								flex={1}
								fontSize={"md"}
								rounded={"full"}
								onClick={handleRegistration}
                                bgColor={'gray.300'}
								// _focus={{
								// 	bg: "gray.900",
								// }}
							>
								register
							</Button>
						</Stack>
					</Stack>
				</Stack>
			</Center>
		</>
	);
}

export default EventCard;
