import "./styles/final-score.css";
import { TComponentProps } from "./FunctionalApp";



const correctCount = 0;
const totalCount = 0;
export const FunctionalFinalScore: React.FunctionComponent<TComponentProps> = ({correctCount, incorrectCount}: TComponentProps) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{+correctCount + +incorrectCount}</p>
    </div>
  </div>
);
