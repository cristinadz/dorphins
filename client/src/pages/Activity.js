import React from "react";
import RunCard from "../components/RunCard";
import { Link } from "react-router-dom";
import { Button, Container, VStack, Heading } from "@chakra-ui/react";
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'



function Activity({ setUser, user, runs}) {

	// JANUARY
	const janRuns = runs.filter( run => {
		let month = new Date(run.date).toLocaleString('default', { month: 'long' })
		return month === "January"
	})
	const janMiles = janRuns.map( run => run.miles).reduce((partialSum, a) => partialSum + a, 0)

	// FEBRUARY
	const febRuns = runs.filter( run => {
		let month = new Date(run.date).toLocaleString('default', { month: 'long' })
		return month === "February"
	})
	const febMiles = febRuns.map( run => run.miles).reduce((partialSum, a) => partialSum + a, 0)

	// MARCH
	const marRuns = runs.filter( run => {
		let month = new Date(run.date).toLocaleString('default', { month: 'long' })
		return month === "March"
	})
	const marMiles = marRuns.map( run => run.miles).reduce((partialSum, a) => partialSum + a, 0)

	//APRIL 
	const aprRuns = runs.filter( run => {
		let month = new Date(run.date).toLocaleString('default', { month: 'long' })
		return month === "April"
	})
	const aprMiles = aprRuns.map( run => run.miles).reduce((partialSum, a) => partialSum + a, 0)

	// MAY 
	const mayRuns = runs.filter( run => {
		let month = new Date(run.date).toLocaleString('default', { month: 'long' })
		return month === "May"
	})
	const mayMiles = mayRuns.map( runs => runs.miles).reduce((partialSum, a) => partialSum + a, 0)

	//JUNE 
	const junRuns = runs.filter( run => {
		let month = new Date(run.date).toLocaleString('default', { month: 'long' })
		return month === "June"
	})
	const junMiles = junRuns.map( run => run.miles).reduce((partialSum, a) => partialSum + a, 0)

	//JULY 
	const julyRuns = runs.filter( run => {
		let month = new Date(run.date).toLocaleString('default', { month: 'long' })
		return month === "July"
	})
	const julyMiles = julyRuns.map( julyRun => julyRun.miles).reduce((partialSum, a) => partialSum + a, 0) 

	//AUGUST 
	 
	const augRuns = runs.filter( run => {
		let month = new Date(run.date).toLocaleString('default', { month: 'long' })
		return month === "August"
	})
	const augMiles = augRuns.map( run => run.miles).reduce((partialSum, a) => partialSum + a, 0)

	// SEP
	const sepRuns = runs.filter( run => {
		let month = new Date(run.date).toLocaleString('default', { month: 'long' })
		return month === "September"
	})
	const sepMiles = sepRuns.map( run => run.miles).reduce((partialSum, a) => partialSum + a, 0)

	// OCT 

	const octRuns = runs.filter( run => {
		let month = new Date(run.date).toLocaleString('default', { month: 'long' })
		return month === "October"
	})
	const octMiles = octRuns.map( run => run.miles).reduce((partialSum, a) => partialSum + a, 0)

	//NOV 
	const novRuns = runs.filter( run => {
		let month = new Date(run.date).toLocaleString('default', { month: 'long' })
		return month === "November"
	})
	const novMiles = novRuns.map( run => run.miles).reduce((partialSum, a) => partialSum + a, 0)

	//DEC 
	const decRuns = runs.filter( run => {
		let month = new Date(run.date).toLocaleString('default', { month: 'long' })
		return month === "December"
	})
	const decMiles = decRuns.map( run => run.miles).reduce((partialSum, a) => partialSum + a, 0)


	const runCards = runs.map((run) => <RunCard key={run.id} run={run} />);


	const data = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [
		  {
			label: "miles",
			data: [janMiles, febMiles, marMiles, aprMiles, mayMiles, junMiles, julyMiles, augMiles, sepMiles, octMiles, novMiles, decMiles],
			fill: true,
			backgroundColor: "rgba(75,192,192,0.2)",
			borderColor: "rgba(75,192,192,1)"
		  },

		]
	  }
	return (
		<div>
			<Container>
				
			<Button as={Link} to="/addrun">
				add a run
			</Button> 
			<Line data={data} height={'lg'} />
			<Heading pt={7} pb={2} pl={0} color={'gray.600'} size={'lg'}> recent activity </Heading>
			{runCards}
			
			</Container>
		</div>
	);
}

export default Activity
