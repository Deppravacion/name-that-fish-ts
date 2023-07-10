import "./styles/score-board.css";

type FunctionalScoreBoardProps = {
  fishState: {
    correctScore: number;
    incorrectScore: number;
  },
  answersLeft: string[];
}


export const  FunctionalScoreBoard: React.FunctionComponent<FunctionalScoreBoardProps> = ({ 
  fishState: {correctScore, incorrectScore}, 
  answersLeft
}:FunctionalScoreBoardProps) =>{
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
