import React, { Component } from "react";

export default class CardItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.cart.maSP}</td>
        <td>{this.props.cart.tenSP}</td>
        <td>
          <img src={this.props.cart.linkAnh} width={50} />
        </td>
        <td>
          <button
            onClick={() => {
              this.props.handleTangGiamSoLuong(this.props.cart, false);
            }}
          >
            -
          </button>
          {this.props.cart.soLuong}
          <button
            onClick={() => {
              this.props.handleTangGiamSoLuong(this.props.cart, true);
            }}
          >
            +
          </button>
        </td>
        <td>{this.props.cart.giaThanh}</td>
        <td>{this.props.cart.giaThanh * this.props.cart.soLuong}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.handleDeleteCart(this.props.cart);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}




