import * as types from '../action-types';

export default (state = [], action) => {
  //   console.log("===>action", action.payload)
  switch (action.type) {
    case types.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case types.SET_TRUCK_INFO:
      return {
        ...state,
        truck_info: action.payload,
      };
    case types.GET_MENU_ITEM:
      return {
        ...state,
        menu_item: action.payload,
      };

    default:
      return state;
  }
};
