import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Image, Button, Text, HStack, VStack, Icon, useBreakpointValue, Link } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";
import { GoLocation } from "react-icons/go";
import { FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  // Scroll to the top after navigating
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);  // Scroll to the top after redirect
  };

  // Adjust the font size based on screen size
  const fontSize = useBreakpointValue({ base: "18px", md: "24px" });

  // Adjust alignment and spacing for different screen sizes
  const stackDirection = useBreakpointValue({ base: "column", md: "row" });
  const spacing = useBreakpointValue({ base: 2, md: 5 });
  const justifyContent = useBreakpointValue({ base: "center", md: "space-between" });

  return (
    <VStack
      bgGradient="linear(to-b, red.700, black)"
      color="white"
      justify="center"
      p={5}
    >
      <VStack w="90%">
        <HStack
          justify="space-around"
          p="2%"
          flexDirection={stackDirection} // Adjust direction for smaller screens
          spacing={spacing}
        >
          <VStack w={{ base: "100%", md: "30%" }} my={{ base : "10px"}} h="auto" textAlign={{ base: "center", md: "left" }}>
            <Text fontSize={fontSize} fontWeight="bold">Quick Link</Text>
            <HStack
              wrap="wrap"
              justify={{ base: "center", md: "left" }} // Center on smaller screens
              _hover={{ cursor: "pointer" }}
            >
              <Text onClick={() => handleNavigate("/")}>Home</Text>
              <Text>|</Text>
              <Text onClick={() => handleNavigate("/about")}>About Us</Text>
              <Text>|</Text>
              <Text onClick={() => handleNavigate("/achievements")}>Achievements</Text>
              <Text>|</Text>
              <Text onClick={() => handleNavigate("/gallery")}>Gallery</Text>
              <Text>|</Text>
              <Text onClick={() => handleNavigate("/team")}>Our Team</Text>
              <Text>|</Text>
              <Text onClick={() => handleNavigate("/sponsor")}>Sponsor Us</Text>
              <Text>|</Text>
              <Text onClick={() => handleNavigate("/contact")}>Contact Us</Text>
            </HStack>
          </VStack>

          <VStack w={{ base: "100%", md: "30%" }} my={{ base : "10px"}} h="auto" textAlign={{ base: "center", md: "left" }}>
            <Text fontSize={fontSize} fontWeight="bold">About Us</Text>
            <Box>
              <Text>Team Daksh, NIT Jalandhar, has earned top honors in automotive innovation, including national wins and a championship at Asia's biggest solar vehicle event.</Text>
            </Box>
          </VStack>

          <VStack w={{ base: "100%", md: "30%" }} h="auto" my={{ base : "10px"}} textAlign={{ base: "center", md: "left" }}>
            <HStack justify="left" w="100%">
              <Box><Icon as={GoLocation} color={"red"} w={6} h={6} /></Box>
              <Box><Text>G.T Road, Amritsar Bypass, Jalandhar, Punjab, India-144008</Text></Box>
            </HStack>
            <HStack justify="left" w="100%">
              <Box><Icon as={FaPhoneAlt} color={"red"} w={6} h={6} /></Box>
              <Box><Text>+91 6378526106</Text></Box>
            </HStack>
            <HStack justify="left" w="100%">
              <Box><Icon as={IoMail} color={"red"} w={6} h={6} /></Box>
              <Box>
                <Link href="mailto:teamdaksh@nitj.ac.in" color="white">
                  teamdaksh@nitj.ac.in
                </Link>
              </Box>
            </HStack>
          </VStack>
        </HStack>

        <HStack
          justify="flex-start" // Aligns all content to the left
          fontWeight="bold"
          w="100%"
          spacing={2} // Small spacing between items
          wrap="wrap" // Allows wrapping on smaller screens
        >
          <Text>Designed By:</Text>
          <Link href="https://www.linkedin.com/in/jayant-joshi001/" isExternal color="red">
            Jayant Joshi
          </Link>
          <Text>,</Text>
          <Link href="https://www.linkedin.com/in/money-goyal" isExternal color="red">
           Money Goyal
          </Link>
        </HStack>

        <HStack justify={justifyContent} w="100%" my={{ base : "10px"}} flexDirection={stackDirection} spacing={spacing}>
          <HStack fontSize="20px" fontWeight="bold">
            <Text>Team</Text>
            <Text color="red">Daksh</Text>
          </HStack>
          <Text textAlign={{ base: "center", md: "left" }}>© 2024 NIT Jalandhar — www.teamdaksh.com</Text>
          <HStack spacing={5} my={{ base : "10px"}}>
            <Link href="https://www.facebook.com/TeamDaksh" isExternal>
              <Icon as={FaFacebook} w={6} h={6} />
            </Link>
            <Link href="https://www.instagram.com/teamdaksh/profilecard/?igsh=MnhibWJnemQzZ292" isExternal>
              <Icon as={RiInstagramFill} w={6} h={6} />
            </Link>
            <Link href="https://www.linkedin.com/company/team-daksh/" isExternal>
              <Icon as={FaLinkedin} w={6} h={6} />
            </Link>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Footer;
