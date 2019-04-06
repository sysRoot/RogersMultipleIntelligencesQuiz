import React from "react";
import ScoreMechanism from "./ScoreMechanism";

const Question = props => {
  return (
    <>
      {props.questions.map((cur, idx) => {
        return (
          <tbody key={cur.id}>
            <tr>
              <th>
                {cur.id}.) {cur.question}
              </th>
              <td>
                <p>{cur.type}</p>
              </td>
              <ScoreMechanism score={cur.score} type={cur.type} id={cur.id} changeHandler={props.changeHandler} />
            </tr>
          </tbody>
        );
      })}
    </>
  );
};

export default Question;
