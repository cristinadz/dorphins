import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import PlanCard from "../components/PlanCard";

function Plan({ user, setUser, plans }) {


	const planCards = plans.map((plan) => (
		<PlanCard user={user} setUser={setUser} plan={plan} key={plan.id} />
	));
	
	const currentPlan = plans.find((plan) => plan.id === user.plan_id);
	console.log(currentPlan)

	return (
		<>
			{user.plan_id ? (
				<>
					<Heading size='lg' my={5} ml={3}> current plan: <br/> <br/> { currentPlan ? ` ${currentPlan.name }` : 'none'} </Heading>
					<Container centerContent>
						<Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' background-image={'https://i.ibb.co/F58Ydt0/5KRUN.jpg' } >
							<Image src="https://i.ibb.co/F58Ydt0/5KRUN.jpg" />
						</Box>
					</Container>
				</>
			) : null}
            <Heading size={'lg'} my={5} ml={3}> pick a plan: </Heading>
			{planCards}
		</>
	);
}

export default Plan;
