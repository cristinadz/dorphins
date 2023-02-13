import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {
	GrLogout,
	GrAddCircle,
} from "react-icons/gr";
import {
	Box,
	Flex,
	Avatar,
	Link,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function NavBar({ setUser, user }) {
	const navigate = useNavigate();
	const { isOpen, onOpen, onClose } = useDisclosure();

	function handleLogoutClick() {
		fetch("/logout", { method: "DELETE" })
			.then((r) => {
				if (r.ok) {
					setUser(null);
				}
			})
			.then(navigate("/"));
	}

	return (
		<>
			<Box bg={useColorModeValue("gray.100")} px={4} w="100%">
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					<IconButton
						size={"md"}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={"Open Menu"}
						display={{ md: "none" }}
						onClick={isOpen ? onClose : onOpen}
					/>
	

						/HStack> }
					<Flex alignItems={"center"}>
						<IconButton
							// variant={"solid"}
							// colorScheme={"teal"}
							as={NavLink}
							to="/addrun"
							size={"md"}
							mr={1}
							icon={<GrAddCircle />}
						></IconButton>
						<Menu bgColor={"cyan.100"}>
							<MenuButton
								as={Button}
								rounded={"full"}
								variant={"link"}
								cursor={"pointer"}
							>
								<Avatar
									size={"sm"}
									src={user.profile_img}
								/>
							</MenuButton>
							<MenuList>
								<MenuItem as={NavLink} to="/profile">
									view profile
								</MenuItem>
								<MenuItem as={NavLink} to="/edit_profile">
									{" "}
									edit profile
								</MenuItem>
								<MenuDivider />
								<MenuItem
									icon={<GrLogout />}
									as={Button}
									onClick={handleLogoutClick}
									bgColor={"white"}
								>
									logout
								</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: "none" }}>
						<Stack as={"nav"} spacing={4}>
							<Link as={NavLink} to="/plan">
								{" "}
								plan
							</Link>
							<Link as={NavLink} to="/activity">
								{" "}
								activity{" "}
							</Link>
							<Link as={NavLink} to="/events">
								{" "}
								events
							</Link>
						</Stack>
					</Box>
				) : null}
			</Box>

			{/* <IconButton as={NavLink} to="/home" icon={<GrHomeRounded />} />
			<IconButton as={NavLink} to="/profile" icon={<GrUser />} />
			<IconButton as={NavLink} to="/activity" icon={<GrBarChart />} />
			<IconButton as={NavLink} to="/events" icon={<GrCalendar />} />
			<IconButton onClick={handleLogoutClick} icon={<GrLogout />} /> */}
		</>
	);
}

export default NavBar;
