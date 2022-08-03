import {
	Image,
	VStack,
	Text,
	HStack,
	IconButton,
    Icon, 
	Button,
	Box,
} from "@chakra-ui/react";

import { GiRunningShoe, GiCalendar } from "react-icons/gi";
import React from "react";

function ViewProfile({ user, runs }) {
	const {
		first_name,
		last_name,
		username,
		profile_img,
		experience,
		email,
		plan_id,
        bio
	} = user;
console.log(runs)
	return (
		<>
			<VStack pt={9}>
				<Image
					borderRadius="full"
					boxSize="150px"
					src="https://bit.ly/dan-abramov"
					alt="Dan Abramov"
				/>
				<Text fontSize={"2xl"}> {first_name + " " + last_name} </Text>
				<Text fontSize={"xl"} textColor={"gray.400"}>
					{" "}
					{"@" + username}{" "}
				</Text>

                <Text> Total Miles: </Text>
                <Text> Events: </Text>
                <Text> {bio} </Text>
			</VStack>
			{/* <Box>
				<HStack>
					<Icon  w={9} h={9} as={GiRunningShoe} />
					<Icon  w={9} h={9} as={GiCalendar} />
					<Icon  w={9} h={9} as={GiRunningShoe} />
				</HStack>
			</Box> */}
		</>
	);
}

export default ViewProfile;
