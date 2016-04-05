import * as types from '../constants/ActionTypes';


export function chooseItem(itemIndex){
  return {
    type: types.CHOOSE_ITEM, 
    choice: itemIndex
  };
}

export function createItem(text){
  return {
    type: types.CREATE_ITEM,
    text: text
  };
}
