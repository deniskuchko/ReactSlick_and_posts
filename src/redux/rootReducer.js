import { combineReducers } from "redux";
import { postReduser } from "./postReduser";
import { appReduser } from "./appReducer";

export const rootReducer = combineReducers({
  posts: postReduser,
  app: appReduser,
});
