import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";

class BTBurgerReducer extends Component {
  renderBreadMid = () => {
    let { burger } = this.props;
    // let content = [];
    // for (let propBurger in burger) {
    //   let breadMid = [];
    //   for (let i = 0; i < burger[propBurger]; i++) {
    //     breadMid.push(<div className={propBurger} key={i}></div>);
    //   }
    //   content.push(breadMid);
    // }
    // return content;
    return Object.entries(burger).map(([propsBurger, value], index) => {
      let breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(<div className={propsBurger} key={i}></div>);
      }
      return breadMid;
    });
  };
  renderTable = () => {
    let { menu, burger, handleChangeAmout } = this.props;

    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td style={{ textTransform: "capitalize" }}>{propsMenu}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => {
                handleChangeAmout(propsMenu, 1);
              }}
            >
              +
            </button>
            <span>{burger[propsMenu]}</span>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleChangeAmout(propsMenu, -1);
              }}
            >
              -
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu] * price}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center text-success">Bài tập Burger</h3>
        <div className="row ">
          <div className="col-7 text-center">
            <h3>Bánh Burger của bạn</h3>
            <div className="breadTop"></div>
            {this.renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5 text-center">
            <h3 className=" text-success">Chọn thức ăn</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Thức ăn</th>
                  <th>Số lượng</th>
                  <th>Giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td>Tổng tiền</td>
                  <td>{this.props.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.burgerReducer.burger,
    menu: state.burgerReducer.menu,
    total: state.burgerReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeAmout: (nameType, amount) => {
      const action = {
        type: "CHANGE_AMOUNT_BURGER",
        nameType,
        amount,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BTBurgerReducer);
