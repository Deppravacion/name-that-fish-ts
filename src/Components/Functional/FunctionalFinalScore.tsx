import "./styles/final-score.css";
import { TComponentProps } from "../../allTypes";

export const FunctionalFinalScore: React.FunctionComponent<TComponentProps> = ({fishState: {correctScore, incorrectScore}}:TComponentProps) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctScore}</p>
      <hr />
      <p>{(correctScore + incorrectScore)}</p>
    </div>
  </div>  
);
