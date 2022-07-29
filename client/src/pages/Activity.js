import React from "react";
import RunCard from "../components/RunCard";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function Activity({ setUser, user, runs}) {

	console.log(user)
	const runCards = runs.map((run) => <RunCard key={run.id} run={run} />);

	return (
		<div>
			<Button as={Link} to="/addrun">
				add a run
			</Button> 
			{runCards}
		</div>
	);
}

export default Activity;
