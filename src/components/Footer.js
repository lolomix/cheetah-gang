import { Box, Flex, Link, Text ,Image} from '@chakra-ui/react';

import { FiTwitter,  } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <Box
      bg="white"
      minH="200px"
      backgroundPosition="top"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundImage={`${process.env.PUBLIC_URL}/footer.jpg`}
      pt="20px"
      px="20px"
    >
      <Flex justifyContent="center" alignItems="center">
        <Image
          mb="20px"
          mt="50px"
          src={`${process.env.PUBLIC_URL}/logo3.png`}
        />
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Link
          href="https://twitter.com/"
          isExternal
          mr="20px"
          bg="bg3"
          width="200px"
          h="40px"
          color="white"
          borderRadius="5px"
          justifyContent="center"
          alignItems="center"
          display="flex"
          // onClick={onConnect}
        >
          Join Our Twitter
        </Link>

        <Link
          href="https://discord.com/"
          isExternal
          bg="bg3"
          width="200px"
          h="40px"
          color="white"
          borderRadius="5px"
          justifyContent="center"
          alignItems="center"
          display="flex"
          // onClick={onConnect}
        >
          Join Our Discord
        </Link>
      </Flex>
      <Text mt="40px" textAlign="center">
        Copyright © 2021 The Cheetah Gang. All rights reserved.
      </Text>
    </Box>
  );
}
