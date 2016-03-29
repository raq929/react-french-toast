import objectAssign from 'object-assign';

const initialState = {
  items: [
    {
      text: "french toast",
      index: 0
    },
    {
      text: "a car",
      next: [2]
    },
    { text: "a greyhound",
      next: []
    }
  ],
  choiceA: 0,
  choiceB: 1,
  asked: [0, 1]
};

export default function frenchToastAppState(state = initialState, action){
  // const activeQuestion = state.items.find(function(question){
  //     return question.active;
  //   });

  // switch(action.type){
  //   case MORE_LIKE:
  //   //if it is more like one of the things, ask the next question
  //   if()
  // }
  return state;
}
