import React, {PropTypes} from 'react';

const frenchToastQuestion = ({chooseItem,appState}) => {

  let leftChoice = appState.items[appState.choiceLeft].text;
  let rightChoice = appState.items[appState.choiceRight].text;

  const itIs = "It is " + rightChoice + "!";
  if(rightChoice){
    return (
      <div>
      <p> Is it more like {leftChoice} or is it more like {rightChoice}? </p>
      <input 
        type="button" 
        value={leftChoice}
        onClick={() => chooseItem(appState.choiceLeft)}
      />
      <input 
        type="button" 
        value={rightChoice}
        onClick={() => chooseItem(appState.choiceRight)}
      />
      <br/>
      <input 
        type="button" 
        value={itIs}
      />
      </div>
    );
  } else {
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
};

  export default frenchToastQuestion;
