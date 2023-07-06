
import { combineReducers } from "redux";
import cartReducer from './cart/cartSlice';
import addressReducer from "./UserInfo/addressSlice";


const rootReducer = combineReducers(
    {cart:cartReducer,address:addressReducer}
);


export default rootReducer;