import React, {PropTypes} from 'react';

const frenchToastQuestion = (appState) => {
  const activeQuestions = appState.appState.items.filter(function(question){
      return question.active;
     });

  return (
    <div>
    <p> Is it more like {activeQuestions[1].text} or is it more like {activeQuestions[0].text}? </p>
    <input 
      type="button" 
      value={activeQuestions[1].text}
    />
    <input 
      type="button" 
      value={activeQuestions[0].text}
    />
    </div>
  );
};

export default frenchToastQuestion;
