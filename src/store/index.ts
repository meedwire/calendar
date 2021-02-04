import { createStore } from "redux";
import { months } from "./Reducers";

export const store = createStore(months)