import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DurationPicker from "react-duration-picker";
import {
	Flex,
  Stack,
	Heading,
	Box,
	Button,
	Text,
	Input,
	NumberInput,
	NumberInputField,
} from "@chakra-ui/react";

function EditRunForm({ user }) {
	const [miles, setMiles] = useState(null);
	const [totalTime, setTotalTime] = useState(null);
	const [date, setDate] = useState("");
	const navigate = useNavigate();

	function onChangeTime(e) {
		let totalMin = e.hours * 60 + e.minutes;
		setTotalTime(totalMin);
	}

	return (
		<div>
			<Flex align={"center"} justify={"center"}>
				<form>
					<Heading> edit your run</Heading>
					<Box m={5} maxW="sm">
						<Stack>
							<Text> distance (miles) </Text>
							<NumberInput defaultValue={miles} precision={2} step={0.2}>
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

							<Button type="submit"> save </Button>
						</Stack>
					</Box>
				</form>
			</Flex>
		</div>
	);
}

export default EditRunForm;
