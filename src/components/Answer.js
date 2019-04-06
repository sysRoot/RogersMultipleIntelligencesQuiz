import React from 'react';

const Answer = (props) => {
  return ( 
    <input
        type="radio"
        name={props.id}
        checked={props.checked === props.weight}
        value={props.weight}
        onChange={props.changeHandler}
      />
  );
}

export default Answer;