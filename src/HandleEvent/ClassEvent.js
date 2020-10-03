import React, { Component } from "react";

export default class ClassEvent extends Component {
  //phương thức của class
  handleFocus = () => {
    // alert("đã focus rồi nha");
    console.log("đã click");
  };

  handleFocusParams = (message) => {
    // alert("đã focus rồi nha");
    console.log(message);
  };

  render() {
    return (
      <div>
        <h2>ClassEvent</h2>
        <input type="text" placeholder="focus" onFocus={this.handleFocus} />
        <input
          type="text"
          placeholder="focus params"
          onFocus={() => this.handleFocusParams("đã click")}
        />
      </div>
    );
  }
}
