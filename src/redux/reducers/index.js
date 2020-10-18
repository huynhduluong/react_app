import { combineReducers } from "redux";
import gioHangReducer from "./gioHangReducer";

const rootReducer = combineReducers({
  //reducer con bỏ vào
  gioHangReducer,
});

export default rootReducer;
