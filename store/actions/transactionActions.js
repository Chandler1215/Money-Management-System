import moment from "moment";
import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./types";

export const addTransaction = ({ title, price, addedtime }) => (dispatch) => {
  const id = Math.floor(Math.random() * 600000);
 
  const newTransaction = {
    id,
    title,
    price: +price,
    addedtime: mainTime(),
  };

  dispatch({ type: ADD_TRANSACTION, payload: newTransaction });
};

export const deleteTransaction = (id) => (dispatch, getState) => {
  dispatch({ type: DELETE_TRANSACTION, payload: id });
};

export const mainTime = () => {
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  var currentTime = new Date();
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();

  // write output MM/dd/yyyy
  const MiliTime = year + "-" + pad(month) + "-" + pad(day);

  // const mainTime = moment(`${a}T00:00:00`).valueOf();
  return moment(`${MiliTime}T00:00:00`).valueOf();
};
