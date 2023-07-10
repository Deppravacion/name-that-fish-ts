import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { TClassProps } from "../../allTypes";

type TCompExtended = {
  handleCount: (name: keyof TClassProps['state'], value: number) => void;
} & Pick<TClassProps, 'state'>;

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export class ClassGameBoard extends Component<TCompExtended> {
  state={
    input: '',
  }

  render() {
    const { incorrectCount, correctCount } = this.props.state    
    const nextFishToName = initialFishes[incorrectCount + correctCount];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form 
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault()
            if (this.state.input == nextFishToName.name) {
              this.props.handleCount('correctCount', (correctCount + 1))
            } else {
              this.props.handleCount('incorrectCount', (incorrectCount + 1))
            }
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
