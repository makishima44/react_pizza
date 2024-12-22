import { createAsyncThunk } from "@reduxjs/toolkit";
import { PizzaType } from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<PizzaType[], Record<string, string>>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get<PizzaType[]>(
      `https://67190fa37fc4c5ff8f4c46f2.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return data;
  }
);
