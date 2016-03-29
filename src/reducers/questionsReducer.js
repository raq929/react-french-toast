import objectAssign from 'object-assign';

const initialState = {
  items:  [
    {
      text: "french toast",
      active: true,
      index: 0
    },
    {
      text: "a car",
      active: true,
      index: 1,
      next: [{}]
    }
  ]
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
