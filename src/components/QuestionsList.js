import React from "react";
import Question from "./Question"

const QuestionList = props => {
  return (
    <>
      <Question questions={props.questions} />
    </>
  );
};

export default QuestionList;
