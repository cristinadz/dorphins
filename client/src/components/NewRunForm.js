import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DurationPicker from "react-duration-picker";
import {
	Box,
	Button,
	NumberInput,
	Input,
	Text,
	Heading,
	NumberInputField, 
	Stack,
	Flex,
} from "@chakra-ui/react";

function NewRunForm({ user, addNewRun }) {
	const [miles, setMiles] = useState(null);
	const [totalTime, setTotalTime] = useState(null);
	const [date, setDate] = useState("");
	const navigate = useNavigate();

	function onChangeTime(e) {
		let totalMin = e.hours * 60 + e.minutes;
		setTotalTime(totalMin);
	}

	function handleSubmit(e) {
		e.preventDefault();

		fetch("/runs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				miles: miles,
				total_time: totalTime,
				user_id: user.id,
				date,
			}),
		}).then( r => {
			if (r.ok) {
				r.json().then( run => {
					addNewRun(run)
				})
			}
		})
		.then(navigate("/activity"));
	}

	return (
		<div>
			<Flex align={"center"} justify={"center"}>
				<form onSubmit={handleSubmit}>
					<Heading textAlign="center" mt={9}>
						let's log those miles!
					</Heading>
					<Box m={5} maxW="sm">
						<Stack>
							<Text> distance (miles) </Text>
							<NumberInput defaultValue={1} precision={2} step={0.2}>
								<NumberInputField
									value={miles}
									onChange={(e) => setMiles(e.target.value)}
								/>
							</NumberInput>
							<Text> duration </Text>
							<DurationPicker
								onChange={(e) => onChangeTime(e)}
								initialDuration={{ hours: 1, minutes: 2, seconds: 3 }}
							/>
							<Text> date </Text>
							<Input
								placeholder="Select Date and Time"
								size="md"
								backgroundColor="#ffffff"
								type="datetime-local"
								value={date}
								name="date"
								onChange={(e) => setDate(e.target.value)}
							/>

							<Button type="submit"> add </Button>
						</Stack>
					</Box>
				</form>
			</Flex>
		</div>
	);
}

export default NewRunForm;
