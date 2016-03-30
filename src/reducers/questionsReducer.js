import objectAssign from 'object-assign';
import {CHOOSE_ITEM} from '../constants/ActionTypes';
debugger;

const initialState = {
  items: [
    {
      text: "french toast",
      next: 4
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
  choiceA: 0,
  choiceB: 1,
  asked: [0, 1]
};

export default function frenchToastAppState(state = initialState, action){
  

  switch(action.type) {
    case CHOOSE_ITEM: 
    { 
      //if there is another question, ask it, else ask if it is the thing. 
      let newState = objectAssign({}, state);
      //add this question to the asked array
      //TODO: add other question to asked array
      newState.asked.push(action.choice);
      //change this item to choiceA
      newState.choiceA = action.choice;
      //if there is a next, make that choiceB
      if (newState.items[action.choice].next){
        newState.choiceB = newState.items[action.choice].next;
      } else {
        //if there is no next, there is no choice B
        //TODO: change rendering for no choiceB
        newState.choiceB = undefined;
      }

      newState.choiceA = newState.choice;

      return newState;
    }
    default:
      return state;
  }  
}
