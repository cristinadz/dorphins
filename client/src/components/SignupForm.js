import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Box, Heading, VStack, Button } from "@chakra-ui/react";

function SignupForm({ setUser }) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [bio, setBio] = useState("");
	// const [newsletter, setNewsletter] = useState('')
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		setErrors([]);

		fetch("/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				first_name: firstName,
				last_name: lastName,
				username,
				email,
				password,
				password_confirmation: passwordConfirmation,
				
			}),
		})
			.then((r) => {
				if (r.ok) {
					r.json().then((user) => setUser(user));
				} else {
					r.json().then((err) => setErrors(err.errors));
				}
			})
			.then(navigate("/addrun"));
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Box m={5} maxW="sm">
					<Heading textAlign="center" mt={9}>
						hello!
					</Heading>
					<Heading textAlign="center" mb={7}>
						register to get started
					</Heading>
          <VStack align='stretch' m={3} spacing={5} >

					<Input
						variant="filled"
						p={6}
						type="text"
						id="new_first_name"
						autoComplete="off"
						placeholder="first name"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>

					<Input
						variant="filled"
						p={6}
						type="text"
						id="new_last_name"
						autoComplete="off"
						placeholder="last name"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>

					<Input
						variant="filled"
						p={6}
						type="text"
						id="new_username"
						autoComplete="off"
						placeholder="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>

					<Input
						variant="filled"
						p={6}
						type="text"
						id="email"
						autoComplete="off"
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						variant="filled"
						p={6}
						type="password"
						id="new_password"
						autoComplete="off"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<Input
						variant="filled"
						p={6}
						type="password"
						id="password_confirmation"
						autoComplete="off"
						placeholder="confirm password"
						value={passwordConfirmation}
						onChange={(e) => setPasswordConfirmation(e.target.value)}
					/>
					<Button p={7} bg="black" textColor="white" type='submit'> register </Button>
          </VStack>
				</Box>
			</form>
		</div>
	);
}

export default SignupForm;
