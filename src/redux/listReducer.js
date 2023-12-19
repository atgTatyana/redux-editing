import { SAVE_LIST_ITEM, DELETE_LIST_ITEM, SET_LIST_ITEM, SET_EDIT } from "./actions";

const initialState = {
  list: [],
  listItem: {
    itemName: "",
    itemValue: "",
  },
  edit: false,
};

const listReducer = (state = initialState, action) => {
  console.log('state = ', state);
  let index;
  switch (action.type) {
    case SAVE_LIST_ITEM:
      index = state.list.findIndex((item) => item.itemName === state.listItem.itemName);
      if (index === -1) {
        state.list.push(state.listItem);
      } else {
        state.list[index].itemValue = state.listItem.itemValue;
      }
      return {
        ...state,
      }

    case DELETE_LIST_ITEM:
      return {
        ...state,
        list: state.list.filter((item) => item.itemName !== action.payload),
      }

    case SET_LIST_ITEM:
      return {
        ...state,
        listItem: action.payload,
      }

    case SET_EDIT:
      return {
        ...state,
        edit: action.payload,
      }

    default:
      return state;
  }
};

export default listReducer;
