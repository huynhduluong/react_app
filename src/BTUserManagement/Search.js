import React, { Component } from "react";
import { connect } from "react-redux";
import { actSearchtUser } from "./modules/actions";

class Search extends Component {
  handleOnchange = (e) => {
    this.props.handleSearch(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={this.handleOnchange}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (keyword) => {
      dispatch(actSearchtUser(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
