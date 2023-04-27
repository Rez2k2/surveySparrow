import {
  Center,
  Box,
  Button,
  HStack,
  VStack,
  Text,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import * as Icons from "@iconscout/react-unicons";
import { transform } from "framer-motion";
import { useEffect, useState } from "react";

const speechMe = (msg) => {
  const utterance = new SpeechSynthesisUtterance(msg);
  speechSynthesis.speak(utterance);
};

export default function Quiz({ qnData, index }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    speechMe(qnData.rtxt);
  }, [index]);
  var speech = null;
  speech = true;
  window.speechRecognition = window.webkitSpeechRecognition;
  const recognition = new speechRecognition();
  recognition.interimResults = true;
  recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript);
    console.log(transcript);
    console.log(on);
  });
  const transcribe = () => {
    if (on) {
      recognition.start();
    } else {
      recognition.stop();
    }
  };
  return (
    <Box position="relative" maxWidth="45%" minWidth="350px" marginX="20px">
      <Center
        alignItems="center"
        width="1.67em"
        height="1.67em"
        position="absolute"
        left="-40px"
        top="3px"
        border="1px solid black"
        borderRadius="50%"
      >
        <Text fontSize="lg">{index + 1}</Text>
      </Center>
      <Text fontSize="larger" marginBottom="5">
        {qnData.rtxt}
      </Text>
      <Button
        onClick={() => speechMe(qnData.rtxt)}
        position="absolute"
        right="-45px"
        top="-2px"
        variant="unstyled"
      >
        <Icons.UilVolume />
      </Button>
      <VStack>
        {qnData.type === "TextInput" ? (
          <Textarea
            width="full"
            resize="none"
            colorScheme="teal"
            minHeight="250px"
            maxHeight="75%"
            border="1px solid teal"
          />
        ) : (
          qnData.choices.map((item, index) => {
            return (
              <Button
                variant={"outline"}
                colorScheme="teal"
                width={"full"}
                justifyContent="flex-start"
                key={index}
              >
                {item.txt}
              </Button>
            );
          })
        )}
      </VStack>
      <Center position="fixed" bottom="40px" left="0" width="100%">
        <Box
          as="button"
          colorScheme="teal"
          border="1px solid teal"
          borderRadius="50%"
          width="fit-content"
          padding="25"
          sx={{
            svg: {
              fill: "teal",
            },
            "&:hover": {
              bgColor: "teal",
            },
            "&:hover svg": {
              fill: "white",
            },
          }}
        >
          <Icons.UilMicrophone />
        </Box>
      </Center>
    </Box>
  );
}
