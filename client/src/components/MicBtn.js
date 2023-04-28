import { Box } from "@chakra-ui/react";
import * as Icons from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useState } from "react";

export default function MicBtn({ recognition }) {
  const [listening, setListening] = useState(false);

  recognition.onspeechend = () => {
    setListening(false);
  };
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
