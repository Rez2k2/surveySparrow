import { Textarea } from "@chakra-ui/react";
import { useEffect } from "react";

export default function ModTextArea({ index, value, setValue }) {
  useEffect(() => {
    setValue(JSON.parse(localStorage.getItem("responses"))[index] || "");
  }, [index]);
  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("responses"));
    response[index] = value;
    localStorage.setItem("responses", JSON.stringify(response));
  }, [value]);

  return (
    <Textarea
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      width="full"
      resize="none"
      colorScheme="teal"
      minHeight="250px"
      maxHeight="75%"
      border="1px solid teal"
    />
  );
}
