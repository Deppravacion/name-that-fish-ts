import { Component } from "react";
import "./styles/game-board.css";
import { TSFish } from "../../types";

type TCompExtended = {
  fishData: TSFish;
  handleCount: (fishName: string) => void;
}

export class ClassGameBoard extends Component<TCompExtended> {
  state={
    input: '',
  }

  render() {
    const fishData = this.props.fishData 
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fishData.url} alt={fishData.name} />
        </div>
        <form 
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault()
            this.props.handleCount(this.state.input)
            this.setState({ input: ''})
          }}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input 
            type="text" 
            name="fish-guess"
            value={this.state.input}
            onChange={(e) => {
              this.setState({ input: e.target.value})
            }}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
