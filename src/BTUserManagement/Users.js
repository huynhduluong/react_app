import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";

class Users extends Component {
  renderTable = () => {
    let { userList, keyword } = this.props;
    if (keyword.trim() !== "") {
      userList = userList.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(keyword.trim().toLowerCase()) !== -1
        );
      });
    }
    return userList.map((item) => <UserItem user={item} key={item.id} />);
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.userReducer.userList,
    keyword: state.userReducer.keyword,
  };
};

export default connect(mapStateToProps, null)(Users);
