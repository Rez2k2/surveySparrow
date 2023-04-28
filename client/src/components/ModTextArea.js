import { Textarea } from "@chakra-ui/react";

export default function ModTextArea({ value, setValue }) {
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
