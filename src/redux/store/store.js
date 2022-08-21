import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { postionReducers } from "../reducers/positionReducers";
import { tokenReducer } from "../reducers/tokenReducer";
import { userReducer } from "../reducers/userReducers";

const rootReducer = combineReducers({
  users: userReducer,
  positions: postionReducers,
  token: tokenReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
