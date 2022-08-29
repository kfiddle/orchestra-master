import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./Auth";
import InstsReducer from "./Insts";

const store = configureStore({
  reducer: { auth: AuthReducer, insts: InstsReducer },
});

export default store;
