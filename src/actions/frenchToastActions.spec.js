import chai, {should, expect} from 'chai';
import {chooseItem, createItem} from "./frenchToastActions";
import frenchToastAppState from "../reducers/questionsReducer";



describe("Actions component", () => {
  describe("choose item action", () => {
    it("sets the choice to the number it was passed", () => {
      chooseItem(0).choice.should.equal(0);
    });
    it("sets the type to CHOOSE_ITEM", () => {
      chooseItem(0).type.should.equal("CHOOSE_ITEM");
    });
  });

  describe("create item action", () => {
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
    const newState = frenchToastAppState(fakeState, fakeCreateItemAction);
    it("sets the type to CREATE_ITEM", ()=> {
      fakeCreateItemAction.type.should.equal("CREATE_ITEM");
    });
    it("sets the text to the input text", () => {
      fakeCreateItemAction.text.should.equal("newItem");
    });
    
  });
});

 
