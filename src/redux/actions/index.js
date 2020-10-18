import {
  ADD_PRODUCT,
  COUNT_PRODUCT,
  DELETE_PRODUCT,
  DETAIL_PRODUCT,
} from "../constants";

export const actDelete = (product) => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
};

export const actTangGiam = (product, status) => {
  return {
    type: COUNT_PRODUCT,
    payload: product,
    status,
  };
};

export const actHandleDetail = (product) => {
  return {
    type: DETAIL_PRODUCT,
    payload: product,
  };
};

export const actAddProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
