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
          </tr>
        </thead>
        <Question questions={props.questions} changeHandler={props.changeHandler} checked={props.selectedOpt} />
      </Table>
    </>
  );
};

export default QuestionList;
