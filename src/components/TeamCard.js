import { Flex, Heading, Image, Text, Box } from '@chakra-ui/react';
export default function TeamCard({ image, name, position ="", text }) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w={{ base: '100%', md: '50%', lg: '30%' }}
    >
      <Flex justifyContent="center" position="relative" w="250px">
        <Image src={`${process.env.PUBLIC_URL}/${image}`} maxW="500px" />
      </Flex>
      <Heading mt="10px" color="black">
        {name}
      </Heading>
      {position && (
        <Text fontSize="xl" color="black">
          {position}
        </Text>
      )}
      <Text maxW="80%" textAlign="center" mb="30px" color="black" fontSize="md">
        {text}
      </Text>
    </Flex>
  );
}
