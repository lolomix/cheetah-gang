import { Box, Heading, Image, Text, Flex, Grid } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { PUBLIC_URL } = process.env;

const images = new Array(18).fill().map((_, i) => i);

export default function Gallery() {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 8000,
          pauseOnHover: false,
          cssEase: 'linear',
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 8000,
          pauseOnHover: false,
          cssEase: 'linear',
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 8000,
          pauseOnHover: false,
          cssEase: 'linear',
          infinite: true,
          arrows: false,
        },
      },
    ],
  };
  const reverse = {
    ...settings,
    rtl: true,
  };
  return (
    <Box id="gallery">
      <Box className="jumptarget" bg="bg">
        <Flex
          backgroundImage={{ base: '', md: `${process.env.PUBLIC_URL}/b.jpg` }}
          backgroundRepeat="no-repeat"
          backgroundPosition="right bottom"
          mx="auto"
          flexDirection="column"
          alignItems="center"
          py="60px"
          id="about"
          px={{ base: '20px', md: 0 }}
        >
          <Flex flexDirection={{ base: 'column', md: 'row' }}>
            <Box
              display={'flex'}
              flexDirection={`Column`}
              alignItems={'center'}
              justifyContent={'center'}
              position="relative"
              mb={{ base: '30px', md: 0 }}
            >
              <Image
                className="lftlft"
                src={`${process.env.PUBLIC_URL}/a.gif`}
              />
            </Box>
            <Box ml={{ base: 0, md: '50px' }}>
              <Heading color="yellow" fontFamily="fancy">
                Welcome To
              </Heading>
              <Heading
                color="white"
                mb="20px"
                fontSize={{ base: '30px', md: '45px' }}
                position="relative"
                className="story"
                zIndex="4"
              >
                Metamon:
                <br /> The Newest Poke-Centric <br /> in the Metaverse
              </Heading>
              <Text
                mb="40px"
                maxW="700px"
                minW="300px"
                mx="auto"
                textAlign="justify"
                px={{ base: '10px', md: 0 }}
                color="white"
                fontSize="17px"
                lineHeight="26px"
              >
                For most of history, games have had no direct link with finance,
                and players had nothing to do with investors. Metamon has now
                enabled the connections between them with mechanisms such as
                playtoearn, which opens up a brand new sector in the market.
                <br />
                <a href="https://deme.games/#/home">Metamon</a> is a new action
                game with Metamon as its theme. It is the first Metamon game
                where players can independently evolve Metamon and change their
                appearance. The overall game restores the Metamon world in
                depth, adding a variety of rich gameplay such as the classic
                Metamon gacha system, Metamon cultivation system, checkpoint
                battles, Z move, Metamon dispatch (mining), and many others.
                There are also Barga, Invasion of Mythical Beasts, Daily Trail,
                Team Hunting, Battle Tower, Champions Road, Barga Battle, Quartz
                Assembly, Alliance War, Cross-server PK and many other gameplay
                varieties available.
              </Text>

              <Heading color="yellow">A Deeper Look at Metamon</Heading>
              <Text
                mt={'20px'}
                mb="50px"
                maxW="700px"
                minW="300px"
                mx="auto"
                textAlign="justify"
                px={{ base: '10px', md: 0 }}
                color="white"
                fontSize="17px"
                lineHeight="26px"
              >
                Metamon has created a unique NFT mechanism that enables a user's
                NFT to no longer just be a work of art but a way to build
                characters in a game. Metamon has 4 different colors of Metamon
                NFTs, red being the most powerful, followed by orange, then
                purple, then blue. More powerful Metamons are relatively rare.
                Users can upgrade NFTs through PVE, or upgrade Metamon with
                equipment. Equipment in the game can increase the Metamon's
                combat power, dispatch time, etc. Metamon has many features to
                explore, and more detailed tutorials will be released when the
                official version is released.
              </Text>
              <Heading color="yellow">The Cheetah Gang</Heading>
              <Text
                mt={'20px'}
                mb="50px"
                maxW="700px"
                minW="300px"
                mx="auto"
                textAlign="justify"
                px={{ base: '10px', md: 0 }}
                color="white"
                fontSize="17px"
                lineHeight="26px"
              >
                The cheetah is one of the most fascinating animals on Earth and
                the world's fastest land animal. Forward to New Year 2030, and
                these fierce felines that were once agile have become lazy, slow
                and clumsy on the planet. And yes, these elegant animals are
                racing towards extinction on our planet. Very few cheetahs are
                left on the planet due to hunting by humans, climate change and
                habitat destruction. Due to these reasons, the population of
                cheetahs is decreasing day by day. Therefore, these big cats
                have decided to reside in the Ethereum Blockchain for eternity.
                This is your once in a lifetime chance to own these unique and
                gorgeous looking cheetahs through our NFT artwork. We have a
                collection of 10000 distinctive and exquisite NFT artworks of
                Cheetahs, and each of these artworks is worth possessing. Not
                only will you acquire an excellent piece of art, but you will
                also do a good deed and be a part of animal welfare. When you
                buy our Cheetah NFT artwork, a certain amount will go towards
                animal welfare. Each and every cheetah is unique and is created
                in an established way, having more than 150 traits. These NFTs
                are digital hand-drawn avatars with the help of AI and will
                exist forever on the Ethereum blockchain.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      {/* <Box
        backgroundImage={`${process.env.PUBLIC_URL}/fetaturebg.jpg`}
        id="features"
        className="jumptarget"
      >
        ksasdk
      </Box> */}
      <Box py="50px" bg="black">
        <Slider {...settings}>
          {images.map(img => (
            <Box className="marquee-item">
              <Image w="150px" key={img} src={`${PUBLIC_URL}/${img + 1}.jpg`} />
            </Box>
          ))}
        </Slider>
        <Slider {...reverse}>
          {images.map(img => (
            <Box className="marquee-item">
              <Image w="150px" key={img} src={`${PUBLIC_URL}/${img + 1}.jpg`} />
            </Box>
          ))}
        </Slider>
      </Box>

      <Box
        maxW="1140px"
        mx="auto"
        py="80px"
        alignItems="center"
        justifyContent="center"
        bg="white"
      >
        <Heading mb="20px" fontSize="60px" textAlign="center" color="black">
          Rarity
        </Heading>
        <Text mb="50px" fontSize="20px" textAlign="center" color="black">
          The Cheetah Gang is one of its kind. We are different and unique. The
          rarity of our NFT is that we have used 150
          <br /> traits in our Cheetah artwork. Check below to see the
          distinctive qualities of our artwork.
        </Text>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
        >
          <Grid w="35%" templateColumns="repeat(2, 1fr)" gap={6}>
            <Image src={`${PUBLIC_URL}/01.jpg`} />
            <Image src={`${PUBLIC_URL}/02.jpg`} />
            <Image src={`${PUBLIC_URL}/03.jpg`} />
            <Image src={`${PUBLIC_URL}/04.jpg`} />
          </Grid>
          <Box mr={{ base: '0', md: '20px' }} my={{ base: '20px', md: '0px' }}>
            <Image src={`${PUBLIC_URL}/09.jpg`} />
          </Box>
          <Grid w="35%" templateColumns="repeat(2, 1fr)" gap={6}>
            <Image src={`${PUBLIC_URL}/05.jpg`} />
            <Image src={`${PUBLIC_URL}/06.jpg`} />
            <Image src={`${PUBLIC_URL}/07.jpg`} />
            <Image src={`${PUBLIC_URL}/08.jpg`} />
          </Grid>
        </Flex>
        <Flex
          borderWidth="1px"
          borderColor="yellow"
          borderRadius="20px"
          mt="50px"
          className="rarity-info"
          py="1.5rem"
          justifyContent="center"
          flexDirection={{ base: 'column', md: 'row' }}
          mx={{ base: '20px', md: 0 }}
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: '1px', md: '0' }}
            borderRightColor="#ddd"
            px={{ base: '0px', md: '22px' }}
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              10000
            </Heading>
            <Text fontWeight="bold">Cheetah</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: '1px', md: '0' }}
            borderRightColor="#ddd"
            px="22px"
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              8
            </Heading>
            <Text fontWeight="bold">Earring</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: '1px', md: '0' }}
            borderRightColor="#ddd"
            px="22px"
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              18
            </Heading>
            <Text fontWeight="bold">Background</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: '1px', md: '0' }}
            borderRightColor="#ddd"
            px="22px"
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              46
            </Heading>
            <Text fontWeight="bold">Clothes</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: '1px', md: '0' }}
            borderRightColor="#ddd"
            px="22px"
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              15
            </Heading>
            <Text fontWeight="bold">Body</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: 0, md: '1px' }}
            borderRightColor="#ddd"
            px="22px"
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              33
            </Heading>
            <Text fontWeight="bold">Eyes / Eyewear</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: '1px', md: '0' }}
            borderRightColor="#ddd"
            px="22px"
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              24
            </Heading>
            <Text fontWeight="bold">Eyes / Eyewear</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: '1px', md: '0' }}
            borderRightColor="#ddd"
            px="22px"
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              25
            </Heading>
            <Text fontWeight="bold">Mouth</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: '1px', md: '0' }}
            borderRightColor="#ddd"
            px="22px"
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              4
            </Heading>
            <Text fontWeight="bold">Mask</Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center" px="18px">
            <Heading fontSize="26px" color="yellow">
              5
            </Heading>
            <Text fontWeight="bold">Nose</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
