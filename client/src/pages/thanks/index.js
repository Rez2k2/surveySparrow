import { Box, Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import sponsor from "../sponsor.png";
import * as Icons from "@iconscout/react-unicons";
import Link from "next/link";

export default function Thanks() {
  // thank you page using chakra ui
  return (
    <>
      <Box
        position="absolute"
        bottom="0"
        right="0"
        paddingRight="2"
        paddingBottom="1"
      >
        <Text fontSize="smaller" textAlign="center" marginBottom="2">
          Powered by
        </Text>
        <Image
          src={sponsor}
          alt="Picture of the sponsor"
          width="65"
          height="65"
          placeholder="blur"
        />
      </Box>
      <Center height="100vh">
        <Stack spacing={5} width="400px">
          <Heading paddingLeft={2} fontSize="2xl">
            Thank you for your response!
          </Heading>
          <Text fontSize="sm" paddingLeft={2}>
            Your response has been recorded.
          </Text>
          <Link href={{ pathname: "./" }} passHref legacyBehavior>
            <Button
              as="a"
              colorScheme="black"
              variant="ghost"
              rightIcon={<Icons.UilAngleRightB size="25" />}
              _hover={{
                outline: "1px solid gray",
              }}
              transition={"all 0.15s ease-out"}
              padding="4"
              width="fit-content"
              alignSelf="flex-end"
              position={"relative"}
              top={"10px"}
            >
              Submit another response
            </Button>
          </Link>
        </Stack>
      </Center>
    </>
  );
}
