import React, { PureComponent } from "react";
//PureComponent khi chỉ hiện ra giao diện và không xử lý logic và không cần cập nhật lại

export default class Child extends PureComponent {
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log("UNSAFE_componentWillReceiveProps: ",nextProps)
    // }
    constructor(props){
      super(props)
      this.state = {
        num: 5,

      }
    }
    static getDeriveStateFromProps(newProp, currentState) {
      console.log("getDeriveStateFromProps: ", )
      //để setState lại thì phải return về object như state 
      if (newProp && newProp.num) {
        
      }
      return null;
    }
  render() {
    console.log("render - Child component");
    return <div>Child</div>;
  }
}
