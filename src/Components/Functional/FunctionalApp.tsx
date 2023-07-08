import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";

import { useState } from "react";


export type TComponentProps = {
  setCurrentFishIndex: React.Dispatch<React.SetStateAction<number>>;
  setCorrectScore: React.Dispatch<React.SetStateAction<number>>;
  setIncorrectScore: React.Dispatch<React.SetStateAction<number>>;
  setUserGuess: React.Dispatch<React.SetStateAction<string>>;
  currentFishIndex: number;
  correctScore: number;
  incorrectScore: number;
  userGuess: string;
}





export function FunctionalApp() {

  const [currentFishIndex, setCurrentFishIndex] = useState(0)
  const [correctScore, setCorrectScore] = useState(0)
  const [ incorrectScore, setIncorrectScore] = useState(0)
  const [userGuess, setUserGuess] = useState('')
  const total: number = correctScore + incorrectScore


  return (
    <>
      { total < 4 && 
        < FunctionalScoreBoard 
          correctScore={correctScore}
          incorrectScore={incorrectScore}
        />
      }
      { total < 4 && 
        < FunctionalGameBoard 
          userGuess={userGuess}
          setUserGuess={setUserGuess}
        />
        
      }
      {total == 4 && 
        <FunctionalFinalScore 

        />}
    </>
  );
}


