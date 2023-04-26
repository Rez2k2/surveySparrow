import Head from "next/head";
import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import sponsor from "./sponsor.png";
import * as Icons from "@iconscout/react-unicons";
import { useState } from "react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

const validateDetails = (e, name, email) => {
  if (!(name && email.includes("@"))) {
    e.preventDefault();
    return;
  }
};

export default function Home({ details }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
            Hey, you
          </Heading>
          <Input
            paddingLeft={2}
            variant="flushed"
            placeholder="What's your name?"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            paddingLeft={2}
            variant="flushed"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Link href={{ pathname: "./survey" }} passHref legacyBehavior>
            <Button
              as="a"
              onClick={(e) => validateDetails(e, name, email)}
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
              {/* <Link
              onClick={(e) => {
                console.log(name, email);
                if (!(name && email)) {
                  e.preventDefault();
                  return;
                }
                setEmail("");
                setName("");
              }}
              href="./survey"
            > */}
              Start Survey
              {/* </Link> */}
            </Button>
          </Link>
        </Stack>
      </Center>
    </>
  );
}
