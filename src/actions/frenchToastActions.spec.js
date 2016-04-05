import chai, {should} from 'chai';
import {chooseItem} from "./frenchToastActions";


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
    it("sets the type to CREATE_ITEM", ()=> {
      createItem.type.should.equal("CREATE_ITEM");
    });
  });
});

 
