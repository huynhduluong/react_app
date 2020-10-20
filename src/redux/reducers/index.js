import { combineReducers } from "redux";
import gioHangReducer from "./gioHangReducer";
import userReducer from "./../../BTUserManagement/modules/reducer";

const rootReducer = combineReducers({
  //reducer con bỏ vào
  gioHangReducer,
  userReducer,
});

export default rootReducer;
