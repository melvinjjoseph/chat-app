import React from 'react';

import { Box, Heading, Center } from '@chakra-ui/react';

function Footer() {
  return (
    <Box padding={8}>
      <Center>
        <Heading size="sm">Built with Go and Redis</Heading>
      </Center>
      {/* <Center>
        <Heading fontStyle={'italic'} size="sm" paddingTop={2}>

          <a href="https://github.com/melvinjjoseph/chat-app" >
            View Source Code
          </a>
        </Heading>
      </Center> */}
    </Box>
  );
}

export default Footer;
