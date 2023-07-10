import "./styles/game-board.css";
import { useState } from "react";
import { TSFish } from "../../types";


type TCompExtended = {
  fishData: TSFish
  handleScore: (fishName: string) => void;
}

export const FunctionalGameBoard: React.FunctionComponent<TCompExtended> = ({fishData, handleScore} ) => {
  const [input, setInput] = useState('') 
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
      </div>
      <form id="fish-guess-form" onSubmit={(e) => {
        e.preventDefault()          
        handleScore(input)
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
