import { Box, Heading, Flex, Image } from '@chakra-ui/react';
import Faq from 'react-faq-component';

import { FaqList } from '../components';

const data = {
  rows: [
    {
      title: 'How many Cheetah’s will exist?',
      content: 'There will be 10000 Cheetahs on the Ethereum Blockchain.',
    },
    {
      title: 'How much will one Cheetah NFT cost?',
      content: 'The price of one Cheetah will be 0.04 ETH + GAS Fees',
    },
    {
      title: 'How many Cheetahs can I own?',
      content: 'Seven Cheetah NFTs can be purchased per address.',
    },
    {
      title: 'Which Ethereum wallets can I use for the mint?',
      content: 'We support MetaMask wallet.',
    },
    {
      title: 'How do I sell my NFTs?',
      content:'The Cheetah Gang will be listed on OpenSea once the sale is over.',
    },
    {
      title: 'Where can I see the Cheetahs I’ve purchased?',
      content: 'You can see it on MetaMask or your OpenSea profile',
    },
    {
      title: 'How much will be the resale royalties?',
      content: '3% royalty will be applicable on the resales.',
    },
    {
      title: 'How can I contact the Team?',
      content:'The best way to contact the Team is through Discord or Twitter.',
    },
    {
      title: 'When is the drop/sale date?',
      content: 'OCTOBER 20TH 1:00 PM UTC.',
    },
  ],
};

const config = {
  animate: true,
};

export default function FAQ() {
  const styles = {
    bgColor: '#0f1111',
    rowTitleColor: '#fff',
    rowContentColor: '#fff',
    rowTitleTextSize: 'large',
  };
  return (
    <Box bg="bg3" id="faq" className="jumptarget" position="relative">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        py="30"
        pb="80"
        maxW="1140px"
        mx="auto"
      >
        <Heading
          color="white"
          textTransform="uppercase"
          mb="20px"
          fontSize="6xl"
          fontWeight="bold"
          textAlign="center"
          position="relative"
          zIndex="4"
          className="story"
        >
          FAQs
        </Heading>
        <Box w="100%" px={{ base: '20px', md: 0 }}>
          <FaqList faq={data} />
        </Box>
      </Flex>
      <Image
        right="50px"
        bottom="-115px"
        position="absolute"
        src={`${process.env.PUBLIC_URL}/tiger.png`}
        display={{ base: 'none', md: 'block'}}
      />
    </Box>
  );
}
