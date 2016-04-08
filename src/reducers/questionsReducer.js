import objectAssign from 'object-assign';
import {CHOOSE_ITEM, CREATE_ITEM} from '../constants/ActionTypes';


export default function frenchToastAppState(state, action){
  if(!state){
    const itemsArray = function(){
      if(typeof window != "undefined" && window.localStorage.getItem('items')){
        return JSON.parse(window.localStorage.getItem('items'));
      }
      return [
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
      ];
    };

    state = {
      items: itemsArray(),
      choiceLeft: 0,
      choiceRight: 1,
      asked: [0, 1]
    };
  }

  if(action.type === CHOOSE_ITEM) {
    //if there is another question, ask it, else ask if it is the thing.
    let newState = objectAssign({}, state);
    //add this question to the asked array
    if(newState.asked.indexOf(action.choice)=== -1){
      newState.asked.push(action.choice);
    }
    //change this item to choiceLeft
    newState.choiceLeft = action.choice;
    //if there is a next, and it hasn't been asked, make that choiceRight
    const nextQuestion = newState.items[action.choice].next;
    if (nextQuestion &&
      newState.asked.indexOf(nextQuestion) === -1){
      newState.choiceRight = nextQuestion;
    } else {
      for(let i = 0 ; i < newState.items.length; i++){
        if (newState.asked.indexOf(i) === -1){
          newState.choiceRight = i;
          break;
        } else {
          newState.choiceRight = undefined;
        }
      }
    }
    if(newState.choiceRight){
      newState.asked.push(newState.choiceRight);
    }
    return newState;
  } else if (action.type === CREATE_ITEM){
      let newState = objectAssign({}, state);
      newState.items.push({text: action.text, next: null});
      const lastQuestion = state.choiceLeft;
      newState.items[lastQuestion].next = newState.items.length - 1;
      //reset game
      newState.choiceLeft = 0;
      newState.choiceRight = 1;
      newState.asked = [];
      //pass items list to localStorage
      if(typeof(Storage) !== "undefined") {
        let localStorage = window.localStorage;
        localStorage.setItem('items', JSON.stringify(newState.items));
      }
      return newState;
  } else {
    return state;
  }
}
