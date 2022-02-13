import { Box, Text, Heading, Flex } from '@chakra-ui/react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Roadmap() {
  const arrowStyle = {
    borderRightColor: '#2B6CB0',
  };
  const contentStyle = {
    background: '#2B6CB0',
    boxShadow: 'none',
  };
  const iconStyle = {
    background: '#2B6CB0',
    width: 30,
    height: 30,
    marginLeft: -14,
    boxShadow: 'none',
    top: 15,
  };
  return (
    <Box
      bg="#84a421"
      backgroundImage={`${process.env.PUBLIC_URL}/roadmap_bg.jpg`}
      backgroundSize="cover"
      backgroundPosition={{ base: '100%', md: 'top' }}
      id="roadmap"
      py="60px"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        maxW="1140px"
        mx="auto"
        py="30px"
        className="jumptarget"
      >
        <Heading
          fontSize={{ base: '30px', md: '50px' }}
          textAlign="center"
          className="story"
          position="relative"
          zIndex="4"
          maxW="fit-content"
        >
          Milestones
        </Heading>
        <Text
          textAlign="center"
          color="#4a4a4a"
          fontSize={{ base: '18px', md: '22px' }}
          line-height={{ base: '24px', md: '32px' }}
          text-align="center"
          margin-bottom="40px"
          className="rarity-para"
        >
          We've established multiple milestones for The Cheetah Gang. When we
          reach a particular milestone, we will move towards the next milestone.
        </Text>
        <Box className="timeline" w="100%">
          <Box className="time-container left">
            <Box className="time-content">
              <h2 className="milestones-title">Milestone 1</h2>
              <Text>
                Website will be launched and we’ll also run a giveaway contest.
              </Text>
            </Box>
          </Box>
          <Box className="time-container right two">
            <Box className="time-content">
              <h2 className="milestones-title">Milestone 2</h2>
              <Text>Pre-sale launch of the full NFT collection.</Text>
            </Box>
          </Box>
          <Box className="time-container left two">
            <Box className="time-content">
              <h2 className="milestones-title">MILESTONE 3</h2>
              <Text>
                Utilizing funds for marketing campaign for maximum exposure
                including influencer marketing.
              </Text>
            </Box>
          </Box>
          <Box className="time-container right three">
            <Box className="time-content">
              <h2 className="milestones-title">MILESTONE 4</h2>
              <Text>
              Launch of the full NFT-collection
              </Text>
            </Box>
          </Box>
          <Box className="time-container left three">
            <Box className="time-content">
              <h2 className="milestones-title">MILESTONE 5</h2>
              <Text>
              Release of the Metamon world (game) with exclusive content and trainer persanolisation, and giveaways for our hoddlers (25th of february)
              </Text>
            </Box>
          </Box>
          <Box className="time-container right four">
            <Box className="time-content">
              <h2 className="milestones-title">MILESTONE 6</h2>
              <Text>
              5% will be donated Unicef for the people and children in need.
              </Text>
            </Box>
          </Box>
          {/* <Box className="time-container left four">
            <Box className="time-content">
              <h2 className="milestones-title">MILESTONE 7</h2>
              <Text>
                Over 1000 NFT giveaways to holders on upcoming collaborating
                projects.
              </Text>
            </Box>
          </Box>
          <Box className="time-container right five">
            <Box className="time-content">
              <h2 className="milestones-title">MILESTONE 8</h2>
              <Text>Formation of DAO for the Community.</Text>
            </Box>
          </Box> */}
        </Box>
      </Flex>
    </Box>
  );
}
