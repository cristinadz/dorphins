import React, { useState } from "react";
import {
	Box,
	IconButton,
	useBreakpointValue,
	VStack,
	Heading,
	Text,
	Container,
	Image,
	Flex,
} from "@chakra-ui/react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Slider from "react-slick";

// Settings for the slider
const settings = {
	dots: true,
	arrows: true,
	fade: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 3000,
	slidesToShow: 1,
	slidesToScroll: 1,
};

function EventCarousel({ events }) {
	const [slider, setSlider] = useState(null);
	const top = useBreakpointValue({ base: "50%", md: "50%" });
	const side = useBreakpointValue({ base: "5%", md: "10%" });

	return (
		<>
            <Heading pt={9} px={3}> featured races:</Heading>

			<Container pt={3} pb={5} centerContent  >

				<Box
					  position={'static'}
					height={"3xs"}
					width={"sm"}
					rounded={"2xl"}
					overflow={''}
				>
					{/* CSS files for react-slick */}
					<link
						rel="stylesheet"
						type="text/css"
						charSet="UTF-8"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
					/>
					{/* Left Icon */}
					{/* <Flex> 
					<IconButton
					flex={1}
						aria-label="left-arrow"
						variant="ghost"
						position="static"
						left={side}
						top={top}
						// transform={"translate(0%, -50%)"}
						zIndex={2}
						onClick={() => slider?.slickPrev()}
					>
						<IoIosArrowDropleft size="25" />
					</IconButton> */}
					{/* Right Icon */}
					{/* <IconButton
					flex={1}
						aria-label="right-arrow"
						variant="ghost"
						position="absolute"
						right={side}
						top={top}
						transform={"translate(0%, -50%)"}
						zIndex={2}
						onClick={() => slider?.slickNext()}
					>
						<IoIosArrowDropright size="25px" />
					</IconButton>
					</Flex> */}
					{/* Slider */}
					<Slider {...settings} ref={(slider) => setSlider(slider)}>
						{events.slice(0, 3).map((event) => (
							<Box
								key={event.id}
								height={"3xs"}
								rounded={"2xl"}
								width={"sm"}
								position="center"
								backgroundPosition="center"
								backgroundRepeat="no-repeat"
								backgroundSize="cover"
								backgroundColor={"gray.200"}
							>
								<Container height="3xs" centerContent>
									<VStack spacing={2} maxW={"xs"} mt={6}>
										<Image
											borderRadius="md"
											boxSize="120px"
											src={event.img}
											alt="race logo"
										/>
										<Heading fontSize={"xl"} >{event.name.toLowerCase()}</Heading>
										<Text
											fontSize={{ base: "md", lg: "lg" }}
											color="GrayText"
										>
											{event.date}
										</Text>
									</VStack>
								</Container>
							</Box>
						))}
					</Slider>
				</Box>
			</Container>
		</>
	);
}

export default EventCarousel;
