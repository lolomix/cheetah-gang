import { Flex, Box,  Heading,Text } from '@chakra-ui/react';
import TeamCard from '../components/TeamCard';

export default function About() {
  return (
    <Box bg="yellow" id="team" className="jumptarget">
      <Flex
        flexDirection="column"
        alignItems="center"
        py="30px"
        px={{ base: '20px', md: 0 }}
      >
        <Flex
          maxW="1140px"
          mx="auto"
          justifyContent="flex-start"
          flexDirection="column"
          alignItems="center"
        >
          <Heading
            color="black"
            fontSize={{ base: '30px', md: '50px' }}
            fontWeight="bold"
            mt="50px"
            textAlign="center"
            className="story white"
            zIndex="4"
            position="relative"
          >
            Meet the movers and shakers behind
            <br /> The Cheetah Gang
          </Heading>
          <Text
            fontSize={{ base: '18px', md: '22px' }}
            color="#4a4a4a"
            my="30px"
            textAlign="center"
          >
            The cheetah gang was established by a squad that are devoted to
            NFTs. These highly experienced crew created
            <br /> the marvelous world of The Cheetah Gang.
          </Text>
          <Flex
            justifyContent={{ base: 'flex-start', md: 'space-between' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
          >
            <TeamCard
              name="Alfredo"
              image="ta.jpg"
              position="NFT Enthusiast"
              text="Alfredo eats, sleeps and breaths NFT and Crypto. He’s an NFT lover and hodler of crypto for life."
            />
            <TeamCard
              name="Maestro"
              image="tb.jpg"
              position="Creative Artist"
              text="Maestro is the art director who is a pro at creating the most visually stunning pieces of art."
            />
            <TeamCard
              name="Phantom"
              image="tc.jpg"
              position="Marketing Wizard"
              text="Phantom is a marketing genius and no one can beat him at marketing strategies and management."
            />
            <TeamCard
              name="Techie Beast"
              image="td.jpg"
              position="Coding Freak"
              text="A pro at coding and programming, Beast has years of experience in development - a wizard for sure."
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
