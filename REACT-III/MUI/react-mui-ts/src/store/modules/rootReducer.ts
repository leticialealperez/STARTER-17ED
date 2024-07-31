import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cartSlice";
import { counterReducer } from "./counter/counterSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
});
