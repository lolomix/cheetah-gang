import React, {useState} from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FaPlus, FaMinus } from 'react-icons/fa';
export default function FaqCard({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Box
      as="button"
      display="block"
      onClick={() => setIsOpen(!isOpen)}
      my="10px"
      borderWidth="1px"
      borderColor="#505450"
      className={`faq ${isOpen ? 'open' : ''}`}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        py="30px"
        px="24px"
      >
        <Text
          fontSize="1.25rem"
          className={`faq-heading ${isOpen ? 'open' : ''}`}
        >
          {title}
        </Text>
        {isOpen ? (
          <FaMinus size="24px" color="#ffbb28" />
        ) : (
          <FaPlus size="24px" color="#cfcfcf" />
        )}
      </Flex>
      <Flex p="1.25rem" pt="0" className={`faq-body ${isOpen ? 'open' : ''}`}>
        <Text color="#cfcfcf" fontSize="18px">
          {content}
        </Text>
      </Flex>
    </Box>
  );
}
