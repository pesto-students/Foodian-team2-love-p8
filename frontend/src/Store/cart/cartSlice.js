import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    products :[]
}


export const  cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        //all functions want to perform in the cart
        addToCart:(state,action)=>{
            return { products:[...state.products,{...action.payload,amount:1}]}

        },
        clearCart:(state)=>{
            return {products:[]}
        },
        incrementProductsAmount :(state,action)=>{
            return {products:state.products.map(product=>product.id===action.payload.id?{...product,amount:product.amount+1}:product)}
        },
        decrementProductsAmount :(state,action)=>{
            return {products:state.products.map(product=>product.id===action.payload.id?{...product,amount:product.amount-1}:product)}
        },
        removeFromCart: (state, action) => {
            return {
              products: state.products.filter(
                (product) => product.id !== action.payload.id
              ),
            };
          }


    }

})
//slice helps us to combine reducers and actions

export const cartProducts = state => state.cart.products

export const { addToCart,clearCart,incrementProductsAmount,decrementProductsAmount,removeFromCart} = cartSlice.actions


export default cartSlice.reducer 