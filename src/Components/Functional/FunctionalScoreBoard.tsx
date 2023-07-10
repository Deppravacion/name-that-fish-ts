import "./styles/score-board.css";
import { TComponentProps } from "./FunctionalApp";
//  Where the score is presented


export const  FunctionalScoreBoard: React.FunctionComponent<TComponentProps> =  ({fishState: {correctScore, incorrectScore}}:TComponentProps) => {
console.log(correctScore);

  const answersLeft = ["trout", "salmon", "tuna", "shark"];
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectScore}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctScore} </div>
    </div>
  );
}
