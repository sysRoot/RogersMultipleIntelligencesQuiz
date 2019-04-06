import React from "react";
import Answer from "./Answer"

const ScoreMechanism = props => {

  return (
    <>
      <td>
        <Answer id={props.id} changeHandler={props.changeHandler} weight="1" />
      </td>
      <td>
        <Answer id={props.id} changeHandler={props.changeHandler} weight="2" />
      </td>
      <td>
        <Answer id={props.id} defaultChecked changeHandler={props.changeHandler} weight="3" />
      </td>
      <td>
        <Answer id={props.id} changeHandler={props.changeHandler} weight="4" />
      </td>
      <td>
        <Answer id={props.id} changeHandler={props.changeHandler} weight="5" />
      </td>
    </>
  );
};

export default ScoreMechanism;
