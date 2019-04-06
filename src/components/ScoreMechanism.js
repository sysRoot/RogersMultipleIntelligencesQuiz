import React from "react";
import Answer from "./Answer"

const ScoreMechanism = props => {

  return (
    <>
      <td>
        <Answer id={props.id} changeHandler={props.changeHandler} weight="1" checked={props.radioSelected} />
      </td>
      <td>
        <Answer id={props.id} changeHandler={props.changeHandler} weight="2" checked={props.radioSelected} />
      </td>
      <td>
        <Answer id={props.id} changeHandler={props.changeHandler} weight="3" checked={props.radioSelected} />
      </td>
      <td>
        <Answer id={props.id} changeHandler={props.changeHandler} weight="4" checked={props.radioSelected} />
      </td>
      <td>
        <Answer id={props.id} changeHandler={props.changeHandler} weight="5" checked={props.radioSelected} />
      </td>
    </>
  );
};

export default ScoreMechanism;
