import Head from 'next/head';
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box overflow="hidden" bg="purple.100" minH="100vh">

      </Box>
    </div>
  );
}
