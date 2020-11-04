import React, { useReducer, useState } from "react";

const initialCart = [{ id: 1, name: "iphone", price: "3000", quantity: 1 }];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addCart":
      let cartUpdate = [...state];
      let index = cartUpdate.findIndex((itemCart) => {
        return itemCart.id === action.item.id;
      });
      if (index !== -1) {
        cartUpdate[index].quantity += 1;
      } else {
        const itemCart = { ...action.item, quantity: 1 };
        cartUpdate.push(itemCart);
      }
      return cartUpdate;

    default:
      break;
  }
  return [...state];
};

let arrProduct = [
  { id: 1, name: "iphone", price: "3000" },
  { id: 2, name: "Note 10 plus", price: "2500" },
  { id: 3, name: "Huawei", price: "1000" },
];

export default function DemoUseReducer() {
  let [cart, dispatch] = useReducer(cartReducer, initialCart);

  const handleAddCart = (itemClick) => {
    let action = {
      type: "addCart",
      item: itemClick,
    };
    dispatch(action);
  };

  return (
    <div className="container">
      <div className="row">
        {arrProduct.map((product) => {
          return (
            <div className="col-4" key={product.id}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={"https://picsum.photos/200/200"}
                  alt="{product.name}"
                />
                <div className="card-body">
                  <h4 className="card-title">{product.name}</h4>
                  <p className="card-text">{product.price}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      handleAddCart(product);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h3>Giỏ hàng</h3>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.quantity * item.price}</td>
                <td>
                  <button className="btn btn-danger">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
