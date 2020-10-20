import { DELETE_USER, EDIT_USER, SEARCH_USER, SUBMIT_USER } from "./constant";

let initialState = {
  userList: [
    {
      id: 1,
      name: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP",
    },
    {
      id: 2,
      name: "hao",
      username: "nguyendp",
      email: "nguyendp@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP",
    },
  ],
  userEdit: null, //userEdit: null ==> add ; userEdit: !null ==> Edit
  keyword: "",
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case DELETE_USER: {
      let userList = [...state.userList];

      userList = userList.filter((item) => {
        return item.id !== actions.payload.id;
      });

      state.userList = userList;
      return { ...state };
    }
    case SUBMIT_USER: {
      const index = state.userList.findIndex((item) => {
        return item.id === actions.payload.id;
      });
      if (index !== -1) {
        let userList = [...state.userList];
        userList[index] = actions.payload;
        state.userList = userList;
        return { ...state };
      } else {
        const newUser = { ...actions.payload, id: Math.random() };
        let userList = [...state.userList, newUser];
        state.userList = userList;
        return { ...state };
      }
    }
    case EDIT_USER: {
      state.userEdit = actions.payload;
      return { ...state };
    }
    case SEARCH_USER: {
      state.keyword = actions.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default userReducer;
