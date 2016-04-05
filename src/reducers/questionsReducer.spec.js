import chai, {should, expect} from 'chai';
import frenchToastAppState from './questionsReducer';
import {chooseItem} from "../actions/frenchToastActions";

describe("questionsReducer tests", ()=>{
  var fakeState = {
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


  describe("if right choice (0) was chosen", ()=>{
    const fakeAction = chooseItem(0);
    const newState = frenchToastAppState(fakeState, fakeAction);

    it('it sets left choice to the chosen item', ()=>{
      
      newState.choiceLeft.should.equal(0);
    });
    it('sets the right choice to the next item', ()=>{
      newState.choiceRight.should.equal(fakeState.items[0].next);
    });
    it('adds the choice to the asked list', ()=>{
      newState.asked.should.include(0);
    });
  });
  describe("if an item with no next field was chosen", ()=>{
    const fakeAction = chooseItem(3);
    const newState = frenchToastAppState(fakeState, fakeAction);
    it("should set choiceRight to undefined",()=> {
      expect(newState.choiceRight).to.be.undefined;
    });
  });


});
