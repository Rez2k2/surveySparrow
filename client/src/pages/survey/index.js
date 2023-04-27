import { Button, Center, Box, VStack, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Quiz from "./Quiz";
import * as Icons from "@iconscout/react-unicons";

const filterCriteria = {
  multiple_answers: false,
};

let qnData = {
  data: [
    {
      id: 7314206,
      rtxt: "What are the top reasons that made you choose us?",
      type: "MultiChoicePicture",
      multiple_answers: false,
      is_required: true,
      properties: {
        clone: {
          id: 619409,
        },
        data: {
          image_fit: true,
        },
      },
      parent_question_id: null,
      position: "0.000000000000",
      created_at: "2023-04-26T06:51:45.710Z",
      updated_at: "2023-04-26T06:51:45.710Z",
      section: {
        position: "0.000000000000000",
      },
      annotations: [],
      scale_points: [],
      choices: [
        {
          id: 18691387,
          txt: "Other",
          img: "",
          position: "4.000000000000",
          question_id: 7314206,
          scale_point_id: null,
        },
        {
          id: 18691386,
          txt: "Features",
          img: "https://static.surveysparrow.com/application/production/1582889046162__04b349b46d09cb0fa436bc3418e7fed07fa288f80ce6acac0d01cf2c5638__feature.png",
          position: "0.000000000000",
          question_id: 7314206,
          scale_point_id: null,
        },
        {
          id: 18691385,
          txt: "Quality of support",
          img: "https://static.surveysparrow.com/application/production/1582889069477__54b3d3aa50d2826cf4eec8895e08f5abf8a1cf0431dd6eb3aef147ef9eab__quality.png",
          position: "3.000000000000",
          question_id: 7314206,
          scale_point_id: null,
        },
        {
          id: 18691384,
          txt: "Ease of use",
          img: "https://static.surveysparrow.com/application/production/1582889062390__c64940f47e52177072c42dee06bc83c4e1c94e4c4961009b683639af2ae6__ease-of-use.png",
          position: "2.000000000000",
          question_id: 7314206,
          scale_point_id: null,
        },
        {
          id: 18691383,
          txt: "Value for money paid",
          img: "https://static.surveysparrow.com/application/production/1582889054065__c9e14dd60ec6fd32951dc97d548ea72ef0d3d06abc528576bd4b62d08ae0__price.png",
          position: "1.000000000000",
          question_id: 7314206,
          scale_point_id: null,
        },
      ],
      tags: [],
    },
    {
      id: 7314208,
      rtxt: "How would you rate the quality of our product?",
      type: "Rating",
      multiple_answers: false,
      is_required: true,
      properties: {
        clone: {
          id: 619411,
        },
        data: {
          rating_scale: 5,
        },
      },
      parent_question_id: null,
      position: "0.000000000000",
      created_at: "2023-04-26T06:51:45.710Z",
      updated_at: "2023-04-26T06:51:45.710Z",
      section: {
        position: "1.000000000000000",
      },
      annotations: [],
      scale_points: [],
      choices: [],
      tags: [],
    },
    {
      id: 7314210,
      rtxt: "How satisfied are you with the competency of our customer support?",
      type: "OpinionScale",
      multiple_answers: false,
      is_required: true,
      properties: {
        data: {
          min: "Not at all satisfied",
          max: "Extremely satisfied",
          step: 10,
          start: 0,
          mid: "",
        },
        clone: {
          id: 619413,
        },
      },
      parent_question_id: null,
      position: "0.000000000000",
      created_at: "2023-04-26T06:51:45.710Z",
      updated_at: "2023-04-26T06:51:45.710Z",
      section: {
        position: "2.000000000000000",
      },
      annotations: [],
      scale_points: [],
      choices: [],
      tags: [],
    },
    {
      id: 7314211,
      rtxt: "Off the top of your head, what are the 3 words that you'll use to describe MediaPandaa?",
      type: "TextInput",
      multiple_answers: false,
      is_required: true,
      properties: {
        data: {
          type: "MULTI_LINE",
          analyze_sentiment: false,
        },
        clone: {
          id: 619414,
        },
      },
      parent_question_id: null,
      position: "0.000000000000",
      created_at: "2023-04-26T06:51:45.710Z",
      updated_at: "2023-04-26T06:51:45.710Z",
      section: {
        position: "3.000000000000000",
      },
      annotations: [],
      scale_points: [],
      choices: [],
      tags: [],
    },
    {
      id: 7314209,
      rtxt: "On a scale of 0-10, how likely are you to recommend MediaPandaa to a friend or colleague?",
      type: "OpinionScale",
      multiple_answers: false,
      is_required: true,
      properties: {
        data: {
          min: "builder.opinion_scale.min",
          max: "builder.opinion_scale.max",
          step: 10,
          start: 0,
          mid: "",
        },
        clone: {
          id: 619412,
        },
      },
      parent_question_id: null,
      position: "0.000000000000",
      created_at: "2023-04-26T06:51:45.710Z",
      updated_at: "2023-04-26T06:51:45.710Z",
      section: {
        position: "4.000000000000000",
      },
      annotations: [],
      scale_points: [],
      choices: [],
      tags: [],
    },
    {
      id: 7314212,
      rtxt: "What prompted you to score an $Question_7314209?",
      type: "TextInput",
      multiple_answers: false,
      is_required: true,
      properties: {
        data: {
          type: "MULTI_LINE",
          analyze_sentiment: false,
        },
        clone: {
          id: 619415,
        },
      },
      parent_question_id: null,
      position: "0.000000000000",
      created_at: "2023-04-26T06:51:45.710Z",
      updated_at: "2023-04-26T06:51:45.768Z",
      section: {
        position: "5.000000000000000",
      },
      annotations: [],
      scale_points: [],
      choices: [],
      tags: [],
    },
    {
      id: 7314207,
      rtxt: "What prompted you to score a $Question_7314209?",
      type: "TextInput",
      multiple_answers: false,
      is_required: true,
      properties: {
        data: {
          type: "MULTI_LINE",
          analyze_sentiment: false,
        },
        clone: {
          id: 619410,
        },
      },
      parent_question_id: null,
      position: "1.000000000000",
      created_at: "2023-04-26T06:51:45.710Z",
      updated_at: "2023-04-26T06:51:45.760Z",
      section: {
        position: "6.000000000000000",
      },
      annotations: [],
      scale_points: [],
      choices: [],
      tags: [],
    },
  ],
  has_next_page: false,
};

const getQns = async (setQnData) => {
  console.log(process.env.NEXT_PUBLIC_API_KEY);
  const res = await fetch(
    "https://api.surveysparrow.com/v3/questions?survey_id=436862",

    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );
  const question = await res.json();
  await console.log(question);
  await setQnData(question);
};

export default function Survey() {
  useEffect(() => {
    // getQns((questions)=>{qnData=questions;setCurrentQn(0)});
    setCurrentQn(0);
  }, []);

  const [currentQn, setCurrentQn] = useState(undefined);

  // var msg = "Danny you lying piece of shit!";
  // const speechMe = (msg1) => {
  //   const utterance = new SpeechSynthesisUtterance(msg1);
  //   speechSynthesis.speak(utterance);
  // };
  // var ques = "This is the first question , and its read aloud";
  // const handleClick = (e) => {
  //   speechMe(e.currentTarget.getAttribute("data"));
  // };
  // return (
  //   <div>
  //     <form>
  //       <p>{ques}</p>
  //       <input type="text" placeholder="answer here" />
  //       <Button data={ques} onClick={handleClick}>
  //         Read
  //       </Button>
  //     </form>
  //     <Button data={msg} onClick={handleClick}>
  //       Danny sound
  //     </Button>
  //   </div>
  // );
  const navIconWidth = "50px";
  return (
    <HStack height={"100vh"} width="100vw">
      {currentQn === 0 ? (
        <Box width="100%" height="100%"></Box>
      ) : (
        <Center
          as="button"
          _hover={{
            svg: {
              width: "4em",
              height: "auto",
            },
          }}
          _hover={{
            svg: {
              width: "4em",
              height: "auto",
            },
          }}
          width="100%"
          height="100%"
          sx={{
            svg: {
              width: navIconWidth,
              height: navIconWidth,
              transition: "all 0.2s ease-in-out",
            },
          }}
          onClick={() => setCurrentQn(currentQn - 1)}
        >
          <Icons.UilArrowLeft />
        </Center>
      )}
      <VStack>
        {currentQn != undefined ? (
          <Quiz index={currentQn} qnData={qnData.data[currentQn]} />
        ) : (
          ""
        )}
      </VStack>
      {currentQn != undefined && currentQn == qnData.data.length - 1 ? (
        <Center
          as="button"
          _hover={{
            svg: {
              width: "4em",
              height: "auto",
            },
          }}
          sx={{
            svg: {
              width: navIconWidth,
              height: navIconWidth,
              transition: "all 0.2s ease-in-out",
            },
          }}
          width="100%"
          height="100%"
        >
          <Icons.UilCheck />
        </Center>
      ) : (
        <Center
          sx={{
            svg: {
              width: navIconWidth,
              height: navIconWidth,
              transition: "all 0.2s ease-in-out",
            },
          }}
          as="button"
          onClick={() => setCurrentQn(currentQn + 1)}
          width="100%"
          height="100%"
          _hover={{
            svg: {
              width: "4em",
              height: "auto",
            },
          }}
        >
          <Icons.UilArrowRight />
        </Center>
      )}
    </HStack>
  );
}
