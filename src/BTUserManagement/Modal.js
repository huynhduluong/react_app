import React, { Component } from "react";
import { connect } from "react-redux";
import { actSubmitUser } from "./modules/actions";

class Modal extends Component {
  /**
   * từng ô input phải có name riêng
   * từng ô phải có sự kiện onChange
   * tạo hàm handleOnchange để lấy value và name theo event.target
   */
  constructor(props) {
    //chỉ đc chạy 1 lần duy nhất
    super(props);
    this.state = {
      id: "",
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      type: "USER",
    };
    /**
     * hàm khởi tạo chạy 1 lần duy nhất trong vòng đời react
     * componentWillReceiveProps chạy nhiều lần, phụ thuộc vào nextProps thay đổi
     */
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.userEdit) {
      this.setState({
        id: nextProps.userEdit.id,
        username: nextProps.userEdit.username,
        name: nextProps.userEdit.name,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type,
      });
    } else {
      this.setState({
        id: "",
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type: "USER",
      });
    }
  }

  handleOnchange = (event) => {
    const { name, value } = event.target;
    this.setState({
      //[name] multi để giúp lấy nhanh các nam
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    //e.preventDefault(); giúp không load lại trang
    e.preventDefault();
    this.props.submitUser(this.state);
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.userEdit ? "EDIT USER" : "ADD USER"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.handleOnchange}
                    value={this.state.username}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.handleOnchange}
                    value={this.state.name}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={this.handleOnchange}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    onChange={this.handleOnchange}
                    value={this.state.phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    className="form-control"
                    name="type"
                    onChange={this.handleOnchange}
                    value={this.state.type}
                  >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: (user) => {
      dispatch(actSubmitUser(user));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    userEdit: state.userReducer.userEdit,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
