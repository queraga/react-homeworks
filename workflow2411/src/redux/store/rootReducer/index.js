import { combineReducers } from "redux";
import counterReducer from "../../reducers";
import todoReducer from "../../reducers/todoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export default rootReducer;
