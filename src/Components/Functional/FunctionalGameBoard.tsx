import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";
import { TComponentProps } from "./FunctionalApp";



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





export const FunctionalGameBoard = ( ) => {

  const [input, setInput] = useState('') 
  const nextFishToName = initialFishes[0];
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={(e) => {
        e.preventDefault()
        

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
      <h1> input: {input} </h1>
    </div>
  );
}
