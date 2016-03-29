import * as types from '../constants/ActionTypes';

export function chooseItem(itemIndex){
  return {type: types.CHOOSE_ITEM, itemIndex};
}
