import { Button } from "@chakra-ui/react";

export default function Survey() {
  var msg = "Danny you lying piece of shit!";
  const speechMe = (msg1) => {
    const utterance = new SpeechSynthesisUtterance(msg1);
    speechSynthesis.speak(utterance);
  };
  var ques = "This is the first question , and its read aloud";
  const handleClick = (e) => {
    speechMe(e.currentTarget.getAttribute("data"));
  };
  return (
    <div>
      <form>
        <p>{ques}</p>
        <input type="text" placeholder="answer here" />
        <Button data={ques} onClick={handleClick}>
          Read
        </Button>
      </form>
      <Button data={msg} onClick={handleClick}>
        Danny sound
      </Button>
    </div>
  );
}
