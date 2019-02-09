import { combineReducers } from "redux";
import { Page_Load, Log_In } from "../actions/actions";

// function onPageLoadReducer(action) {
//   if (action.type === Page_Load) {
//     return "pageload";
//   }
// }

function userLoginReducer(state = {}, action) {
  return state;
}

const rootReducer = combineReducers({
  // onPageLoadReducer,
  userLoginReducer
});

export default rootReducer;
