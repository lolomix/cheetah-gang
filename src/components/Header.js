import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Link,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
  Heading,
} from '@chakra-ui/react';
import { HiMenu } from 'react-icons/hi';

import { shortenAddress } from '../candy-machine';

import { SiDiscord } from 'react-icons/si';
import { AiOutlineTwitter } from 'react-icons/ai';

export default function Header({ address, onConnect }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = React.useState('right');

  return (
    <>
      <Box className="header">
        <Flex
          maxW="1200px"
          mx="auto"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* <Heading color="white">DUMMY</Heading> */}

          <Link href="/" className="link" py="0.3125rem">
            <Image
              ml={{ base: 0, md: '50px' }}
              src={`${process.env.PUBLIC_URL}/logo2.png`}
            />
          </Link>

          <Box alignItems="center" display={{ base: 'none', md: 'flex' }}>
            <Link href="#about" className="link" mr="10px" color="white">
              Mint
            </Link>
            <Link href="#gallery" className="link" mr="10px" color="white">
              The Story
            </Link>
            <Link href="#roadmap" className="link" mr="10px" color="white">
              Milestone
            </Link>
            <Link href="#features" className="link" mr="10px" color="white">
              Features
            </Link>

            <Link href="#team" className="link" color="white" mr="10px">
              Team
            </Link>
            <Link href="#faq" className="link" color="white" mr="10px">
              Faq
            </Link>

            <Link
              href="https://www.twitter.com/"
              className="social-link"
              isExternal
              color="bgLight"
              mr="10px"
            >
              <AiOutlineTwitter size="14px" />
            </Link>
            <Link
              href="https://discord.gg/"
              className="social-link"
              isExternal
              color="bgLight"
              mr="10px"
            >
              <SiDiscord size="14px" />
            </Link>
            {!address ? (
              <Flex
                as="button"
                bg="bg4"
                width="120px"
                h="40px"
                color="white"
                borderRadius="5px"
                justifyContent="center"
                alignItems="center"
                className="desktop-btn"
                display={{ base: 'none', lg: 'flex' }}
                onClick={onConnect}
              >
                Connect
              </Flex>
            ) : (
              <Box
                bg="bg4"
                px="20px"
                py="10px"
                borderRadius="5px"
                display={{ base: 'none', lg: 'flex' }}
              >
                <Text color="white">{shortenAddress(address || '')}</Text>
              </Box>
            )}
          </Box>

          <Box
            as="button"
            bg="white"
            p="2"
            onClick={onOpen}
            display={{ base: 'block', md: 'none' }}
          >
            <HiMenu color="black" size="30" />
          </Box>
        </Flex>
      </Box>
      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        display={{ base: 'block', md: 'none' }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <Link
              href="#about"
              className="link"
              display="block"
              color="black"
              fontSize="18px"
              py="15px"
            >
              About
            </Link>
            <Link
              href="#roadmap"
              className="link"
              display="block"
              color="black"
              fontSize="18px"
              py="15px"
            >
              Roadmap
            </Link>
            <Link
              href="#gallery"
              className="link"
              display="block"
              color="black"
              fontSize="18px"
              py="15px"
            >
              Gallery
            </Link>

            <Link
              href="#team"
              display="block"
              className="link"
              color="black"
              fontSize="18px"
              py="15px"
            >
              Team
            </Link>
            <Link
              href="https://www.twitter.com/"
              className="link"
              isExternal
              color="bgLight"
              mr="10px"
            >
              <AiOutlineTwitter size="25px" />
            </Link>
            <Link
              href="https://discord.gg/"
              className="link"
              isExternal
              color="bgLight"
            >
              <SiDiscord size="25px" />
            </Link>

            {!address ? (
              <Flex
                className="mobile-btn"
                as="button"
                bg="bg4"
                width="200px"
                h="40px"
                color="white"
                borderRadius="5px"
                justifyContent="center"
                alignItems="center"
                onClick={onConnect}
              >
                connect
              </Flex>
            ) : (
              <Box bg="bg4" px="20px" py="10px" borderRadius="5px">
                <Text color="white">{shortenAddress(address || '')}</Text>
              </Box>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
