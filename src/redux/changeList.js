import { SAVE_LIST_ITEM, DELETE_LIST_ITEM, SET_LIST_ITEM, SET_EDIT } from "./actions";

export const setForm = (dispatch) => (listItem) => {
  const action = {
    type: SET_LIST_ITEM,
    payload: listItem,
  };
  dispatch(action);
}

export const submitForm = (dispatch) => () => {
  const action = {
    type: SAVE_LIST_ITEM,
  };
  dispatch(action);
}

export const setEdit = (dispatch) => (edit) => {
  const action = {
    type: SET_EDIT,
    payload: edit,
  };
  dispatch(action);
}

export const deleteItem = (dispatch) => (itemName) => {
  const action = {
    type: DELETE_LIST_ITEM,
    payload: itemName,
  };
  dispatch(action);
}
