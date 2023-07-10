import { Component } from "react";
import { TClassProps } from "../../allTypes";

export class ClassFinalScore extends Component<TClassProps> {
  render() {
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{this.props.state.correctCount}</p>
          <hr />
          <p>{this.props.state.correctCount + this.props.state.incorrectCount}</p>
        </div>
      </div>
    );
  }
}
