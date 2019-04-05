import React, { Component } from "react";
import "./App.css";
import questions from "./questions.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rMIQuests: []
    };
  }
  componentDidMount() {
    console.log(questions.questions)
    for (let question in questions.questions) {
      this.setState(
        prevState => {
          return {
            rMIQuests: prevState.rMIQuests.concat(question)
          }
        }
      );
    }
    console.log(`Data mounting test`, this.state.rMIQuests);
  }

  render() {
    return <div>{}</div>;
  }
}

export default App;
