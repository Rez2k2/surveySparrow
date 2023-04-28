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
import { useEffect, useRef, useState } from "react";
import MicBtn from "./MicBtn";
import stringSimilarity from "string-similarity";
import styles from "./quiz.module.css";
import ModTextArea from "./ModTextArea";

const speechMe = (msg) => {
  const utterance = new SpeechSynthesisUtterance(msg);
  speechSynthesis.speak(utterance);
};

export default function Quiz({ qnData, index }) {
  const [clickedElement, setClickedElement] = useState(undefined);
  console.log(clickedElement);
  const [grammar, setGrammar] = useState(undefined);
  const [choices, setChoices] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    speechMe(qnData.rtxt);
    if (qnData.type != "TextInput") {
      let words = [];
      let choices = [];
      qnData.choices.forEach((item) => {
        choices.push(item.txt);
        words = words.concat(item.txt.split(" "));
      });
      setChoices(choices);
      setGrammar(
        "#JSGF V1.0; grammar words; public <word> = macha | " +
          words.join(" | ") +
          " ;"
      );
    } else {
      setGrammar(undefined);
    }
  }, [index]);

  var speech = null;
  speech = true;
  window.speechRecognition =
    window.webkitSpeechRecognition || window.speechRecognition;
  const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
  const recognition = new speechRecognition();

  if (grammar) {
    var speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
  }

  recognition.interimResults = true;
  if (qnData.type === "TextInput") {
    recognition.continuous = true;
  } else {
    recognition.continuous = false;
  }
  recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => {
        if (qnData.type != "TextInput") {
          return result.transcript.trim().replace(/\.$/, "");
        } else {
          return result.transcript;
        }
      });

    console.log(transcript);

    if (qnData.type != "TextInput") {
      let max1 = [-1, -1];
      let max2 = [-1, -1];
      for (let i = 0; i < choices.length; i++) {
        const crntRating = Math.floor(
          stringSimilarity.compareTwoStrings(transcript[0], choices[i]) * 10
        );
        console.log(crntRating);
        if (crntRating > max1[1]) {
          max2 = [...max1];
          max1 = [i, crntRating];
        } else if (crntRating > max2[1] && crntRating <= max1[1]) {
          max2 = [i, crntRating];
        }
      }

      if (max1[1] == max2[1]) {
        console.log("Not sure");
      } else {
        if (max1[1] > 4) {
          setClickedElement(max1[0]);
        }
        console.log("came here");
      }
    } else {
      setValue(transcript.join(" "));
    }
  });

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
          <ModTextArea value={value} setValue={setValue} />
        ) : (
          qnData.choices.map((item, index) => {
            return (
              <Button
                onClick={() => setClickedElement(index)}
                className={clickedElement === index ? styles.active : ""}
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
        <MicBtn recognition={recognition} />
      </Center>
    </Box>
  );
}
