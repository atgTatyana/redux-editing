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
  switch (action.type) {
    case SAVE_LIST_ITEM:
      if (state.edit) {
        const list = state.list.filter((item) => item.itemName !== state.listItem.itemName)
        return {
          ...state,
          list: list.concat(state.listItem),
        }
      }
      return {
        ...state,
        list: [...state.list, state.listItem],
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
