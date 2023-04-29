import { Box } from "@chakra-ui/react";
import * as Icons from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useState } from "react";

export default function MicBtn({ recognition }) {
  let mediaRecorder;
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then((stream) => {
      // Create a new MediaRecorder instance
      mediaRecorder = new MediaRecorder(stream);
      const audioChunks = [];

      // When the MediaRecorder receives data, add it to audioChunks
      mediaRecorder.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
      });

      // When the recording stops, send the audio data to the API
      mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks);
        const formData = new FormData();
        formData.append("audio", audioBlob, "recording.wav");

        fetch("http://127.0.0.1:5000", {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            console.log("Response from API:", result);
          })
          .catch((error) => {
            console.error("Error sending audio to API:", error);
          });
      });
    });

  recognition.onspeechend = () => {
    mediaRecorder.stop();
    setListening(false);
  };

  recognition.onspeechstart = () => {
    mediaRecorder.start();
  };
  const [listening, setListening] = useState(false);

  return (
    <Box
      animate={{
        filter: listening
          ? "drop-shadow(0px 0px 14px teal)"
          : "drop-shadow(0px 0px 0px teal)",
      }}
      onClick={() => {
        listening ? recognition.stop() : recognition.start();
        setListening(!listening);
      }}
      as={motion.button}
      border="1px solid teal"
      borderRadius="50%"
      width="fit-content"
      padding="25"
      sx={{
        "--bg": listening ? "teal" : "white",
        "--fill": listening ? "white" : "teal",
        bgColor: "var(--bg)",
        svg: {
          fill: "var(--fill)",
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
  );
}
