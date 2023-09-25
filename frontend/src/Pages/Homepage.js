import React from "react";
import Signup from "../components/Authentication/Signup";
import Signin from "../components/Authentication/Signin";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  Box,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      history.push("/chats");
    }
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        backgroundColor="#333"
        color="white"
      >
        <Text fontSize="4xl" fontFamily="Space Mono">
          Cookie Chat
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        backgroundColor="#333"
        color="white"
      >
        <Tabs
          isFitted
          variant="soft-rounded"
          colorScheme="gray"
          fontFamily="Space Mono"
        >
          <TabList mb="1em">
            <Tab>Sign In</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Signin />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
export default Homepage;
