import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        Cart: false,
        OrderCart: false,
        appearOrderCart: false,
    },
    reducers:{
        // for toggle cart 
        toggleCart(state,action){
            state.Cart = action.payload;
        },
        // for toggle orderCart
        toggleOrderCart(state,action){
            state.OrderCart = action.payload;
        },
        // for appearing orderCart after pressing order button
        appearOrderCart(state,action){
            state.appearOrderCart = action;
        },
    }
})

export const authActions = authSlice.actions;

export default authSlice