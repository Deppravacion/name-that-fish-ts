import { Component } from "react";
import "./styles/score-board.css";
import { TClassProps } from "./ClassApp";

const answersLeft = ["trout", "salmon", "tuna", "shark"];
export class ClassScoreBoard extends Component<TClassProps> {
  render() {
    console.log(this.props);
    
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {this.props.state.incorrectCount} </div>
        <div id="choices-left">
          {answersLeft.slice((this.props.state.correctCount + this.props.state.incorrectCount), answersLeft.length).map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {this.props.state.correctCount}</div> 
      </div>
    );
  }
}
