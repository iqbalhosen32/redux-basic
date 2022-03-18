import { createStore } from "redux";
import cartReducer from "../Reducers/cartReducers";

const store = createStore(cartReducer);

export default store;