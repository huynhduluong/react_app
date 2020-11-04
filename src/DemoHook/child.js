import React, { memo } from "react";

const DemoHookChildren = (props) => {
  console.log("cart");
  return (
    <div>
      {/* <small>{props.renderNotify()}</small>
      <h1>Child component</h1> */}
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default memo(DemoHookChildren);
