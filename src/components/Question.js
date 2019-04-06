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
                  checked={props.checked === "1"}
                  value="1"
                  onChange={() => props.changeHandler(cur.id)}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={cur.id}
                  checked={props.checked === "2"}
                  value="2"
                  onChange={() => props.changeHandler(cur.id)}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={cur.id}
                  checked={props.checked === "3"}
                  value="3"
                  onChange={() => props.changeHandler(cur.id)}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={cur.id}
                  checked={props.checked === "4"}
                  value="4"
                  onChange={() => props.changeHandler(cur.id)}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={cur.id}
                  checked={props.checked === "5"}
                  value="5"
                  onChange={() => props.changeHandler(cur.id)}
                />
              </td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
};

export default Question;
