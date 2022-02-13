import { Flex, Text, Heading, Image, Box } from '@chakra-ui/react';

export default function About() {
  return (
    <Box
      backgroundImage={`${process.env.PUBLIC_URL}/fetaturebg.jpg`}
      id="features"
      className="jumptarget"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        px={{ base: '20px', md: 0 }}
        py="30px"
      >
        <Flex
          mt="70px"
          mb="50px"
          maxW="1140px"
          mx="auto"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box>
            <Heading
              color="white"
              mb="20px"
              textAlign={{ base: 'center', md: 'center' }}
              fontSize={{ base: '25px', md: '50px' }}
              position="relative"
              className="story"
              zIndex="4"
            >
              What makes us stand out from the Rest?
            </Heading>
            <Text
              mb="50px"
              mx="auto"
              textAlign="center"
              px={{ base: '20px', md: 0 }}
              color="#cfcfcf"
              fontSize={{ base: '18px', md: '22px' }}
            >
              The Metamon is undoubtedly distinctive. Here are some of the features that make us second to none.
            </Text>
            <Flex
              justifyContent="space-evenly"
              alignItems="stretch"
              flexWrap="wrap"
            >
              <Box
                mb="30px"
                w={{ base: '100%', md: '50%', lg: '30%' }}
                borderWidth="1px"
                borderColor="bdgrey"
                p="30px"
                borderRadius="5px"
              >
                <Image src={`${process.env.PUBLIC_URL}/0a.png`} />
                <Heading fontSize="2xl" my="15px" color="white">
                  Fair Pricing
                </Heading>
                <Text maxW="80%" fontSize="sm" color="white" textalign="center">
                  The pricing of our NFT artwork is completely fair. Absolutely
                  no hidden charges at all.
                </Text>
              </Box>
              <Box
                mb="30px"
                w={{ base: '100%', md: '50%', lg: '30%' }}
                borderWidth="1px"
                borderColor="bdgrey"
                p="30px"
                borderRadius="5px"
              >
                <Image src={`${process.env.PUBLIC_URL}/0b.png`} />
                <Heading fontSize="2xl" my="15px" color="white">
                  Ownership
                </Heading>
                <Text maxW="80%" fontSize="sm" color="white" textalign="center">
                  The owners of the Metamon NFT will have full commercial rights.
                </Text>
              </Box>
              <Box
                w={{ base: '100%', md: '50%', lg: '30%' }}
                mb="30px"
                borderWidth="1px"
                borderColor="bdgrey"
                p="30px"
                borderRadius="5px"
              >
                <Image src={`${process.env.PUBLIC_URL}/0c.png`} />
                <Heading fontSize="2xl" my="15px" color="white">
                  Fair Distribution
                </Heading>
                <Text maxW="80%" fontSize="sm" color="white" textalign="center">
                  All Metamon NFTs will be distributed fairly and without any discrimination.
                  We believe in giving equal chance to everyone.
                </Text>
              </Box>
              <Box
                w={{ base: '100%', md: '50%', lg: '30%' }}
                mb="30px"
                borderWidth="1px"
                borderColor="bdgrey"
                p="30px"
                borderRadius="5px"
              >
                <Image src={`${process.env.PUBLIC_URL}/0d.png`} />
                <Heading fontSize="2xl" my="15px" color="white">
                  Artists
                </Heading>
                <Text maxW="80%" fontSize="sm" color="white" textalign="center">
                All the Metamon NFT artworks are created by artists using best technology and with great precision.
                </Text>
              </Box>
              <Box
                w={{ base: '100%', md: '50%', lg: '30%' }}
                mb="30px"
                borderWidth="1px"
                borderColor="bdgrey"
                p="30px"
                borderRadius="5px"
              >
                <Image src={`${process.env.PUBLIC_URL}/0e.png`} />
                <Heading fontSize="2xl" my="15px" color="white">
                  No Reserved NFT
                </Heading>
                <Text maxW="80%" fontSize="sm" color="white" textalign="center">
                  We believe in transparency. None of the NFT artwork is
                  reserved. They are 100% reserved for the public.
                </Text>
              </Box>
              <Box
                w={{ base: '100%', md: '50%', lg: '30%' }}
                mb="30px"
                borderWidth="1px"
                borderColor="bdgrey"
                p="30px"
                borderRadius="5px"
              >
                <Image src={`${process.env.PUBLIC_URL}/0f.png`} />
                <Heading fontSize="2xl" my="15px" color="white">
                  Charity
                </Heading>
                <Text maxW="80%" fontSize="sm" color="white" textalign="center">
                  5% of the income we make will be donated for animal welfare.
                  Join us and be a part of a good deed.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
