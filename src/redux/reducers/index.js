import { combineReducers } from "redux";
import gioHangReducer from "./gioHangReducer";
import userReducer from "./../../BTUserManagement/modules/reducer";
import burgerReducer from "./../../BTBurger/reducers/burgerReducer";

const rootReducer = combineReducers({
  //reducer con bỏ vào
  gioHangReducer,
  userReducer,
  burgerReducer,
});

export default rootReducer;
