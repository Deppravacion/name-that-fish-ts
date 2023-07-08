import "./styles/score-board.css";
import { TComponentProps } from "./FunctionalApp";
//  Where the score is presented


export const  FunctionalScoreBoard: React.FunctionComponent<TComponentProps> =  (props:TComponentProps) => {
  const incorrectCount = props.incorrectCount;
  const correctCount = props.correctScore;
  const answersLeft = ["trout", "salmon", "tuna", "shark"];
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount} </div>
    </div>
  );
}
