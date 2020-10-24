import React, { PureComponent } from "react";
//PureComponent khi chỉ hiện ra giao diện và không xử lý logic và không cần cập nhật lại

export default class Child extends PureComponent {
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("UNSAFE_componentWillReceiveProps: ",nextProps)
    }
  render() {
    console.log("render - Child component");
    return <div>Child</div>;
  }
}
