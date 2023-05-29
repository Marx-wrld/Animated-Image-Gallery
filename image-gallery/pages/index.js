import React, { useState } from 'react';
import Head from 'next/head';
import { Box, Container, Text } from "@chakra-ui/react";
import { getCuratedPhotos, getQueryPhotos } from '@/lib/api';
import Image from 'next/image';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { Input, IconButton, InputRightElement, InputGroup, useToast } from '@chakra-ui/react';
import SearchIcon from "@chakra-ui/icons";
import Link from 'next/link';

export default function Home({ data }) { //getCuratedPhotos fetches images from pexels and stores them in a data variable This data is passed a props to the default function

  const [photos, setPhotos] = useState(data); //we'll store the data from pexels API in our state named photos

  const [query, setQuery] = useState("");

  const toast = useToast();

  const handleFormSubmit = async (e) => { 
    await e.preventDefault();
    
    if (query == "" ){
      toast({
        title: "Error",
        description: "Empty Search",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top"
      });
    } 
    else{
    
    const res = await getQueryPhotos(query); //fetches images based on a user's query
    //It passes the getQueryPhotos function and the data returned from the function overrides the previous value in the photos variable using setPhotos(res)
    await setPhotos(res); 
    await setQuery("");
    }
  };

  return (
    <div>
      <Head>
        <title>Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box overflow="hidden" bg="purple.300" minH="100vh">
        <Container>
          <Text
            color='pink.800'
            fontWeight="bold"
            mb="1rem"
            textAlign='center'
            textDecoration='underline'
            fontSize={['4xl', '4xl', '5xl', '5xl']} //{} tells the js parser to interpret the expresion within as javascript.
          >
            Image Gallery
          </Text>
          <form onSubmit={handleFormSubmit} action="">
          <InputGroup pb="1rem">
            <Input placeholder='Search for Images' variant="ghost" />
            <InputRightElement children={<IconButton aria-label='Search' icon={<SearchIcon />} //Adds an element to the right of the output
            onClick={handleFormSubmit}
            bg="pink.400" color="white"/>
          } 
            />
          </InputGroup>
          </form>
        </Container>
        <Wrap px='1rem' spacing={4}>
          {
            photos.map((pic) => ( //to display images we'll map over the photos array and pass the src.original in the src attribute of the img element.


            //pic.id gives each image a unique id, overflow ensures the image doesn't overflow the wrapItem, _hover changes the box shadow when you hover over the image.
              <WrapItem key={pic.id} boxShadow="base" rounded="20px" overflow="hidden" bg="white" lineHeight="0"
                _hover={{ boxShadow: "dark-lg" }}>
                  
                <Link href={`/photos/$pic.id`}>
                <a>
                <Image src={pic.src.portrait} width={600} height={400} alt={pic.url} /> 
                {/*Next.js version 10 comes with inbuilt support fro image optimization which reduces the image size to webP */}
                </a>
                </Link>

              </WrapItem>
            ))
          }
        </Wrap>
      </Box>
    </div>
  );
}

export async function getServerSideProps() { //using getServerSideProps function available in Next.js, which fetches data on each request and the getCuratedPhotos function to fetch data from pexels API and inject it to our page
  const data = await getCuratedPhotos();
  return {
    props: {
      data
    },
  };
}