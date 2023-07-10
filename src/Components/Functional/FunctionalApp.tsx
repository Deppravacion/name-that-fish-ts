import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";

import { useState } from "react";


export type TComponentProps = {
  fishState: {
    correctScore: number;
    incorrectScore: number;
  }
}


export function FunctionalApp() {
  const [ fishState, setFishState] = useState({
    correctScore: 0,
    incorrectScore: 0,
  })


  const total: number = fishState.correctScore + fishState.incorrectScore


  return (
    <>
      { total < 4 && 
        < FunctionalScoreBoard 
        fishState={fishState}
        />
      }
      { total < 4 && 
        < FunctionalGameBoard 
        handleScore={(fishState) => {
          setFishState(fishState)
        }}
        />
        
      }
      {total == 4 && 
        <FunctionalFinalScore 

        />}
    </>
  );
}


