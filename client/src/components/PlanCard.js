import {
	Button,
	Box,
	Container,
	Text,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";
import React from "react";

function PlanCard({ user, plan, setUser }) {
	function handleAddPlan(e) {
		let planId = e.target.value;
		fetch(`/users/${user.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ plan_id: planId }),
		})
			.then((r) => r.json())
			.then((updatedUser) => {
				setUser(updatedUser);
			});
	}
	return (
		<>
			<Accordion defaultIndex={[0]} allowMultiple>
				<AccordionItem>
					<AccordionButton>
						<Box flex="1" textAlign="left">
							<Text fontSize={'lg'}>{plan.name}</Text>{" "}
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
                        <Text> {plan.description}</Text>
						<Text> number of runs: {plan.number_of_runs}</Text>

						<Button value={plan.id} onClick={handleAddPlan} mt={6}>
							{" "}
							pick plan{" "}
						</Button>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
}

export default PlanCard;
