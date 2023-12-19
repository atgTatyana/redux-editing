import { combineReducers, compose, legacy_createStore } from "redux";
import listReducer from './listReducer';
 
const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  
export default function configureStore() {
  return legacy_createStore(
    combineReducers({
      workList: listReducer,
    }),
    undefined,
    compose(
      ReactReduxDevTools,
    )
  );
}
