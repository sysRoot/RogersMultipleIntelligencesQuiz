import React from "react";

const Question = props => {
  return (
    <>
      {props.questions.map((cur, idx) => {
        return (
          <>
          <p>{cur.id}</p>
          <p>{cur.question}</p>
          <p>{cur.type}</p>
          <p>{cur.score}</p>
          </>
          );
      })}
    </>
  );
};

export default Question;
