import React, { Component } from "react";
import QuestionsList from "./components/QuestionsList";
import questions from "./questions.js";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "_variables.sass";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rMIQuests: [],
      linguistic: [0],
      musical: [0],
      logicMath: [0],
      spatial: [0],
      bodilyKinesthetic: [0],
      intrapersonal: [0],
      interpersonal: [0],
      naturalist: [0]
    };
  }

  componentDidMount() {
    this.setState({
      rMIQuests: questions
    });
  }

  changeHandler = event => {
    const idToMatch = parseInt(event.target.name);
    const value = parseInt(event.target.value);
    this.setState(prevState => {
      return {
        rMIQuests: prevState.rMIQuests.map(cur => {
          return idToMatch === cur.id
            ? {
                ...cur,
                score: value,
                radio: cur.radio.map((option, idx) =>
                  value === idx + 1 ? !option : false
                )
              }
            : cur;
        })
      };
    });
    this.setState(prevState => {
      return {
        linguistic: [
          prevState.rMIQuests
            .map(cur => (cur.type === "Linguistic" ? cur.score : 0))
            .reduce((acc, next) => acc + next, 0)
        ],
        musical: [
          prevState.rMIQuests
            .map(cur => (cur.type === "Musical" ? cur.score : 0))
            .reduce((acc, next) => acc + next)
        ],
        logicMath: [
          prevState.rMIQuests
            .map(cur => (cur.type === "Logic and Math" ? cur.score : 0))
            .reduce((acc, next) => acc + next)
        ],
        spatial: [
          prevState.rMIQuests
            .map(cur => (cur.type === "Spatial" ? cur.score : 0))
            .reduce((acc, next) => acc + next)
        ],
        bodilyKinesthetic: [
          prevState.rMIQuests
            .map(cur => (cur.type === "Bodily and Kinesthetic" ? cur.score : 0))
            .reduce((acc, next) => acc + next)
        ],
        intrapersonal: [
          prevState.rMIQuests
            .map(cur => (cur.type === "Intrapersonal" ? cur.score : 0))
            .reduce((acc, next) => acc + next)
        ],
        interpersonal: [
          prevState.rMIQuests
            .map(cur => (cur.type === "Interpersonal" ? cur.score : 0))
            .reduce((acc, next) => acc + next)
        ],
        naturalist: [
          prevState.rMIQuests
            .map(cur => (cur.type === "Naturalist" ? cur.score : 0))
            .reduce((acc, next) => acc + next)
        ]
      };
    });
    console.log(`win`, this.state.rMIQuests, this.state.linguistic);
  };

  // changeHandler = event => {

  //     this.setState({
  //       selectedOpt: event.target.value
  //     });
  //     console.log(`win`, event.target.name);
  //   }

  render() {
    return (
      <div>
        <QuestionsList
          questions={this.state.rMIQuests}
          changeHandler={this.changeHandler}
          selectedOpt={this.state.selectedOpt}
          lin={this.state.linguistic}
          mus={this.state.musical}
          lnm={this.state.logicMath}
          spa={this.state.spatial}
          bnk={this.state.bodilyKinesthetic}
          inr={this.state.intrapersonal}
          ine={this.state.interpersonal}
          nat={this.state.naturalist}
        />
      </div>
    );
  }
}

export default App;
