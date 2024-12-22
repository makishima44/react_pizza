import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filterSlice from "../filter/filterSlice";
import cartSlice from "../cart/cartSlice";
import pizzaSlice from "../pizza/pizzaSlice";

export const store = configureStore({
  reducer: { filter: filterSlice, cart: cartSlice, pizza: pizzaSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
