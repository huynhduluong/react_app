import React, { useContext } from "react";
import { context } from "./ContextProvider";

export default function DemoUseContext(props) {
  let { cartReducer } = useContext(context);
  let [cart, dispatch] = cartReducer;
  return <div>123</div>;
}
