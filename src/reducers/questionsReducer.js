import objectAssign from 'object-assign';
import {CHOOSE_ITEM, CREATE_ITEM} from '../constants/ActionTypes';

const initialState = {
  items: [
    {
      text: "french toast",
      next: 3
    },
    {
      text: "a car",
      next: 2
    },
    { text: "a greyhound",
      next: null
    },
    {
      text: "a rock",
      next: null
    }
  ],
  choiceLeft: 1,
  choiceRight: 0,
  asked: []
};

export default function frenchToastAppState(state = initialState, action){
  
  if(action.type === CHOOSE_ITEM) { 
    //if there is another question, ask it, else ask if it is the thing. 
    let newState = objectAssign({}, state);
    //add this question to the asked array
    //TODO: add other question to asked array?
    newState.asked.push(action.choice);
    //change this item to choiceLeft
    newState.choiceLeft = action.choice;
    //if there is a next, and it hasn't been asked, make that choiceRight
    if (newState.items[action.choice].next &&
     newState.asked.indexOf(newState.items[action.choice].next === -1)){

      let nextQuestion = newState.items[action.choice].next;
      newState.choiceRight = nextQuestion;
    } else {
      //if there is no next, there is no choice B
      //TODO: change rendering for no choiceRight
      newState.choiceRight = undefined;
    }

    return newState;
  } else if (action.type === CREATE_ITEM){
    let newState = objectAssign({}, state);
    newState.items.push({text: action.text, next: null});
    const lastQuestion = state.choiceLeft;
    newState.items[lastQuestion].next = newState.items.length - 1;
    //reset game
    newState.choiceLeft = 1;
    newState.choiceRight = 0;
    newState.asked = [];
    return newState;
  } else {
    return state;
  }  
}
