import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import {
	GrHomeRounded,
	GrUser,
	GrBarChart,
	GrCalendar,
	GrLogout,
  GrAddCircle
} from "react-icons/gr";
import {
	Box,
	Flex,
	Avatar,
	HStack,
	Link,
	IconButton,
	Button,
  Icon,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

function NavBar({ setUser }) {
	const navigate = useNavigate();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const Links = ["Dashboard", "Projects", "Team"];

	// const NavLink = ({ children }: { children: ReactNode }) => (
	// 	<Link
	// 		px={2}
	// 		py={1}
	// 		rounded={"md"}
	// 		_hover={{
	// 			textDecoration: "none",
	// 			bg: useColorModeValue("gray.200", "gray.700"),
	// 		}}
	// 		href={"#"}
	// 	>
	// 		{children}
	// 	</Link>
	// );

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
			<Box bg={useColorModeValue("gray.100", "gray.900")} px={4}  w='100%'>
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					{/* <IconButton
						size={"md"}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={"Open Menu"}
						display={{ md: "none" }}
						onClick={isOpen ? onClose : onOpen}
					/> */}
					<HStack spacing={8} alignItems={"center"}>
						{/* <IconButton as={ NavLink} to='/home' size='lg' color='blackAlpha.600' icon={<BsEmojiSmileUpsideDown />}/> */}
						<HStack
							as={"nav"}
							spacing={4}
							// display={{ base: "none", md: "flex" }}
						>

            <Link as={ NavLink } to='/home'> home</Link>
            <Link as={ NavLink } to='/activity'> activity </Link>
            <Link as={ NavLink } to='/events'> events</Link>

							{/* <IconButton
								as={NavLink}
								to="/home"
								icon={<GrHomeRounded />}
							/> */}
							{/* <IconButton as={NavLink} to="/profile" icon={<GrUser />} /> */}
							{/* <IconButton
								as={NavLink}
								to="/activity"
								icon={<GrBarChart />}
							/> */}
							{/* <IconButton
								as={NavLink}
								to="/events"
								icon={<GrCalendar />}
							/> */}
							{/* <IconButton
								onClick={handleLogoutClick}
								icon={<GrLogout />}
							/> */}
						</HStack>
					</HStack>
					<Flex alignItems={"center"}>
						<IconButton
							// variant={"solid"}
							// colorScheme={"teal"}
							size={"md"}
							mr={4}
							icon={<GrAddCircle />}
						></IconButton>
						<Menu>
							<MenuButton
								as={Button}
								rounded={"full"}
								variant={"link"}
								cursor={'pointer'}
								minW={0}
                size={'sm'}
							>
							<IconButton as={NavLink} to="/profile"  icon={<FaUserCircle />} />
							</MenuButton>
							<MenuList>


								<MenuItem as={NavLink} to='/profile'>view profile</MenuItem>
								<MenuItem>edit profile</MenuItem>
								<MenuDivider />
								<MenuItem icon={<GrLogout />} as={Button} onClick={handleLogoutClick} bgColor={"white"}>logout</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</Flex>

				{/* {isOpen ? (
					<Box pb={4} display={{ md: "none" }}>
						<Stack as={"nav"} spacing={4}>
            <Link as={ NavLink } to='/home'> home</Link>
            <Link as={ NavLink } to='/activity'> activity </Link>
            <Link as={ NavLink } to='/events'> events</Link>
						</Stack>
					</Box>
				) : null} */}
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
