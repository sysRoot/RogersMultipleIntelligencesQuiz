import React, { Component } from "react";
import QuestionsList from "./components/QuestionsList"
import questions from "./questions.js";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import "_variables.sass";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rMIQuests: [],
    };
  }
  componentDidMount() {
    this.setState({
      rMIQuests: questions,
    });
  }

  render() {
    return (
      <div>
        <QuestionsList questions={this.state.rMIQuests} />
        <p>Something to look at{console.log(this.state.rMIQuests, `isThisStateful`)}</p>
      </div>
    );
  }
}

export default App;
