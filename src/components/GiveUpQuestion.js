import React, {PropTypes} from 'react';

const GiveUpQuestion = ({appState}) => {

  return (
    <div>
      <p>I give up! What is it?</p>
      <input 
      type="text" 
      defaultValue="a girrafe"
      />

    </div>
  );
}

export default GiveUpQuestion;
