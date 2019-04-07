import React from "react";

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
              <td>
                <input
                  type="radio"
                  name={cur.id}
                  checked={cur.radio[0]}
                  value="1"
                  onChange={props.changeHandler}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={cur.id}
                  checked={cur.radio[1]}
                  value="2"
                  onChange={props.changeHandler}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={cur.id}
                  checked={cur.radio[2]}
                  value="3"
                  onChange={props.changeHandler}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={cur.id}
                  checked={cur.radio[3]}
                  value="4"
                  onChange={props.changeHandler}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={cur.id}
                  checked={cur.radio[4]}
                  value="5"
                  onChange={props.changeHandler}
                />
              </td>
              <td>
                <th>
                  <p>{cur.score}</p>
                </th>
              </td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
};

export default Question;
