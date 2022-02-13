import {
  Flex,
  Text,
  Heading,
  Image,
  Box,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import { AiOutlineCheck } from 'react-icons/ai';

const Icon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozREU3ODQ1RUQ0QjJFOTExOUFBNjhCMkZFNUU4RDk1MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMDE2RjJDNDFBRDMxMUVDODBGNDk3REM3N0IyMTFBMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMDE2RjJDMzFBRDMxMUVDODBGNDk3REM3N0IyMTFBMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBRjY0NUQzQ0QxQUVDMTE5MkY4OEI2NDc4MDRGOTIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNERTc4NDVFRDRCMkU5MTE5QUE2OEIyRkU1RThEOTUwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rPVkrwAAAQFJREFUeNpiZqAM2ADxeiC2pMQQISC+CMT/gfgtuYZwAfEyqCF/gDiCXINygfgX1KA+cg0xB+InUEMOATEnOYaIAfFpqCEPgdiQHEPYgLgDaggIZ5DrJVsg/gY1ZB4Qs6MrYILahg8IAvEVqCFngFgZm6K5QHwLiFOBmAWHQQVQQ34CcRou254ipYd6IObA4prPUDVb8DnbFIgvIwXiBGiCg4F2qPgnIHYiFJDyQLwfybCZSIEJc/FuYmNFFIg3IRlWDcS+QPwVGja+pESxMBBvgBoEMuA5EP8D4rt4IgInEAHijUguA+H55CY+UExtRTIom5Lyhgdq2B0gViCkGCDAAMT4RD4+ZXKNAAAAAElFTkSuQmCC';

export default function About() {
  return (
    <>
      <div className="homeHeader">
        <h3 class="animate-charcter"> Join The Cheetah Gang</h3>
      </div>
      <div>
        <h6 className="contet">
          Enter the amount of cheetah you would like to purchase...
        </h6>
      </div>
      <Box bg="white" id="about" py="60px" className="jumptarget">
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="center"
          alignItems="center"
          maxW="1140px"
          mx="auto"
          px={{ base: '20px', md: 0 }}
        >
          <Flex
            position="relative"
            textAlign="center"
            w={{ base: '100%', md: '560px' }}
            flexDirection="column"
            mr={{ base: 0, md: '30px' }}
          >
            <Image
              right="0"
              top="0"
              position="absolute"
              src={`${process.env.PUBLIC_URL}/box.png`}
              w={{ base: '80px', md: '130px' }}
            />
            <Box py="12px" px="30px" bg="yellow">
              <Heading
                w={{ base: '80%', md: '75%' }}
                mr="auto"
                fontSize={{ base: '20px', md: '28px' }}
                textAlign="left"
                color="black"
              >
                Come in the Metaverse of Metamon
              </Heading>
              <Text
                textAlign="center"
                maxW="75%"
                color="black"
                mr="auto"
                ml="-20px"
              >
                Enter the amount of Metamon you would like to purchase.{' '}
              </Text>
            </Box>
            <Flex
              // h="150"
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundImage={`${process.env.PUBLIC_URL}/MINT.jpg`}
              w="100%"
              color="white"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                as="button"
                width="200px"
                h="70px"
                color="white"
                borderWidth="2px"
                borderColor="white"
                borderRadius="50px"
                fontSize="xl"
                justifyContent="center"
                alignItems="center"
                my="40px"
              >
                {' '}
                CONNECT
              </Box>
            </Flex>
          </Flex>
          <Box
            minH="296px"
            backgroundSize={{ base: 'cover', md: '100%' }}
            backgroundPosition="center"
            className="numbers-main"
            color="black"
            backgroundRepeat="no-repeat"
            backgroundImage={`${process.env.PUBLIC_URL}/box2.jpg`}
          >
            <Heading fontSize={{ base: '1.75rem', md: '2rem' }}>
              The Numbers
            </Heading>

            <List mt="14px" w={{ base: '100%', md: '430px' }}>
              <ListItem>
                <ListIcon as={AiOutlineCheck} />
                <Text
                  fontSize={{ base: '16px', md: '18px' }}
                  color="textColor"
                  mb="4px"
                  display="inline-block"
                >
                  Mint Cost : <strong>0.2 ETH + GAS</strong>
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon
                  as={AiOutlineCheck}
                  fontSize={{ base: '16px', md: '18px' }}
                  color="textColor"
                  mb="4px"
                />
                <Text
                  fontSize={{ base: '16px', md: '18px' }}
                  color="textColor"
                  mb="4px"
                  display="inline-block"
                >
                  Max Supply : <strong> 10,000 </strong>
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon
                  as={AiOutlineCheck}
                  fontSize={{ base: '16px', md: '18px' }}
                  color="textColor"
                  mb="4px"
                />
                <Text
                  fontSize={{ base: '16px', md: '18px' }}
                  color="textColor"
                  mb="4px"
                  display="inline-block"
                >
                  Presale Supply : <strong>3050</strong>
                </Text>
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon
                  as={AiOutlineCheck}
                  fontSize={{ base: '16px', md: '18px' }}
                  color="textColor"
                  mb="4px"
                />
                <Text
                  fontSize={{ base: '16px', md: '18px' }}
                  color="textColor"
                  mb="4px"
                  display="inline-block"
                >
                  Public Sale : <strong>6900</strong>
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon
                  as={AiOutlineCheck}
                  fontSize={{ base: '16px', md: '18px' }}
                  color="textColor"
                  mb="4px"
                />
                <Text
                  fontSize={{ base: '16px', md: '18px' }}
                  color="textColor"
                  mb="4px"
                  display="inline-block"
                >
                  Giveaway Supply : <strong> 50 (reserved for contest)</strong>
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon
                  as={AiOutlineCheck}
                  fontSize={{ base: '16px', md: '18px' }}
                  color="textColor"
                  mb="4px"
                />
                <Text
                  fontSize={{ base: '16px', md: '18px' }}
                  color="textColor"
                  mb="4px"
                  display="inline-block"
                >
                  Royalty Fees : <strong>7.5%</strong>
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon
                  as={AiOutlineCheck}
                  fontSize={{ base: '16px', md: '18px' }}
                  color="textColor"
                  mb="4px"
                />
                <Text
                  fontSize={{ base: '16px', md: '18px' }}
                  color="textColor"
                  mb="4px"
                  display="inline-block"
                >
                  Token Type : <strong>ERC-721</strong>
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon
                  as={AiOutlineCheck}
                  fontSize={{ base: '16px', md: '18px' }}
                  color="textColor"
                  mb="4px"
                />
                <Text
                  fontSize={{ base: '16px', md: '18px' }}
                  color="textColor"
                  mb="4px"
                  display="inline-block"
                >
                  File Hosting : <strong>IPFS</strong>
                </Text>
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
