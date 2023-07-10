import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";
import { TComponentProps } from "../../allTypes";

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

type TCompExtended = {
  handleScore: (fishState: {
    correctScore: number;
    incorrectScore: number;
  }) => void;
} & TComponentProps

export const FunctionalGameBoard: React.FunctionComponent<TCompExtended> = ({fishState, handleScore} ) => {
  const [input, setInput] = useState('') 
  const { correctScore, incorrectScore } = fishState
  const nextFishToName = initialFishes[correctScore + incorrectScore];
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={(e) => {
        e.preventDefault()          
        if (input == nextFishToName.name) {
          handleScore({
            correctScore: (correctScore + 1),
            incorrectScore: incorrectScore,
          })
        } else {
          handleScore({
            correctScore: correctScore,
            incorrectScore:  (incorrectScore + 1), 
          })            
        }
        setInput('')

      }}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input 
          type="text" 
          name="fish-guess"  
          onChange={(e) =>  {
            setInput(e.target.value)}            
          } 
          value={input}
          />
        <input type="submit" />
      </form>
    </div>
  );
}
