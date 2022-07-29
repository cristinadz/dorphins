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
} from "@chakra-ui/react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Slider from "react-slick";

// Settings for the slider
const settings = {
	dots: true,
	arrows: false,
	fade: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
};

function EventCarousel({ events }) {
	const [slider, setSlider] = useState(null);
	const top = useBreakpointValue({ base: "50%", md: "50%" });
	const side = useBreakpointValue({ base: "5%", md: "10%" });

	return (
		<div>
            
			<Container centerContent>
				<Box
					//   position={'fixed'}
					height={"3xs"}
					width={"sm"}
					rounded={"2xl"}
					overflow={"hidden"}
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
					<IconButton
						aria-label="left-arrow"
						variant="ghost"
						position="absolute"
						left={side}
						top={top}
						transform={"translate(0%, -50%)"}
						zIndex={2}
						onClick={() => slider?.slickPrev()}
					>
						<IoIosArrowDropleft size="25" />
					</IconButton>
					{/* Right Icon */}
					<IconButton
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
					{/* Slider */}
					<Slider {...settings} ref={(slider) => setSlider(slider)}>
						{events.slice(0, 3).map((event) => (
							<Box
								key={event.id}
								height={"sm"}
								width={"xs"}
								position="center"
								backgroundPosition="center"
								backgroundRepeat="no-repeat"
								backgroundSize="cover"
								backgroundColor={"gray.200"}
							>
								<Container height="2xs" centerContent>
									<VStack spacing={2} maxW={"xs"} mt={8}>
										<Image
											borderRadius="md"
											boxSize="100px"
											src={event.img}
											alt="race logo"
										/>
										<Heading fontSize={"xl"} >{event.name}</Heading>
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
		</div>
	);
}

export default EventCarousel;
