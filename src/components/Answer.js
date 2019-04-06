import React from 'react';

const Answer = (props) => {
  return ( 
    <input
        type="radio"
        name={props.id}
        checked={false}
        value={props.weight}
        onChange={props.changeHandler}
      />
  );
}

export default Answer;