import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalApp() {
  const [ fishState, setFishState] = useState({
    correctScore: 0,
    incorrectScore: 0,
  })

  const total: number = fishState.correctScore + fishState.incorrectScore
  const answersLeft = initialFishes
    .slice(total, initialFishes.length)
    .map((fish) => fish.name)

  const handleScore = (fishName: string ) => {
    const arrValuesToAdd = fishName === initialFishes[total].name ? [1, 0 ] : [0, 1]
    setFishState({
      correctScore: fishState.correctScore + arrValuesToAdd[0],
      incorrectScore: fishState.incorrectScore + arrValuesToAdd[1]
    })


  }
  return (
    <>
      { total < 4 && 
        <>
          < FunctionalScoreBoard 
            fishState={fishState}
            answersLeft={answersLeft}
          />
          < FunctionalGameBoard 
            // fishState={fishState} //refakktor
            fishData={initialFishes[total]}
            handleScore={handleScore}
          />
        </>
      }
      {total == 4 && 
        <FunctionalFinalScore 
          fishState={fishState}

        />}
    </>
  );
}


