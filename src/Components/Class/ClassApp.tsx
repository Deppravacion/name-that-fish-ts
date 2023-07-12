import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { TClassProps } from "../../types";
import { initialFishes } from './fishData'

export class ClassApp extends Component<TClassProps> {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  changeState = (key: keyof TClassProps['state'], state: number): void => {
    this.setState((prev) => ({
      ...prev,
      [key]: state
    }))
  }
  
  handleCount = (fishName: string) => {
    const keyToUpdate = fishName === initialFishes[(this.state.correctCount + this.state.incorrectCount)].name 
      ? `correctCount` 
      : `incorrectCount`
    this.changeState(keyToUpdate, this.state[keyToUpdate] + 1)
  }
  
  render() {
    const total: number = this.state.correctCount + this.state.incorrectCount   
    const answersLeft = initialFishes
      .slice(total, initialFishes.length)
      .map((fish) => fish.name)

    return (
      <>
        <>
        { total < 4 &&
          <ClassScoreBoard 
          state={this.state}
          answersLeft={answersLeft}
          />
        }
        { total < 4 &&
          <ClassGameBoard
          // state={this.state}
          fishData={initialFishes[this.state.correctCount + this.state.incorrectCount]}
          handleCount={this.handleCount}
          />
        }
        </>
        {total == 4 && 
          <ClassFinalScore 
            state={this.state}
          />
        }
      </>
    );
    
  }
}
