import { combineReducers } from "redux";
import postReducer from "./postReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  posts: postReducer
});

export default rootReducer;
