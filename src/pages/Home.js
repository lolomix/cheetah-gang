import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, Text, Heading, Input } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import Countdown from 'react-countdown';

import { CountCard } from '../components';

export default function Home({ data, onConnect, address, onMint }) {
  const [count, setCount] = useState(1);
  const { maxSupply, totalSupply, maxMintAmount, cost, loading } = data;

  return (
    <Box
      h={{ base: '100%', lg: '850px', xl: '690px' }}
      bg="black"
      position="relative"
      backgroundImage={`${process.env.PUBLIC_URL}/banner.jpg`}
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Box
        maxW="1200px"
        mx="auto"
        position="relative"
        zIndex="5"
        h="100vh"
      ></Box>
    </Box>
  );
}
