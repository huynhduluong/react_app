import React from "react";
import "./App.css";
import ContextProvider from "./DemoHook/ContextProvider";
import DemoUseContext from "./DemoHook/DemoUseContext";
// import DemoUseReducer from "./DemoHook/DemoUseReducer";
// import DemoUseRef from "./DemoHook/DemoUseRef";
// import DemoUseMemo from "./DemoHook/DemoUseMemo";
// import DemoUseCallback from "./DemoHook/DemoUseCallback";
// import DemoHook from "./DemoHook";
// import DemoUseEffect from "./DemoHook/DemoUseEffect";
// import BTBurgerReducer from "./BTBurger/components";
// import HomeProtectedRoute from "./ProtectedRoute";
// import FormValidation from "./Form-Validation";
// import LifeCycle from "./LifeCycle";
// import BTGioHang from "./BTGioHangRedux/BTGioHang";
// import BTGioHang from "./BTGioHang/BTGioHang";
// import DemoProps from "./Props/DemoProps";
// import DemoCourse from "./ListAndKeys/DemoCourse";
// import ChangeColor from "./ChangeColorCar";
// import DemoConditionalAndState from "./DemoLogin/DemoConditionalAndState";
// import StateLessComponent from "./components/StateLessComponent";
// import StateFull, { StateFullComponent } from "./components/StateFullComponent";
// import Home from "./BTChiaComponent/Home";
// import DemoDataBinding from "./DataBinding/DemoDataBinding";
// import FunctionEvent from "./HandleEvent/FunctionEvent";
// import ClassEvent from "./HandleEvent/ClassEvent";
// import Home from "./BTUserManagement";

function App() {
  return (
    <ContextProvider>
      {/* <StateLessComponent />
      <StateFullComponent />
      <StateFull /> */}
      {/* <Home /> */}

      {/* <DemoDataBinding /> */}
      {/* <FunctionEvent /> */}
      {/* <ClassEvent /> */}
      {/* <DemoConditionalAndState/> */}
      {/* <ChangeColor/> */}

      {/* <DemoCourse /> */}
      {/* <DemoProps/> */}
      {/* <BTGioHang /> */}
      {/* <Home /> */}
      {/* <FormValidation /> */}
      {/* <LifeCycle /> */}
      {/* <BTBurgerReducer /> */}
      {/* <HomeProtectedRoute /> */}
      {/* <DemoHook /> */}
      {/* <DemoUseEffect /> */}
      {/* <DemoUseCallback /> */}
      {/* <DemoUseMemo /> */}
      {/* <DemoUseRef /> */}
      {/* <DemoUseReducer /> */}
      <DemoUseContext />
    </ContextProvider>
  );
}

export default App;
