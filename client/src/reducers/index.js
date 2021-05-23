import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import organisations from "./organisations";
import shifts from "./shifts";

export default combineReducers({
  auth,
  message,
  organisations,
  shifts,
});
