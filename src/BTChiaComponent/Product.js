import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div className="container">
        <div className="card bg-light" style={{ width: 300 }}>
          <img
            className="card-img-top"
            src={this.props.img}
            alt="Card image"
            style={{ maxWidth: "100%", height: 250 }}
          />
          <div className="card-body text-center">
            <h4 className="card-title text-center">{this.props.nameProduct}</h4>
            <p className="card-text">{this.props.describeProduct}</p>
            <a href="#" className="btn btn-primary">
              Detail
            </a>
            <a href="#" className="btn btn-danger">
              Cart
            </a>
          </div>
        </div>
      </div>
    );
  }
}
