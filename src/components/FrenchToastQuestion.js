import React, {PropTypes} from 'react';

const frenchToastQuestion = ({chooseItem,appState}) => {
  let activeItems = [];

  activeItems.push(appState.items[appState.choiceA].text);
  activeItems.push(appState.items[appState.choiceB].text);

  const itIs = "It is " + activeItems[1] + "!";

  return (
    <div>
    <p> Is it more like {activeItems[1]} or is it more like {activeItems[0]}? </p>
    <input 
      type="button" 
      value={activeItems[1]}
      onClick={() => chooseItem(appState.choiceA)}
    />
    <input 
      type="button" 
      value={activeItems[0]}
      onClick={() => chooseItem(appState.choiceB)}
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
