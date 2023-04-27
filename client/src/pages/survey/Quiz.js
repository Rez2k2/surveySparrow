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

export default function Quiz({ qnData, index }) {
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
    </Box>
  );
}
