import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { carReducer } from "./reducers/carReducer";
import { alertReducer } from "./reducers/alertReducer";
import { bookingReducer } from "./reducers/bookingReducer";
const composeEnhancers = composeWithDevTools({});
const rootReducer = combineReducers({
  carReducer,
  alertReducer,
  bookingReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
