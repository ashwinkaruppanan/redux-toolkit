import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true,
};


export const getCartItem = createAsyncThunk('cart/getCartItem', async () => {
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount = amount + item.amount;
                total = total + item.amount * item.price;
            });
            state.amount = amount;
            state.total = total.toFixed(2);
        }
    },
    extraReducers: {
        [getCartItem.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItem.fulfilled]: (state, action) => {
            console.log(action)
            state.isLoading = false;
            state.cartItems = action.payload
        },
        [getCartItem.rejected]: (state) => {
            state.isLoading = false;
        }

    }

});

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
