import { DELETE_USER, EDIT_USER, SEARCH_USER, SUBMIT_USER } from "./constant";

export const actDeleteUser = (user) => {
  return {
    type: DELETE_USER,
    payload: user,
  };
};

export const actSubmitUser = (user) => {
  return {
    type: SUBMIT_USER,
    payload: user,
  };
};

export const actEditUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};

export const actSearchtUser = (keyword) => {
  return {
    type: SEARCH_USER,
    payload: keyword,
  };
};
