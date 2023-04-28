import { Button, Center, Box, VStack, HStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";

const apiKey = "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";
const apiUrl = "https://api.openai.com/v1/engine/davinci-codex/completions";

function ChartComponent() {
  const data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Emotional Analysis",
        data: [1.9, 2.75, 2.9, 0.8, 3.2],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
}

export default function Insights() {
  const [outputText, setOutputText] = useState("");
  const handleSubmit = () => {
    setOutputText(
      "Rephrase the question: Instead of asking 'When was the last time you cried?', consider rephrasing the question to be more general and less specific to crying. For example, you could ask 'When was the last time you experienced strong emotions?' Offer an alternative: If participants do not feel comfortable answering the question, offer an alternative or skip option. For example, you could provide an option for participants to select 'prefer not to answer' or 'not applicable' if they do not feel comfortable sharing their emotions around crying."
    );
  };
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     fetch({apiUrl}, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ input }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setResponse(data.response);
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   };
  return (
    <HStack>
      <Center width="50%" height="100vh">
        <VStack padding="13px">
          <Button onClick={handleSubmit}>Insights</Button>
          <Text>{outputText}</Text>
        </VStack>
      </Center>
      <Center width="50%" height="100vh" paddingRight="20px">
        <ChartComponent />
      </Center>
    </HStack>
  );
}
