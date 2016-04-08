import chai, {should, expect} from 'chai';
import frenchToastAppState from './questionsReducer';
import {chooseItem, createItem} from "../actions/frenchToastActions";

describe("questionsReducer tests", ()=>{
  let fakeState = {
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
        },
        {
          text: "a ring",
          next: null
        }
      ],
      choiceLeft: 1,
      choiceRight: 0,
      asked: [0]
    };

  // describe("if no state was passed in", ()=>{
  //   it("should return the default state", () => {
  //     const fakeAction = chooseItem(0);
  //     const newState = frenchToastAppState(null, fakeAction);
  //     newState.choiceRight.should.equal(0);
  //     newState.choiceLeft.should.equal(1);
  //     expect(newState.asked).to.be.empty;
  //   });
  // });

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
    it("should set choiceRight to the next unasked question",()=> {
      const fakeAction = chooseItem(2);
      fakeState.asked = [0,1,3];
      const newState = frenchToastAppState(fakeState, fakeAction);
      expect(newState.choiceRight).to.equal(4);
    });
  });

  describe("if there are no unasked questions", ()=>{
    it("should set choiceRight to undefined", ()=>{
      const fakeAction = chooseItem(4);
      fakeState.asked = [0,1,2,3];
      const newState = frenchToastAppState(fakeState, fakeAction);
      expect(newState.choiceRight).to.be.undefined;
    });
  });

  describe("if next has already been asked", ()=>{
    it("should set choiceRight to the next unasked question",()=> {
      const fakeAction = chooseItem(0);
      fakeState.asked = [0,1,3];
      const newState = frenchToastAppState(fakeState, fakeAction);
      console.log(newState);
      expect(newState.choiceRight).to.equal(2);
    });
  });

  describe("if an unknown action was passed in", ()=>{
    it("returns the state it was given", () => {
      const unknownAction = "UNKNOWN_ACTION";
      const notAState = "Not really a state";
      frenchToastAppState(notAState, unknownAction).should.equal("Not really a state");
    });
  });


});

describe("if action CREATE_ITEM was passed in",
 ()=>{

    const fakeState = {
      items: [
        {
          text: "french toast",
          next: 3
        },
        {
          text: "a greyhound",
          next: null
        },
        {
          text: "a horse",
          next: null
        }
      ],
      choiceRight: 1,
      choiceLeft: 2,
      asked: [0]

    };
    const fakeCreateItemAction = createItem("newItem", 1);
    let newState = frenchToastAppState(fakeState, fakeCreateItemAction);
    it("adds the item to the item array", () => {
      newState.items.should.include({text: fakeCreateItemAction.text, next: null});
    });
    it("sets the next field to null", () => {
      expect(newState.items[newState.items.length - 1].next).to.be.null;
    });
    it("does not change the other items", () => {
      newState.items[0].text.should.equal("french toast");
      newState.items[1].text.should.equal("a greyhound");

    });
    it("should set the next value of the previous item to it's index",()=>{
      newState.items[fakeState.choiceLeft].next.should.equal(newState.items.length - 1);
    });
    it("should reset the game", ()=>{
      newState.choiceLeft.should.equal(0);
      newState.choiceRight.should.equal(1);
      expect(newState.asked).to.be.empty;
    });

  });
