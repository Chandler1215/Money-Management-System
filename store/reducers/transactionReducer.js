import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../actions/types";

const initialState = {
  transactions: [
    { addedtime: 1587550342000, id: 2, title: "Clothes", price: -40 },
    { addedtime: 1587550342000, id: 3, title: "Side Project", price: 400 },
    { addedtime: 1587550342000, id: 4, title: "Bank Credit", price: 2000 },
    { addedtime: 1587500342000, id: 5, title: "Bought Groceries", price: -60 },
    { addedtime: 1587500342000, id: 6, title: "Transport", price: -10 },
    { addedtime: 1587500342000, id: 7, title: "Soup", price: -20 },
    { addedtime: 1587400342000, id: 9, title: "Funded my wallet", price: -200 },
    { addedtime: 1587400342000, id: 10, title: "Salary", price: 2000 }
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(({ id }) => id !== payload),
      };
    default:
      return state;
  }
};
