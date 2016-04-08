import React, {PropTypes} from 'react';

const GiveUpQuestion = ({createItem}) => {
  const ENTER_KEY = 13;
  let inputNode;
  return (
    <div>
      <p>
        I give up! What is it?
      </p>
      <input
          ref={node => {
            inputNode = node;
          }}
          type="text"
          defaultValue="a giraffe"
        />
      <button
        onClick={()=>{
          createItem(inputNode.value);
        }}>
        Submit
      </button>
    </div>
  );
};

export default GiveUpQuestion;
