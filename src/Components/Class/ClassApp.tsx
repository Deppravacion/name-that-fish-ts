import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export type TClassProps = {
  state: {
    correctCount: number;
    incorrectCount: number;
  }
}

export class ClassApp extends Component<{}, TClassProps['state']> {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  changeState = (name: keyof TClassProps['state'], state: number): void => {
    this.setState((prev) => ({
      ...prev,
      [name]: state
    }))
  }

  render() {
    const total: number = this.state.correctCount + this.state.incorrectCount
    return (
      <>
        <>
        { total < 4 &&
          <ClassScoreBoard 
          state={this.state}
          />
        }
        { total < 4 &&
          <ClassGameBoard
          state={this.state}
          handleCount={this.changeState}
          />
        }
        </>
        {total == 4 && 
          <ClassFinalScore 
            state={this.state}
            />}
      </>
    );
    
  }
}
