import { Heading, HStack, Box, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
    <VStack>
      <Box shadow='md' bg={'white'} borderRadius='lg'>
        <Image src={imageSrc} borderRadius='lg'/>
        <Box margin="10px" paddingBlock="5px">
          <Heading color={'black'} fontSize="14px" padding="2px">{title}</Heading>
          <Text color="#6A798F" fontSize="11px" padding="2px">{description}</Text>
          <Text color="black" fontSize="11px" padding="2px">See more <FontAwesomeIcon icon={faArrowRight} size="1x"/></Text>
        </Box>
      </Box>
    </VStack>
  );
};

export default Card;
