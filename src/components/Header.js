import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, position } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
    name: "E-mail"
  },
  {
    icon: faGithub,
    url: "https://manugrana2.github.io/",
    name: "Github"
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    name: "LinkedIn"
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    name: "medium"
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    name: "Stackoverflow"
  },
];

const Header = () => {
  const prevPositionRef = useRef()
  const headerElm = useRef()
  const newPositionRef= useRef()
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return(window.removeEventListener('scroll', handleClick))

  },[])
  
  const handleScroll = (e) => {
    let windowY = window.scrollY 
    if(prevPositionRef.current < newPositionRef.current){
      headerElm.current.style.transform =`translateY(-200px)`
    }else{
      headerElm.current.style.transform =`translateY(0px)`
    }
    prevPositionRef.current = newPositionRef.current
    newPositionRef.current = windowY
  }
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".4s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerElm}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map(elm => <a key={elm.url} href={elm.url}> <FontAwesomeIcon icon={elm.icon} size="2x" /> </a>)}
          </nav>
          <nav>
            <HStack spacing={8}>
            <a href="/#projects" onClick={handleClick("projects")}>Projects</a>
            <a href="/#contact-me" onClick={handleClick("contactme")}>Contact me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
