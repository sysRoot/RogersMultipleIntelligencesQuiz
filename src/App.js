import React, { Component } from "react";
import QuestionsList from "./components/QuestionsList"
import questions from "./questions.js";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import "_variables.sass";

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      rMIQuests: [],
      linguistic: [],
      musical: [],
      logicMath: [],
      spatial: [],
      bodilyKinesthetic: [],
      intrapersonal: [],
      interpersonal: [],
      naturalist: [],
      selectedOpt: "3"
    };
  }

  componentDidMount() {
    this.setState({
      rMIQuests: questions,
    });
  }

  changeHandler = (event) => {
    if (event) {
      console.log(`win`, event.target.id)
    }
    this.setState({
          selectedOpt: event.target.value
    })

    
  }

  render() {
    return (
      <div>
        <QuestionsList questions={this.state.rMIQuests} changeHandler={this.changeHandler} selectedOpt={this.state.selectedOpt} />
        <p>Something to look at</p>
      </div>
    );
  }
}

export default App;
