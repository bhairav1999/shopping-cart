import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addCart(state, action) {
            state.push(action.payload)

        },
        removeCart(state, action) {

        }
    }
})

export const { addCart, removeCart } = CartSlice.actions;
export default CartSlice.reducer;