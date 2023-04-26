import { Button } from "@chakra-ui/react";

export default function Survey() {
  const speechMe = () => {
    var msg = "Danny you lying piece of shit!";
    const utterance = new SpeechSynthesisUtterance(msg);
    speechSynthesis.speak(utterance);
  };
  return (
    <div>
      <Button onClick={speechMe}>Click me</Button>
    </div>
  );
}
