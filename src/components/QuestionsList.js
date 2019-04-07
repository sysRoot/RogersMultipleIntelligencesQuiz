import React from "react";
import Question from "./Question";
import Table from "react-bulma-components/lib/components/table";

const QuestionList = props => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>
              <p>Questions</p>
            </th>
            <th>
              <p>Type</p>
            </th>
            <th>
              <p>Rarely (1)</p>
            </th>
            <th>
              <p>Occasionally (2)</p>
            </th>
            <th>
              <p>Sometimes (3)</p>
            </th>
            <th>
              <p>Usually (4)</p>
            </th>
            <th>
              <p>Almost Always (5)</p>
            </th>
            <th>
              <p>Score</p>
            </th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>
              <p>Linguistic: {props.lin}</p>
            </th>
            <th>
              <p>Musical: {props.mus}</p>
            </th>
            <th>
              <p>Logic and Math: {props.lnm}</p>
            </th>
            <th>
              <p>Spatial: {props.spat}</p>
            </th>
            <th>
              <p>Bodily and Kinesthetic: {props.bnk}</p>
            </th>
            <th>
              <p>Intrapersonal: {props.inr}</p>
            </th>
            <th>
              <p>Interpersonal: {props.ine}</p>
            </th>
            <th>
              <p>Naturalist: {props.nat}</p>
            </th>
          </tr>
        </tfoot>
        <Question
          questions={props.questions}
          changeHandler={props.changeHandler}
          checked={props.selectedOpt}
        />
      </Table>
    </>
  );
};

export default QuestionList;
