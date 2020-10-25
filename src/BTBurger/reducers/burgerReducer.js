const initialState = {
  burger: { salad: 1, meat: 1, cheese: 1 },
  menu: {
    salad: 10,
    cheese: 20,
    meat: 55,
  },
  total: 85,
};

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_AMOUNT_BURGER": {
      const { nameType, amount } = action;
      console.log(action);
      let burger = { ...state.burger };
      if (amount === -1 && burger[nameType] < 1) {
        return { ...state };
      }
      burger[nameType] += amount;
      state.total += amount * state.menu[nameType];
      state.burger = burger;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default burgerReducer;
