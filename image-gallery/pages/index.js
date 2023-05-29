import Head from 'next/head';
import { Box, Container, Text } from "@chakra-ui/react";

export default function Home() {
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
        </Container>
      </Box>
    </div>
  );
}
