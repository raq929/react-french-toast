import React, {PropTypes} from 'react';

const frenchToastQuestion = (appState) => {
  const state = appState.appState
  let activeQuestions = [];
  debugger;

  activeQuestions.push(state.items[state.choiceA].text);
  activeQuestions.push(state.items[state.choiceB].text);

  const itIs = "It is " + activeQuestions[1] + "!"

  return (
    <div>
    <p> Is it more like {activeQuestions[1]} or is it more like {activeQuestions[0]}? </p>
    <input 
      type="button" 
      value={activeQuestions[1]}
      onClick={}
    />
    <input 
      type="button" 
      value={activeQuestions[0]}
    />
    <br/>
    <input 
      type="button" 
      value={itIs}
    />
    </div>
  );
};

export default frenchToastQuestion;
